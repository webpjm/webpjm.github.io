runTime.Import('initData.js')
    runTime.Import('tool.js')
    runTime.Import('快手/ksAdTool.js')
    runTime.Import('快手/kuaishouAd.js')
var xifan = {
    configUrlKsJiSu: '/sdcard/configXiFan.ini', // 默认抖音存储空间
    todayDataInfo: {
        lookNum: 0,
        clickNum: 0,
        time: time.nowStamp(),
    },
    isDone: false,
    allNum: 2000,
    isSameDay(TIME) {
        let flag = false
        if (autoUtils.getTodayTime(TIME) == autoUtils.getTodayTime(time.nowStamp())) {
            flag = true
        }
        return flag
    },
    // 获取今天的数据 点击喜欢、样机等数据
    getTodayDataInfo() {
        let todayDataInfo = this.getConfig('todayDataInfo')
        if (todayDataInfo == '' || !this.isSameDay(todayDataInfo.time)) {
            this.setConfig('todayDataInfo', this.todayDataInfo)
        } else {
            this.todayDataInfo = todayDataInfo
        }
    },
    startTask() {
        if(autoUtils.getText('首页')&&autoUtils.getText('福利')) {
            autoUtils.clickGetText('福利')
        } else {
            autoUtils.loginApp('喜番',true)
        }
        this.startLookAd()

    },
    startLookAd() {
        for (let i = 0; i < 2000; i++) {
            if (this.isDone) {
                break;
            } else {
                this.clickzhuanqian()
                this.findAd(1)
            }
        }
    },
    getConfig(key) {
        let data = config.getConfig(this.configUrlKsJiSu, key, '')
        if (data != '') { data = JSON.parse(data) }
        return data
    },
    setConfig(key, value) {
        config.setConfig(this.configUrlKsJiSu, key, JSON.stringify(value))
    },
    backToHome(num) {
        num++
        console.log(num + '返回次数')
        autoUtils.sleep(5, '开始等待')
        if (autoUtils.getText('首页') && autoUtils.getText('福利')) {
            autoUtils.clickGetText('福利')
            autoUtils.logText('返回成功')
        } else {
            if (num < 6) {
                autoUtils.autoBack()
            }
            else {
                autoUtils.loginApp('喜番',true)
            }
            this.backToHome(num)
        }
    },
    clickzhuanqian() {
        this.backToHome(1)
    },
    findAd(num, notLook) {
        num++
        autoUtils.sleep(5, '开始等待')
        if (autoUtils.getText('看视频领')) {
            autoUtils.logText('开始看广告')

            if (!notLook) {
                this.lookAd()
            }
        } else {
            autoUtils.logText('开始滑动寻找')
            this.detailSwipe()
            if (num > 15) {
                this.startTask()
            } else {
                this.findAd(num, notLook)
            }
        }
    },
    detailSwipe() {
        let x = rand.randNumber(200, screen.getScreenWidth() - 200)
        let y = rand.randNumber(500, 800)
        let y1 = rand.randNumber(screen.getScreenHeight() - 500, screen.getScreenHeight() - 300)

        let arr = [1, 2]
        let type = autoUtils.shuffle(arr)[0]
        if (type == 1) {
            hid.swipEx(x, y1, x, y, 0, rand.randNumber(500, 1500), 0);
        }
        else {
            hid.swipAI(x, y1, x, y)
        }
    },
    goToLookVideo() {
        autoUtils.logText('每看3个需要休息5分钟')
        this.startMove()
        
    },
    lookAd() {
        this.getTodayDataInfo()
        autoUtils.clickGetText('看视频领')
        this.checkAdSuccess()
    },
    startMove() {
        this.backToHome(1)
        autoUtils.clickGetText('首页')
        for (let i = 0; i < 3; i++) {
            kaishouAd.handelVideo()
            kaishouAd.startHuaDong()
        }
    },
    isAdPage() {
        return autoUtils.getText('广告') || autoUtils.getText('可领奖励') || autoUtils.getText('秒后') || autoUtils.getText('领取') || autoUtils.getText('说点什么')
    },
    checkAdSuccess() {
        autoUtils.sleep(5, '等待检测广告标识')
        if (this.isAdPage()) {
            autoUtils.logText('广告进入成功')
            for (let i = 0; i < 60; i++) {
                if (autoUtils.getText('可领') || autoUtils.getText('后可')) {
                    autoUtils.logText('广告观看中....')
                } else if (kaishouAd.getCvByText('直播的礼物按钮') || autoUtils.getText('说点什么')) {
                    autoUtils.logText('进入了直播页面')
                    autoUtils.sleep(45, '等待45秒')
                    autoUtils.logText('观看完成了')
                    this.handleSuccessAd()
                    break;
                }
                else {
                    if (autoUtils.getText('成功')) {
                        autoUtils.logText('观看成功已获取奖励....')
                        autoUtils.sleep(20, '等待20秒')
                        this.handleSuccessAd()
                        break;
                    }
                }
                autoUtils.sleep(2, '开始检测广告是否播放完成或者跳转了详情页')
            }
        }
    },
    clickAd() {
        autoUtils.sleep(3, '开始点击')
        if (autoUtils.getText('了解')) {
            autoUtils.sleep(5, '了解')
            autoUtils.clickGetText('了解')
        } else if (autoUtils.getText('查看')) {
            autoUtils.sleep(5, '查看')
            autoUtils.clickGetText('查看')
        } else if (autoUtils.getText('申请')) {
            autoUtils.sleep(5, '申请')
            autoUtils.clickGetText('申请')
        } else if (autoUtils.getText('咨询')) {
            autoUtils.sleep(5, '咨询')
            autoUtils.clickGetText('咨询')
        }
        else {
            hid.click(screen.getScreenWidth() / 2, 500)
        }

        this.handleAdDetailMore()

        let num1 = autoUtils.getRandomInt(3, 6, 'int')
        for (let i = 0; i < num1; i++) {
            autoUtils.sleep(5, '广告详情等待滑动')
            this.detailSwipe()
        }

        autoUtils.autoBack()


        if(this.isAdPage()) {

        }else{
            autoUtils.loginApp('喜番',true)
        } 


    },
    handleAdDetailMore() {
        if(autoUtils.getText('查看')) {
            autoUtils.clickGetText('查看')
            let num1 = autoUtils.getRandomInt(3, 6, 'int')
            for (let i = 0; i < num1; i++) {
                autoUtils.sleep(5, '广告详情等待滑动')
                this.detailSwipe()
            }
            autoUtils.autoBack()
        } 
    },
    handleSuccessAd() {
        autoUtils.logText('处理广告....')
        let todayLookNum = this.todayDataInfo.lookNum + 1
        let todayClickNum = this.todayDataInfo.clickNum
        if (rand.randNumber(1,10)>6) {
            autoUtils.logText('随机到了点击....')
            todayClickNum += 1
            this.clickAd()
            
        }
        this.todayDataInfo.lookNum = todayLookNum
        this.todayDataInfo.clickNum = todayClickNum
        this.setConfig('todayDataInfo', this.todayDataInfo)
        this.fanhuijiance(1)
    },
    fanhuijiance(num) {
        num++
        autoUtils.sleep(3, '开始领取奖励（返回操作）')
        autoUtils.autoBack()
        autoUtils.sleep(2, '开始检测是否返回成功')
        if (autoUtils.getText('看广告领')||autoUtils.getText('首页')||autoUtils.getText('福利')) {
            autoUtils.logText('返回成功')
             this.goToLookVideo()
        } else {
            autoUtils.sleep(3, '返回检测' + (num - 1) + '次')
            if (autoUtils.getText('立即领取')) {
                if (autoUtils.getText('立即领取')) {
                    autoUtils.clickGetText('立即领取')
                    this.checkAdSuccess()
                }
                else if (autoUtils.getText('立即')) {
                    autoUtils.clickGetText('立即')
                    this.checkAdSuccess()
                }
                else if (autoUtils.getText('领取')) {
                    autoUtils.clickGetText('领取')
                    this.checkAdSuccess()
                }
            }else{
                this.fanhuijiance(num)
            }

        }

    }
}
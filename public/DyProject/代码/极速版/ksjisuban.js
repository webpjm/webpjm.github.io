var ksjisuban = {
    configUrlKsJiSu: '/sdcard/configKsJiSu.ini', // 默认抖音存储空间
    todayDataInfo: {
        lookNum: 0,
        clickNum: 0,
        time: time.nowStamp(),
    },
    isDone: false,
    allNum: 200,
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
        if (autoUtils.getText('去赚') && autoUtils.getText('首页')) {
            autoUtils.logText('在首页了')
        } else {
            autoUtils.loginApp('快手极速版')
        }
        this.startLookAd()

    },
    startLookAd() {
        for (let i = 0; i < 200; i++) {
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
        if (autoUtils.getText('去赚') && autoUtils.getText('首页')) {
            autoUtils.logText('返回成功')
        } else {
            if (num < 6) {
                autoUtils.autoBack()
            }
            else {
                autoUtils.loginApp('快手极速版')
            }
            this.backToHome(num)
        }
    },
    clickzhuanqian() {
        this.backToHome(1)
        this.goIndexPage(1)
    },
    findAd(num, notLook) {
        num++
        autoUtils.sleep(5, '开始等待')
        if (autoUtils.getText('看广告得') && autoUtils.getText('领福利')) {
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
    goIndexPage(num) {
        num++

        if (autoUtils.getText('广告得') || autoUtils.getText('任务中心')) {
            autoUtils.logText('返回成功了')
            return;
        }

        if (autoUtils.getText('去赚')) {
            autoUtils.clickGetText('去赚')
        }

        if (autoUtils.getText('免费红包')) {
            autoUtils.qiutApp()
            this.backToHome(1)
            this.goIndexPage(num)
        }

        if (autoUtils.getText('立即签到')) {
            autoUtils.clickGetText('立即签到')
            autoUtils.autoBack()
            autoUtils.clickGetText('去赚')
        }

        if (autoUtils.getText('打卡')) {
            autoUtils.autoBack()
            autoUtils.sleep(3,'等待')
            autoUtils.clickGetText('去赚')
        }

        autoUtils.sleep(5,'等待')
        if (!autoUtils.getText('任务中心') && !autoUtils.getText('我的金币')) {
            this.backToHome(1)
            autoUtils.clickGetText('去赚')
            if (num > 6) {
                autoUtils.qiutApp()
                this.startTask()
            } else {
                this.goIndexPage(num)
            }
        } else {
            autoUtils.logText('找到任务中心开始任务')
        }
    },
    getAllNumAd() {
        var ocrRes = screen.MLKitOcr('zh', 1);
        let result = ocrRes.getJson()
        let numStr = ''
        for (var i = 0; i < result.length; i++) {
            let str = String(result[i].text)
            if (str.indexOf('广告得') > -1) {
                numStr = String(result[i + 1].text)
                break;
            }
        }
        if (numStr.indexOf("单日最高赚") > -1) {
            let n = numStr.split(',')[1]
            let n1 = n.split("/")[0]
            let n2 = n.split("/")[1]
            this.allNum = n2 - n1
        }
    },
    goToLookVideo() {
        autoUtils.logText('每看3个需要休息5分钟')
        this.startMove()
        
    },
    lookAd() {
        this.getTodayDataInfo()
        this.getAllNumAd()
        console.log(this.allNum, this.todayDataInfo)
        if (this.allNum > 1) {
            autoUtils.logText('广告可看数量大于1开始观看')
            // if (this.todayDataInfo.lookNum > 0 && this.todayDataInfo.lookNum % 3 == 0) {
            //     this.goToLookVideo()
            //     autoUtils.logText('开始返回看广告')
            //     this.clickzhuanqian()
            //     //只是找到看广告的按钮，不走lookAd方法
            //     this.findAd(1, true)
            //     autoUtils.logText('继续看广告')
            // }
            autoUtils.clickGetText('广告得')
            this.checkAdSuccess()
        } else {
            this.isDone = true
        }
    },
    startMove() {
        this.backToHome(1)
        autoUtils.clickGetText('首页')
        for (let i = 0; i < 5; i++) {
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
            for (let i = 0; i < 150; i++) {
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

        if (!autoUtils.getText('成功')) {

            this.handleAdDetailMore()

            let num1 = autoUtils.getRandomInt(3, 6, 'int')
            for (let i = 0; i < num1; i++) {
                autoUtils.sleep(5, '广告详情等待滑动')
                this.detailSwipe()
            }

            autoUtils.autoBack()
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
        let isClick = autoUtils.shouldClick(todayLookNum, todayClickNum)
        autoUtils.logText("----todayLookNum----:"+todayLookNum+"------todayClickNum::"+todayClickNum)
        if (isClick) {
            autoUtils.logText('随机到了点击....')
            todayClickNum += 1
            if(autoUtils.getText('关注')>-1) {
                autoUtils.clickGetText('关注')
            }else{
                this.clickAd()
            }
            
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
        if (autoUtils.getText('广告得') && autoUtils.getText('领福利')) {
            autoUtils.logText('返回成功')
            if (this.todayDataInfo.lookNum % 3 == 0) {
                this.goToLookVideo()
            }
        } else {
            autoUtils.sleep(3, '返回检测' + (num - 1) + '次')
            if (autoUtils.getText('领取') || autoUtils.getText('奖励')) {
                if (this.todayDataInfo.lookNum == 0) {
                    this.todayDataInfo.lookNum = 1
                }
                if (this.todayDataInfo.lookNum % 3 == 0) {
                    this.closeAdIcon()
                    this.goToLookVideo()
                } else {
                    if (autoUtils.getText('额外')) {
                        this.closeAdIcon()
                    }
                    else if (autoUtils.getText('奖励')) {
                        autoUtils.clickGetText('奖励')
                        this.checkAdSuccess()
                    } else if (autoUtils.getText('领取')) {
                        autoUtils.clickGetText('领取')
                        this.checkAdSuccess()
                    }
                }
            }else{
                this.fanhuijiance(num)
            }

        }

    },
    closeAdIcon() {
        var detects = auto.findImages(['iVBORw0KGgoAAAANSUhEUgAAACIAAAAcCAYAAAAEN20fAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAVgSURBVEhLhZb5XxNJEMX941du5Ei4bxEUkGPZZQOouyIKCGhAQO4AIQm5A6iIIrytV5MeZiZBfnifyfR0V327qro6D5BIw6mbZBrXiZRr7LeKZ/Pib8e7c04yA6SKKJmzVQBii4v1N6HyYBzzOjLvxZTI6cYopIzcEDcpS3eDOGVDiWwnnncz5noXZ84IeCAKQG7ihamwdiGLPOMuRyJ7nsqxzsjhVJU6LRwTFY0IjV2EI7g6SVgTuTMTFQ+IE6Ig/KKf0STOD47xI5bEr4SMGedmjheEzqnLSAzxjU18/HcGoY+r+HoUxXU8Y393OrlTYvg6mcW3cAyhpSDm/pnC1sIScgdhN4xDD0xF86R8OQxje24BE339aK+uxWBbJ4L/vUF290AMSPq8Dqm0MyoCnMgqRG7vUNeOdPagpaIaPfUNmAtMI7W1h6uY2CoA4WLZ6Y9YHDuLSxjt7oWvtBx1D0tRX1KGx42NeBcIIL29jyseT6cB5ptp09RZ4pzMTgjzky9kbbPaqC0pVXXU+bA4/Uo2HFFgpy0b5DJ6gt2lZfz15Cmaqx4pCBfXl5Sgs74eL56P4mh1HRfHJxaAMeKA+B6JI/xpAy+Hx9Dla1CImoclasdXXoGhrh6sv52/G0QlLyyocHANk8+G0Pqo1rWbxooqjPf2Y3N+UXOvhhTiTH9zbPv9om6Ec8062miqrMZYzxP5vqywXogCEE4gDPM4+3cAvU0tmiZj1F9Wgecd3Vh5Pas1wCK+Tp7a9TDU1YWG8koXBCPDCEU3tmyIe0GMWNk8LTw5/a3tBTtk7ll48a1dJLb3sDD1UsfqSq0IMh2E5ti8zCNoQX0ZpSXNoqIgFCufMEwFU8K6MTB0yJ0yDRP9A+j2N9rfKEIMdnZj9c07nO4fqa1iUdBa84IUm2hSdbiyhqnBYbTV1N3CSDEb2WMC6K0HQqgtaePGaTHdGREjA5Pc2cfbiUnrSJZJ3fwhp4HKQ1Dt9T6th8j6plUPdE47jp0XKHOmT2lo8qJyAziPKA1eyn0UXvuMP/ueWiAOAKpGNNDVjb0PKzq3wOE9khYvzhy9wCtG5DKawLFATI+MocPnv3We7xEGhBEx/eZbNF7U4V2SiHicGyhp3TeSsovjqHbc8f5naKyqRi1Phoj1wMj4KipRxwjlx+x+I3fL18jJvbWhV4RIakRevDAiQmRDBwjOzGh/8ItDA8EIdPobMDEwhMDwCHpbWrVzEoQypyYo/SazL/2GBVsUQpQRf6IHhoiOSU+xj6T39rEwPX1bnHkIOmSj412SCR3h7CiCj9LMnrZ1oKGyyobhmsfN1rzUbsjqI1qYlj8DUABidBGVolzd1Orv9vvVIPNvIHhfsD/wSr9KcQM5fDmOaSpYyE3V0m8II+u4lv2GdcM7iLXmBTCyQa4z0sAiUWwvBsXggNaD2R1FB6O9fVIvH3ARSyiACS9/86SwSANDw2itrXPVDSNFyG1Zaxcxo+OQgjAt36IxbMy9x0jXY/jLLQhjyNwXEbkvaMik0ECY5w/5g5XaO8BsYMquG2PDRJM+WMRmEw4Qy8h5OIrlV6/R39SqITWLTT1kpR6YCttAPpKuEGdPZU5aI8tC9dYNrwLeS0yrbsAZEQ5Qv9I5nbAy81Yrnqng89PsHE4Pjx0AeTkBvBJA7npL2jyPPa+GvpY2zE2/1A5tb8iA5M6tiJjBm+yZ7iYU/ISZ8QnsLq9qPdzr2KW8cVnDVLFI38nV8FkuT26IPpA9t+fxnbJAzGIRi5bE30+S7lRI2Is79sqCME+2At5VP+W/8XXG7Yu6BckvcBmy5XRQ7PvdMg6MCOEdu9UZ/gewaSu3hT9cogAAAABJRU5ErkJggg=='], 0.8, 5000, 2, [0, 0, 1, 1]);
        if (detects != null) {
            detects[0].hidClick();
        }
    }
}
try {
    //调试的时候会不打开start.js初始化界面，获取不到globData导致报错，加入try catch防止报错
    if (globData) {
        let data = JSON.parse(globData)
        AutoGlobData.runApp = data.runApp
        AutoGlobData.runModel = data.runModel
        AutoGlobData.miniAppNum = data.miniAppNum
        AutoGlobData.lookRangeNum = data.lookRangeNum
        AutoGlobData.phoneIp = mainPhoneIp
        AutoGlobData.otherValue = data.otherValue
        AutoGlobData.adMaxNum = data.lookRangeNum[1]
        AutoGlobData.adMiniNum = data.lookRangeNum[0]
        AutoGlobData.chaPingNum = data.chaPingNum
        AutoGlobData.chaPingModel = data.chaPingModel

        if (AutoGlobData.runApp == 5 || AutoGlobData.runApp == 6) {
            AutoGlobData.configUrl = AutoGlobData.configUrlKs
        }
    }
} catch (error) {
    console.log(error)
}


let autoUtils = {
    useSocket: true,
    loginApp(name, notAll) {
        if (name == '抖音') {
            if (this.isIndexPage()) {
                this.logText('返回首页成功')
                return;
            }
        }
        this.sleep(3, '登录开始--先返回主页')
        this.autoHome()
        this.sleep(3, '开始登录' + name)
        this.findApp(name, 1, notAll)
    },
    // 根据时间判断是否停止
    stopRunByTime() {
        let date = new Date() // 时间戳为秒：10位数
        let hour = Number(date.getHours())
        if (hour >= 0 && hour <= 6 && AutoGlobData.appPhoneName.indexOf('抖') > -1) {
            this.logText('当前0点到6点之间-时间条件不通过')
            this.qiutApp()

            //暂停脚本，如果有快手任务或者其他任务的则注释此处
            debug.setAllPause()
        }
        //中午停止运行为抖音火山版晚上腾时间
        else if (hour >= 13 && hour < 18 && AutoGlobData.runApp == 6) {
            this.logText('当前18点到21点之间-时间条件不通过')
            // this.qiutApp()
            let currentTimeNum = new Date().getHours() * 60 * 60 + new Date().getMinutes() * 60
            let setTimeNum = 18 * 60 * 60 + 30 * 60  // 距离下午18:30需要等待的时间
            let num = setTimeNum - currentTimeNum
            if (num > 0) {
                console.log(num, '需要等待的时间')
                let randomNum = num + rand.randNumber(-600, 600) // 随机十分钟左右启动
                this.autoHome()
                this.sleep(randomNum, '开始运行火山')
                if (AutoGlobData.appPhoneName.indexOf('火山') == -1) {
                    AutoGlobData.appPhoneName = "抖音火山版"
                    AutoGlobData.runModel == 5
                    this.loginApp(AutoGlobData.appPhoneName)
                }
            }
        }
    },
    autoHome() {
        if (device.getModel() == 'V1809A') {
            hid.home()
            this.sleep(3, '关闭弹窗')
            hid.clickPercent(0.5, 0.3852)
            this.sleep(3, '关闭弹窗')
        } else {
            hid.home()
        }
    },
    autoBack() {
        if (device.getModel() == 'V1809A') {
            hid.back()
            this.sleep(3, '关闭弹窗')
            hid.clickPercent(0.5, 0.3852)
        } else {
            this.sleep(3, '开始返回')
            hid.back()
            this.sleep(3, '返回后')
        }
    },
    autoRecents() {
        if (device.getModel() == 'V1809A') {
            hid.swip(screen.getScreenWidth() / 2, screen.getScreenHeight(), screen.getScreenWidth() / 2, screen.getScreenHeight() - 100, 25, 0, 1500)
        } else {
            hid.swip(screen.getScreenWidth() / 2, screen.getScreenHeight(), screen.getScreenWidth() / 2, screen.getScreenHeight() - 350, 25, 0, 500)
        }
        this.sleep(5, '关闭弹窗')
    },
    // 打印+当前时间
    logText(text, text1) {
        text1 = text1 ? text1 : ''
        let str = this.getTimeStr()
        if (hid.isOn()) {
            print.log(text)
            // autoUtils.logText(text)
        } else {
            print.log(text + text1, 'hid连接已关闭')
        }
        try {
            if (!hid.isOn()) {
                ws.send(device.getDeviceIntID() + '@' + text + '--' + str + '--------hid连接已关闭')
            } else {
                ws.send(device.getDeviceIntID() + '@' + text + '--' + str)
            }

            if (socketPic) {
                let str1 = 'data:image/jpeg;base64,'
                ws.send(device.getDeviceIntID() + '@这是图片@' + str1 + screen.screenShot(374, 666, 50).toJpgBase64(50))
            }
        }
        catch (err) { }
    },
    // 等待
    sleep(timeFlag, text) {
        // this.logText(str+ '执行--'+text + ' -- 开始等待' + (timeFlag-i) + '秒' + ' --已运行：' + ((newTime - timestart) / (1000 * 60)).toFixed(2) + '分钟')
        // 等待大于5分钟
        if(!text) {
            text = ''
        }
        let arr = [-0.2, -0.3, -0.4, -0.5, 0.1, 0.2, 0.3, 0.5]
        timeFlag = timeFlag + this.shuffle(arr)[0]
        if (timeFlag > 60) {
            
            this.showLog()
            if(timeFlag>15*60) {
                this.autoHome()
            }
             // 早上抖音晚上火上版时候，随机时间返回主页等待
            let randNum = rand.randNumber(60, 100)
            for (let i = 0; i < timeFlag; i++) {
                this.logText('开始等待---' + (timeFlag - i > 0 ? timeFlag - i : 0) + '秒' + text)
                sleep.millisecond(毫秒 = 1000);
                if (text.indexOf('运行火山版') > -1) {
                    if (i == randNum) {
                        this.autoHome()
                    }
                }
            }

            this.hideLog()

            if(timeFlag>15*60) {
                this.loginApp(AutoGlobData.appPhoneName)
            }

        } else {
            this.logText('开始等待' + (timeFlag) + '秒-------' + text)
            sleep.millisecond(毫秒 = 1000 * timeFlag);
        }
    },
    // 随机数组
    shuffle(arr) {
        let i = arr.length;
        while (i) {
            let j = Math.floor(Math.random() * i--);
            [arr[j], arr[i]] = [arr[i], arr[j]];
        }
        return arr;
    },
    // 随机数组对象
    shuffleObj(arr) {
        autoUtils.logText(arr, 'aaaaaa')
        let i = arr.length;
        let newArr = []
        let newArr1 = []
        for (var key = 0; key < arr.length; key++) {
            newArr.push(key)
        }
        while (i) {
            let j = Math.floor(Math.random() * i--);
            [newArr[j], newArr[i]] = [newArr[i], newArr[j]];
        }

        for (var key = 0; key < newArr.length; key++) {
            newArr1.push(arr[newArr[key]])
        }
        return newArr1;
    },

    getTimeStr(time) {
        let date = new Date() // 时间戳为秒：10位数
        if (time) {
            date = new Date(time)
        }
        let hour = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()
        let minute = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
        let second = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds()
        return `${hour}:${minute}:${second}`
    },
    // 运行完成后一定要执行closeApp的方法
    findApp(name, num, notAll) {
        this.logText("登录次数" + num)
        this.sleep(5, '开始寻找APP')
        num++
        let flag = false
        if (notAll) {
            flag = this.getText(name)
        } else {
            flag = this.getText(name, "isAll")
        }

        if (!flag && num < 8) {
            if (num > 0 && num <= 3) {
                this.sleep(2, '开始左滑动寻找APP')
                hid.swipM(screen.getScreenWidth() - 50, screen.getScreenHeight() / 2, 100, screen.getScreenHeight() / 2)
                this.findApp(name, num, notAll)
            } else if (num > 3 && num < 6) {
                this.sleep(2, '开始右滑动寻找APP')
                hid.swipM(100, screen.getScreenHeight() / 2, screen.getScreenWidth() - 50, screen.getScreenHeight() / 2)
                this.findApp(name, num, notAll)
            }
            else {
                this.logText('多次都没有找到，开始app启动')
                app.openApp(this.getPackage(name))
                this.sleep(20, name + 'app启动中...')
            }
        } else {
            if (flag) {
                this.logText("找到了图标，准备点击" + name)

                if (notAll) {
                    this.clickGetText(name, true)
                } else {
                    this.clickGetTextAll(name, true)
                }

                let time = this.getRandomInt(10, 15, 'int')
                this.sleep(time, '启动APP中')

                if (autoUtils.getText('以后再说')) {
                    autoUtils.clickGetText('以后再说')
                    autoUtils.sleep(5, '等待')
                }
                if (autoUtils.getText('签到')) {
                    autoUtils.sleep(2, '等待关闭签到')
                    autoUtils.autoBack()
                    autoUtils.sleep(5, '等待')
                }
                if (autoUtils.getText('开红包')) {
                    autoUtils.sleep(2, '等待关闭红包界面')
                    autoUtils.autoBack()
                    autoUtils.sleep(5, '等待')
                }
            }
        }
    },
    // 区间随机数取值
    getRandomInt(min, max, type) {
        if (type == 'int') {
            return parseInt((Math.random() * (max - min) + min))
        } else if (type == 'round') {
            return Math.round((Math.random() * (max - min) + min))
        } else {
            return (Math.random() * (max - min) + min).toFixed(2);
        }
    },
    // 获取APP包名
    getPackage(name) {
        let list = JSON.parse(app.getAllApp())
        let str = ''
        for (var i = 0; i < list.length; i++) {
            if (list[i].appName == name) {
                str = list[i].package
            }
        }
        return str
    },
    getPackageNotAll(name) {
        let list = JSON.parse(app.getAllApp())
        let str = ''
        for (var i = 0; i < list.length; i++) {
            if (list[i].appName.indexOf(name)>-1) {
                str = list[i].package
            }
        }
        return str
    },
    //判断文字是否存在 默认模糊查找 isall 精确查找
    getText(text, isAll) {
        let isExsit = false
        var arrFind = [1, 1.5, 2, 2.5, 3, 3.5]
        var findIndex = 1
        var isFind = false
        for (var i = 0; i < arrFind.length; i++) {
            var ocrResult = screen.MLKitOcr('zh', arrFind[i]);
            var str = ocrResult.getAllString();
            if (str.indexOf(text) > -1) {
                isFind = true
                findIndex = arrFind[i]
                // autoUtils.logText(findIndex,'findIndex')
                if (!isAll) {
                    isExsit = true
                }
                break;
            }
        }

        if (!isFind) {
            return false
        }
        if (isExsit) {
            return true
        }

        this.sleep(1, '开始精准查找（完全匹配）' + text)

        var ocrRes = screen.MLKitOcr('zh', findIndex);
        let result = JSON.parse(ocrRes)
        var regex = /[\u4e00-\u9fff]+/g;

        for (var i = 0; i < result.length; i++) {
            let str = String(result[i].text)
            // var matches = str.match(regex);
            // str = matches ? matches.join('') : ''
            // autoUtils.logText(str,matches)
            if (isAll) {
                if (str == text) {
                    isExsit = true
                }
            }
        }

        return isExsit
    },
    handleScaleObj(obj, scale) {
        obj.rect.left = obj.rect.left * scale
        obj.rect.right = obj.rect.right * scale
        obj.rect.top = obj.rect.top * scale
        obj.rect.bottom = obj.rect.bottom * scale
        return obj
    },
    handleOcrText(result, text, all) {
        let obj = ''

        for (var i = 0; i < result.length; i++) {
            let str = String(result[i].text)
            if (all) {
                // autoUtils.logText('全-找到了'+str)
                if (str == text) {
                    obj = result[i]
                    break;
                }
            }
            else {
                //autoUtils.logText('模糊找到了'+str,text)
                if (str.indexOf(text) > -1) {
                    autoUtils.logText('找到了', str)
                    obj = result[i]
                    break;
                }
            }
        }

        return obj
    },
    clickByText(text, move, all) {
        let obj = false
        var arrFind = [1, 1.5, 2, 2.5, 3, 3.5]
        for (var i = 0; i < arrFind.length; i++) {
            autoUtils.logText(arrFind[i], 'scale')
            var ocrRes = screen.MLKitOcr('zh', arrFind[i]);
            let result = JSON.parse(ocrRes)
            let data = this.handleOcrText(result, text, all)
            if (data) {
                obj = this.handleScaleObj(data, arrFind[i])
                break;
            }
        }

        if (obj) {
            this.sleep(2, '开始点击---' + text)
            if (!move) {
                this.randomClickHid(obj)
            } else {
                this.randomClickHid(obj, true)
                // hid.click(obj.rect.left + 100, obj.rect.top - 100)
            }
        } else {
            autoUtils.logText('没有找到')
        }

        return obj
    },
    // 随机点击
    randomClickHid(obj, move) {
        let x = obj.rect.left
        let y = obj.rect.top
        if (move) {
            x = x + 100
            y = y - 100
        } else {
            let random_w = 10;
            x = rand.randNumber(obj.rect.left + random_w, obj.rect.right - random_w)
            y = rand.randNumber(obj.rect.top - 5, obj.rect.bottom - 5)
        }
        hid.touchDown(0, x, y);
        sleep.millisecond(rand.randNumber(50, 200));
        hid.touchUp(0);
        this.sleep(3, '开始点击后---')
    },
    // 随机点击
    randomClickHidXAndY(x, y) {
        let x_w = rand.randNumber(x, x + 500)
        let y_w = rand.randNumber(y, y + 500)

        hid.touchDown(0, x_w, y_w);
        sleep.millisecond(rand.randNumber(50, 500));
        hid.touchUp(0);
        this.sleep(3, '开始点击后---')
    },
    //模糊查找后点击 move是否原位置点击 默认原位置点击 桌面图标需要偏移点击
    clickGetText(text, move) {
        let success = this.clickByText(text, move)
        return success
    },
    //精确查找后点击 move是否原位置点击 默认原位置点击 桌面图标需要偏移点击
    clickGetTextAll(text, move) {
        let success = this.clickByText(text, move, true)
        return success
    },
    getTodayTime(currentTime) {
        // if (autoUtils.getTodayTime(modedata.time) == autoUtils.getTodayTime(time.nowStamp())) {}
        // 提取年、月、日信息
        currentTime = Number(currentTime)
        const year = new Date(currentTime).getFullYear(); // 年份
        const month = new Date(currentTime).getMonth() + 1; // 月份（注意月份从0开始计数）
        const day = new Date(currentTime).getDate(); // 日期
        return year + '-' + month + '-' + day
    },
    getRandomClosecreen() {
        let hour = 60 * 60 * 1000
        // let num = Number(this.getRandomInt(1.5, 2))
        let num = 2
        return { timestr: Number(time.nowStamp()) + parseInt(num * hour), timeHour: num }
    },
    isxiping(obj) {
        let timeObj = time.nowStamp();
        if (timeObj - obj.timestr > 0) {
            return true
        } else {
            return false
        }
    },
    closeScreen() {
        this.qiutApp()
        // 先不锁屏了 
        this.sleep(10, '开始休息')
        this.autoHome()
        let time = this.getRandomInt(20, 35, 'int')
        this.autoHome()
        this.showLog()
        for (let i = 0; i < time * 60; i++) {
            if (i % 50 == 0) {
                //右滑动
                hid.swipM(screen.getScreenWidth() - 100, screen.getScreenHeight() / 2, 50, screen.getScreenHeight() / 2)
            }
            if (i % 100 == 0) {
                //左滑动
                hid.swipM(50, screen.getScreenHeight() / 2, screen.getScreenWidth() - 100, screen.getScreenHeight() / 2)
            }
            this.sleep(1, '休息中剩余' + ((time * 60) - i) + '秒')
        }
        this.hideLog()
        this.sleep(5, '休息结束')
        this.autoHome()
        this.sleep(5, '休息结束，开始返回任务')

        autoUtils.loginApp(AutoGlobData.appPhoneName)

    },
    qiutApp() {
        autoUtils.loginApp(AutoGlobData.appPhoneName)
        autoUtils.sleep(15, '打开清除最近任务')
        autoUtils.autoRecents()
        autoUtils.sleep(5, '右滑动')
        hid.swipM(screen.getScreenWidth() - 100, screen.getScreenHeight() / 2, 50, screen.getScreenHeight() / 2)
        autoUtils.sleep(5, '右滑动')
        hid.swipM(screen.getScreenWidth() - 100, screen.getScreenHeight() / 2, 50, screen.getScreenHeight() / 2)
        autoUtils.sleep(5, '开始上滑')
        hid.swipM(screen.getScreenWidth() / 2, screen.getScreenHeight() / 2, screen.getScreenWidth() / 2, 100)
        autoUtils.sleep(5, '开始上滑')
        autoUtils.autoHome()
        autoUtils.sleep(30, '等待后进行下一步')
        autoUtils.logText('APP退出成功')
    },
    isIndexPage() {
        return autoUtils.getText('首页') && autoUtils.getText('我') && autoUtils.getText('推荐') && !autoUtils.getText('作品')
    },
    // 先检测是否回到了首页 如果一直不满足 清理所有后台重新进入
    clearRecentsApp(notLogin) {
        autoUtils.sleep(10, '检测是否在首页')
        if (autoUtils.getText('以后再说')) {
            autoUtils.clickGetText('以后再说')
            autoUtils.sleep(5, '等待')
        }
        if (this.isIndexPage()) {
            this.logText('返回首页成功')
            // autoUtils.clickGetTextAll('首页')
        } else {
            autoUtils.loginApp(AutoGlobData.appPhoneName)
            if (autoUtils.getText('首页') && autoUtils.getText('朋友')) {
                autoUtils.clickByText("首页")
            } else {
            }
            autoUtils.sleep(10, '检测是否在首页')
            if (this.isIndexPage()) {
                this.logText('返回首页成功')
            } else {
                autoUtils.autoBack()
                autoUtils.sleep(10, '检测是否在首页')
                if (this.isIndexPage()) {
                    this.logText('返回首页成功')
                } else {
                    this.qiutApp()
                    if (notLogin) {
                    } else {
                        autoUtils.loginApp(AutoGlobData.appPhoneName)
                    }
                }
            }
        }
    },
    // 显示日志
    showLog() {
        logWindow.show()
        logWindow.setWidth(1100)
        logWindow.setClickModel()
    },
    // 隐藏日志
    hideLog() {
        logWindow.close()
    },
    differenceAndMerge(arr1, arr2) {
        for (let i = 0; i < arr1.length; i++) {
            for (let j = 0; j < arr2.length; j++) {
                if (arr1[i].appName == arr2[j].appName && arr1[i].phoneId == arr2[j].phoneId) {
                    arr2.splice(j, 1)
                }
            }
        }
        return arr1.concat(arr2)
    },
    setWebUi() {
        autoUtils.logText('使用线上的UI界面')
        var mainWeb = uiWeb.findByID(控件ID = "web");
        mainWeb.loadUrl('http://daming360.duckdns.org:30002/public/DyProject/资源/uibaota.html?time='+time.nowStamp())
        // mainWeb.loadUrl('https://webpjm.github.io/public/DyProject/资源/ui.html?time='+time.nowStamp())
    },
    setApiData(data) {
        var win = window.loadUI("主界面.ui");
        win.show()
        this.setWebUi()
        this.sleep(3, '等待关闭设置接口弹窗')
        win.close()
        this.sleep(5, '开始设置广告值')
        data = JSON.stringify(data)
        var web = uiWeb.findByID(控件ID = "web");
        this.sleep(5, '开始设置小程序列表值')
        web.runWebJs(`setAdList(${data})`)
    },
    setApiDataKs(data) {
        var win = window.loadUI("主界面.ui");
        win.show()
        this.setWebUi()
        this.sleep(3, '等待关闭设置接口弹窗')
        win.close()
        this.sleep(5, '开始设置广告值')
        data = JSON.stringify(data)
        var web = uiWeb.findByID(控件ID = "web");
        this.sleep(5, '开始设置快手小程序列表值')
        web.runWebJs(`setAdListKs(${data})`)
    },
    setApiNumData(data) {
        data = JSON.stringify(data)
        var win = window.loadUI("主界面.ui");
        win.show()
        this.setWebUi()
        this.sleep(3, '等待关闭设置接口弹窗')
        win.close()
        this.sleep(5, '开始设置广告值')
        var web = uiWeb.findByID(控件ID = "web");
        web.runWebJs(`setAdNumList(${data})`)
    },
    setSuccessPic(name) {
        let data = {
            name: this.getPinYin(name),
            model: device.getModel(),
            time: time.nowStamp(),
            phoneId: device.getDeviceIntID(),
            content: screen.screenShot(374, 666, 100).toJpgBase64(50)
        }
        var win = window.loadUI("主界面.ui");
        win.show()
        this.setWebUi()
        this.sleep(3, '等待关闭设置接口弹窗')
        win.close()
        this.sleep(5, '开始设置图片')
        var web = uiWeb.findByID(控件ID = "web");
        data = JSON.stringify(data)
        web.runWebJs(`setSuccessPic(${data})`)
        this.sleep(3, '开始设置图片后')
    },
    setSuccessPicKs(name) {
        let data = {
            name: this.getPinYin(name),
            model: device.getModel(),
            time: time.nowStamp(),
            phoneId: device.getDeviceIntID(),
            content: screen.screenShot(374, 666, 100).toJpgBase64(50)
        }
        var win = window.loadUI("主界面.ui");
        win.show()
        this.setWebUi()
        this.sleep(3, '等待关闭设置接口弹窗')
        win.close()
        this.sleep(5, '开始设置图片')
        var web = uiWeb.findByID(控件ID = "web");
        data = JSON.stringify(data)
        web.runWebJs(`setSuccessPicKs(${data})`)
        this.sleep(3, '开始设置图片后')
    },
    getPinYin(name) {
        let obj = {
            '洛雪': 'luoxue',
            '云帆': 'yunfan',
            '海豚': 'haitun',
            '柠檬': 'ningmeng',
            '橙子': 'chengzi',
            '番茄': 'fanqie',
            '橘子': 'juzi',
            '熊猫': 'xiongmao',
            '西瓜': 'xigua',
            '优创': 'youchuang',
            '数字': 'shuzi',
        }
        let str = 'luoxue'
        for (let key in obj) {
            if (name.indexOf(key) > -1) {
                str = obj[key]
            }
        }
        return str
    },
    getShortName(name) {
        if (name.indexOf('洛雪') > -1) {
            return '洛雪'
        } else if (name.indexOf('云帆') > -1) {
            return '云帆'
        } else if (name.indexOf('海豚') > -1) {
            return '海豚'
        } else if (name.indexOf('西瓜') > -1) {
            return '西瓜'
        } else if (name.indexOf('柠檬') > -1) {
            return '柠檬'
        } else if (name.indexOf('橙子') > -1) {
            return '橙子'
        } else if (name.indexOf('番茄') > -1) {
            return '番茄'
        } else if (name.indexOf('橘子') > -1) {
            return '橘子'
        } else if (name.indexOf('熊猫') > -1) {
            return '熊猫'
        } else if (name.indexOf('数字大挑战') > -1) {
            return '数字'
        } if (name.indexOf('优创') > -1) {
            return '优创'
        } else {
            return name
        }
    },
    getCurrentTime() {
        return time.nowStamp()
    },
    shouldClick(currentAds, currentClicks) {
        // 每三个广告为一组，计算当前广告属于哪一组
        let group = Math.floor((currentAds - 1) / 3) + 1;

        // 如果当前组数大于已点击次数，说明需要在当前组内点击
        if (group > currentClicks) {
            // 如果当前广告是该组的第一个，且之前没有点击，随机决定是否点击
            if (currentAds % 3 === 1 && currentClicks === group - 1) {
                return Math.random() < 1 / 3;
            }
            // 如果当前广告是该组的第二个，且之前没有点击，随机决定是否点击
            if (currentAds % 3 === 2 && currentClicks === group - 1) {
                return Math.random() < 1 / 2;
            }
            // 如果当前广告是该组的第三个，且之前没有点击，必须点击
            if (currentAds % 3 === 0 && currentClicks === group - 1) {
                return true;
            }
        }

        // 如果当前组数等于已点击次数，说明已经点击过，返回false
        return false;
    },
}
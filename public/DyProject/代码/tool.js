try {
    //调试的时候会不打开start.js初始化界面，获取不到globData导致报错，加入try catch防止报错
    if(globData) {
        let data = JSON.parse(globData)
        AutoGlobData.runApp = data.runApp
        AutoGlobData.runModel = data.runModel
        AutoGlobData.miniAppNum = data.miniAppNum
        AutoGlobData.lookRangeNum = data.lookRangeNum
        AutoGlobData.phoneIp = mainPhoneIp
        AutoGlobData.otherValue = data.otherValue
        AutoGlobData.adMaxNum = data.lookRangeNum[1]
        AutoGlobData.adMiniNum = data.lookRangeNum[0]

        if (AutoGlobData.runApp == 5 || AutoGlobData.runApp == 6) {
            AutoGlobData.configUrl = AutoGlobData.configUrlKs
        }
    }
} catch (error) {
    console.log(error)
}


let autoUtils = {
    useSocket: true,
    loginApp(name,notAll) {
        this.sleep(5, '登录开始--先返回主页')
        this.autoHome()
        this.sleep(5, '开始登录' + name)
        this.findApp(name, 1,notAll)
    },
    // 根据时间判断是否停止
    stopRunByTime() {
        let date = new Date() // 时间戳为秒：10位数
        let hour = Number(date.getHours())
        if (hour >= 1 && hour <= 6) {
            this.logText('当前2点到6点之间-时间条件不通过')
            this.qiutApp()
            //暂停脚本，如果有快手任务或者其他任务的则注释此处
            debug.setAllPause()
        }
        //中午停止运行为抖音火山版晚上腾时间
        else if(hour>=13 && hour<18 && AutoGlobData.runApp == 6) {
            this.logText('当前18点到21点之间-时间条件不通过')
            // this.qiutApp()
            let currentTimeNum = new Date().getHours()*60*60 + new Date().getMinutes()*60
            let setTimeNum = 18*60*60 + 30*60  // 距离下午18:30需要等待的时间
            let num = setTimeNum - currentTimeNum
            if(num>0) {
                console.log(num,'需要等待的时间')
                let randomNum = num + rand.randNumber(-600,600) // 随机十分钟左右启动
                this.autoHome()
                this.sleep(randomNum,'开始运行火山')
                if(AutoGlobData.appPhoneName.indexOf('火山') == -1) {
                    
                    AutoGlobData.appPhoneName = "抖音火山版"
                    AutoGlobData.runModel == 5
                    this.loginApp(AutoGlobData.appPhoneName)
                }
            }
            //暂停脚本，如果有快手任务或者其他任务的则注释此处
            // debug.setAllPause()
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
    logText(text,text1) {
        text1 = text1 ? text1 : ''
        let str = this.getTimeStr()
        if (hid.isOn()) {
            print.log(text)
            // autoUtils.logText(text)
        } else {
            print.log(text+text1, 'hid连接已关闭')
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
        catch (err) {}
    },
    // 等待
    sleep(timeFlag, text) {
        // this.logText(str+ '执行--'+text + ' -- 开始等待' + (timeFlag-i) + '秒' + ' --已运行：' + ((newTime - timestart) / (1000 * 60)).toFixed(2) + '分钟')
        // 等待大于5分钟
        let arr = [-0.2, -0.3, -0.4, -0.5, 0.1, 0.2, 0.3, 0.5]
        timeFlag = timeFlag + this.shuffle(arr)[0]
        if (timeFlag > 60) {
            if(timeFlag>300) {
                this.showLog()
            }
            let randNum = rand.randNumber(60,100)
            for (let i = 0; i < timeFlag; i++) {
                this.logText('开始等待---' + (timeFlag - i > 0 ? timeFlag - i : 0) + '秒' + text)
                sleep.millisecond(毫秒 = 1000);
                if(text.indexOf('运行火山版')>-1) {
                    if(i == randNum) {
                        this.autoHome()
                    }
                }
            }
            this.hideLog()
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
        autoUtils.logText(arr,'aaaaaa')
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
        if(time) {
            date = new Date(time)
        }
        let hour = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()
        let minute = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
        let second = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds()
        return `${hour}:${minute}:${second}`
    },
    // 运行完成后一定要执行closeApp的方法
    findApp(name, num,notAll) {
        this.logText("登录次数" + num)
        this.sleep(5, '开始寻找APP')
        num++
        let flag = false
        if(notAll) {
            flag = this.getText(name)
        }else{
            flag = this.getText(name, "isAll")
        }
        
        if (!flag&&num < 8) {
            if (num>0&&num <= 3) {
                this.sleep(3, '开始左滑动寻找APP')
                hid.swipM(screen.getScreenWidth() - 50, screen.getScreenHeight() / 2, 100, screen.getScreenHeight() / 2)
                this.findApp(name, num,notAll)
            }else if (num>3&&num < 6) {
                this.sleep(3, '开始右滑动寻找APP')
                hid.swipM(100, screen.getScreenHeight() / 2, screen.getScreenWidth() - 50, screen.getScreenHeight() / 2)
                this.findApp(name, num,notAll)
            } 
            else {
                this.logText('多次都没有找到，开始app启动')
                app.openApp(this.getPackage(name))
                this.sleep(20, name + 'app启动中...')
            }
        } else {
            if (flag) {
                this.logText("找到了图标，准备点击" + name)

                if(notAll) {
                    this.clickGetText(name, true)
                }else{
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
    //判断文字是否存在 默认模糊查找 isall 精确查找
    getText(text, isAll) {
        let isExsit = false
        var arrFind = [1,1.5,2,2.5,3,3.5]
        var findIndex = 1
        var isFind = false
        for(var i=0;i<arrFind.length;i++) {
            var ocrResult = screen.MLKitOcr('zh', arrFind[i]);
            var str = ocrResult.getAllString();
            if(str.indexOf(text)>-1) {
                isFind = true
                findIndex = arrFind[i]
                // autoUtils.logText(findIndex,'findIndex')
                if(!isAll) {
                    isExsit = true
                }
                break;
            }
        }

        if(!isFind) {
            return false
        }
        if(isExsit) {
            return true
        }
        
        this.sleep(1, '开始精准查找（完全匹配）' + text)

        var ocrRes = screen.MLKitOcr('zh', findIndex);
        let result = ocrRes.getJson()
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
    handleScaleObj(obj,scale) {
        obj.rect.left = obj.rect.left*scale
        obj.rect.right = obj.rect.right*scale
        obj.rect.top = obj.rect.top*scale
        obj.rect.bottom = obj.rect.bottom*scale
        return obj
    },
    handleOcrText(result,text,all) {
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
            else{
                //autoUtils.logText('模糊找到了'+str,text)
                if (str.indexOf(text)>-1) {
                    autoUtils.logText('找到了',str)
                    obj = result[i]
                    break;
                }
            }
        }

        return obj
    },
    clickByText(text, move, all) {
        let obj = false
        var arrFind = [1,1.5,2,2.5,3,3.5]
        for(var i=0;i<arrFind.length;i++) {
            autoUtils.logText(arrFind[i],'scale')
            var ocrRes = screen.MLKitOcr('zh', arrFind[i]);
            let result = ocrRes.getJson()
            let data = this.handleOcrText(result,text,all)
            if(data) {
                obj =  this.handleScaleObj(data,arrFind[i])
                break;
            }
        }

        if (obj) {
            this.sleep(2, '开始点击---'+text)
            if (!move) {
                this.randomClickHid(obj)
            } else {
                this.randomClickHid(obj,true)
                // hid.click(obj.rect.left + 100, obj.rect.top - 100)
            }
        }else{
            autoUtils.logText('没有找到')
        }

        return obj
    },
    // 随机点击
    randomClickHid(obj,move) {
        let x = obj.rect.left 
        let y = obj.rect.top 
        if(move) {
            x = x + 100
            y = y - 100
        }else {
            let random_w = 10;
            x  = rand.randNumber(obj.rect.left+random_w, obj.rect.right-random_w)
            y = rand.randNumber(obj.rect.top-5, obj.rect.bottom-5)
        }
        hid.touchDown(0, x, y);
        sleep.millisecond(rand.randNumber(50, 200));
        hid.touchUp(0);
        this.sleep(3, '开始点击后---')
    },
    // 随机点击
    randomClickHidXAndY(x,y) {
        let x_w = rand.randNumber(x, x+500)
        let y_w = rand.randNumber(y, y+500)

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
        let num = Number(this.getRandomInt(1.5, 2))
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
        autoUtils.sleep(30, '开始重新登录')
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
    setApiData(data) {
        var win = window.loadUI("主界面.ui");
        win.show()
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
            '洛雪':'luoxue',
            '云帆':'yunfan',
            '海豚':'haitun',
            '柠檬':'ningmeng',
            '橙子':'chengzi',
            '番茄':'fanqie',
            '橘子':'juzi',
            '熊猫':'xiongmao',
            '西瓜':'xigua',
            '优创':'youchuang',
            '数字':'shuzi',
        }
        let str = 'luoxue'
        for(let key in obj) {
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
        }else if (name.indexOf('西瓜') > -1) {
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
        }else if (name.indexOf('数字大挑战') > -1) {
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
    imgObj: {
        '柠檬': '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',
        '橘子': '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'
    }
}
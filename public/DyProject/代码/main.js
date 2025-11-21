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

let autoTask = {
    runAppList: {
        "1": '抖音',
        "2": '抖音火山版',
        "3": '抖音', // 抖音+抖音火山版
        "4": '抖音极速版'
    },
    startTask() {
        // 快手任务的逻辑
       if (AutoGlobData.runApp == 5 || AutoGlobData.runApp == 7) {
           autoUtils.logText('开始快手任务')
           autoTaskKs.startTask()
           // 其他任务的逻辑,相对独立的不和抖音的功能重复的，比如微信流量主，其他的一些对接广告的APP
           return;
       }
       // 混合金币任务的逻辑
       if (AutoGlobData.runApp == 8) {
            autoUtils.logText('金币任务的逻辑未完成，开始快手任务')
            autoTaskKs.startTask()
            return;
        }
        // 金币任务的逻辑
       if (AutoGlobData.runApp == 9) {
            autoUtils.logText('开始快手金币任务')
            ksjisuban.startTask()
            return;
        }
        // 金币任务的逻辑
       if (AutoGlobData.runApp == 10) {
            autoUtils.logText('开始喜番金币任务')
            xifan.startTask()
            return;
        }

        // 抖音任务的逻辑
       autoUtils.logText(AutoGlobData.otherValue,'有其他设置的值')
       if (AutoGlobData.otherValue&&AutoGlobData.otherValue.length>0) {
            // 执行特殊配置任务（快速模式/测试模式/重置模式等）
           this.setOtherValue()
       } else {
           // 正常启动任务流程
           autoUtils.logText('开始任务')
           autoTask.initApp() // 调用主初始化流程
       }
    },
    //初始化 总逻辑是this.setRunModel先执行养机逻辑 在执行douyinAd.lookModel看小程序广告的逻辑
    initApp(name) {
        autoUtils.logText('最新版本：修改了进入小程序详情方法')
        // 设置当前运行的APP名称（从预定义列表获取）
        AutoGlobData.appPhoneName = this.runAppList[AutoGlobData.runApp] || '抖音'
        // 快速任务模式处理（通过socket调用）
        if (name && name == 'fast') {
            autoUtils.logText('快速开始任务--不预启动')
        } else {
            autoUtils.logText('开始登录' + AutoGlobData.appPhoneName + '先预启动')
            this.startyuzhuang() // 启动预装APP流程
        }
        this.waitByNum()          // 根据设备启动次数等待间隔
        this.setRunAppList()      // 配置要运行的小程序列表
        autoUtils.loginApp(AutoGlobData.appPhoneName)  // 执行APP登录操作
        this.setRunModel()        // 设置养机/广告模式
    },
    //设置养机模式
    setRunModel() {
        // 获取今日养机数据
        douyinAd.getTodayDataInfo()
        let yangjiNum = douyinAd.todayDataInfo.yangjiNum
        autoUtils.logText(yangjiNum, 'yangjiNum')
        // 模式3: 抖音+抖音火山
        if (AutoGlobData.runModel == 3) {
            autoUtils.logText('抖音+抖音火山模式')
            this.startRunAppList()
        }
        // 模式1: 常规养机后广告
        else if (AutoGlobData.runModel == 1) {
            if (yangjiNum == 0) {
                autoUtils.logText('养机次数小于1,先养机')
                douyinAd.yangji()
            } else {
                autoUtils.logText('养机次数大于1不再养机，开始运行小程序任务')
            }
            this.startRunAppList()
        }
        // 模式2: 精养机无广告
        else if (AutoGlobData.runModel == 2) {
            douyinAd.jingyangji()
        }
        // 模式4: 精养机+广告组合 精养机就是看直播的时间更长5-10分钟一个 其他不变
        else if (AutoGlobData.runModel == 4) {
            douyinAd.jingyangji()
            //切换成只看广告不养机
            AutoGlobData.runModel = 5
            this.startRunAppList()
        }
        // 模式5: 全程只看广告不养机
        else if (AutoGlobData.runModel == 5) {
            this.startRunAppList()
        }
        // 模式8: 只在推荐页养机
        else if (AutoGlobData.runModel == 8) {
            douyinAd.onlyIndexPageYangji()
            autoUtils.qiutApp()
            autoUtils.logText('养机任务完成')
            // this.startRunAppList()
        }
        // 模式6: 在抖音养机后去火山版只看广告不养机
        else if (AutoGlobData.runModel == 6) {
            for (let i = 0; i < 6; i++) {
                douyinAd.yangji('quick')
            }
            // 切换到模式5: 全程只看广告不养机
            AutoGlobData.runModel == 5
            AutoGlobData.appPhoneName = '抖音火山版'
            autoUtils.loginApp(AutoGlobData.appPhoneName)  // 执行APP登录操作
            this.startRunAppList()
        }
        autoUtils.logText('运行模式方法执行完成，今日任务已完成')
    },
    //设置运行APP
    setRunAppList() {
        // 数量配置映射表：
        // 2 → 5个  3 → 8个  4 → 全部小程序
        let appNumObj = {
            '1': 3,
            '2': 5,
            '3': 8,
            '4': AutoGlobData.appList.length
        }
            // 根据配置选择数量，默认取全部
        this.setAppRunNum(appNumObj[AutoGlobData.miniAppNum] || AutoGlobData.appList.length)

        autoUtils.logText('运行的小程序是' + JSON.stringify(AutoGlobData.taskApp))

    },

    isResetAppAndNum:false,
    //重置今日广告的顺序和观看次数（切换APP时用）
    resetRunAppAndAdNum() {
        this.isResetAppAndNum = true
        // 重值今日观看广告的次数
        config.setConfig(AutoGlobData.configUrl, 'todayTaskListStatus', JSON.stringify([]))
        // 重值当前的任务队列
        config.setConfig(AutoGlobData.configUrl, 'taskAppRunList', JSON.stringify({}))

        autoUtils.logText('今日观看广告的次数和任务队列已经重置')
    },
    //重置缓存的搜索条件
    resetCurrentSearchStr() {
        // 重值搜索的外层的搜索队列 
        config.setConfig(AutoGlobData.configUrl, 'newSearchArrList', JSON.stringify(""))
        // 重值当前具体项的搜索数组
        config.setConfig(AutoGlobData.configUrl, 'currentTextStr', JSON.stringify(""))
        // 重值当前养机的缓存
        config.setConfig(AutoGlobData.configUrl, 'newYangjiModelTypeList', JSON.stringify(""))
         // 重值当前观看模式的缓存
        config.setConfig(AutoGlobData.configUrl, 'modeListData', JSON.stringify(""))
        
        autoUtils.logText('搜索的缓存已重置')
    },
    taskAppList1:[],
    //设置运行小程序的数量
    setAppRunNum(num) {
        let applist = autoUtils.shuffleObj(AutoGlobData.appList)
        let newList = []
        let newList1 = []
        for (var i = 0; i < applist.length; i++) {
            if (i < num) {
                newList.push(applist[i])
            }else{
                newList1.push(applist[i])
            }
        }
        AutoGlobData.taskApp = newList
        //火山版的任务队列
        this.taskAppList1 = newList1
    },
    /**
     * 开始运行小程序任务列表
     * 该函数负责初始化广告工具，获取运行的小程序任务列表，
     * 并根据养机情况和时间条件决定是否息屏，然后依次执行每个任务。
     * 如果任务未完成，则继续执行任务；如果任务完成，则进行精养机操作。
     */
    startRunAppList() {
        // 初始化广告工具
        adUtils.init()
        // 获取按时间排序的任务列表
        let taskAppList = adUtils.getRunAppListByTime()
        autoUtils.logText("当前运行的小程序任务列表 结果 顺序是=================" + JSON.stringify(taskAppList))
        //   判断是否样机 今天养过机 就可以执行看广告逻辑  随机养机顺序
        if (taskAppList.length > 0) {
            // let nowTime = Number(time.nowStamp())+15000
            // let timeObj = { timestr: nowTime, timeHour: '5秒' }
            let timeObj = autoUtils.getRandomClosecreen()
            //    autoUtils.sleep(30,'测试息屏')
            for (let i = 0; i < taskAppList.length; i++) {
                let flag = autoUtils.isxiping(timeObj)
                if (flag) {
                    autoUtils.logText("可以息屏了")
                    autoUtils.closeScreen()
                    timestart = time.nowStamp();
                    timeObj = autoUtils.getRandomClosecreen()
                    // 重置当前的任务队列
                    // config.setConfig(AutoGlobData.configUrl, 'taskAppRunList', JSON.stringify([]))
                    autoUtils.logText("息屏结束，重新开始任务")
                }
                // 不满足息屏条件，直接执行单个小程序任务
                this.taskAppRun(taskAppList[i], taskAppList)
            }
        }
        // 如果任务列表为空，重置当前的任务队列
        if (taskAppList.length == 0) {
            config.setConfig(AutoGlobData.configUrl, 'taskAppRunList', JSON.stringify([]))
        }

        // 判断今日任务是否完成
        if (!adUtils.getTaskStatus()) {
            autoUtils.logText('今日任务未完成继续任务')
            autoUtils.sleep(5)
            // 重新开始运行小程序任务列表
            this.startRunAppList()
        } else {
            
            autoUtils.logText('今日所有任务已经完成')
            autoUtils.qiutApp()
        }

    },
    taskAppRun(task, taskAppList) {
        // 切换APP 运行模式是抖音+抖音火山 选择最后5个小程序到抖音火上版观看
        if(AutoGlobData.runApp == 3 && taskAppList.length <= 5){
            // 切换为抖音火山
            AutoGlobData.runApp = 2
            AutoGlobData.appPhoneName = this.runAppList[AutoGlobData.runApp] 
            autoUtils.loginApp(AutoGlobData.appPhoneName)  // 执行APP登录操作
        }
        // 此处逻辑非常多了  可以设置多种模式看广告 可以自动息屏亮屏 
        //保证拿到的数据都是最新的
        adUtils.loadAdList()
        //保证拿到的数据都是最新的
        let taskdetail = adUtils.getAdDetail(task.appName)
        let time = adUtils.getAppAdTime(task.appName)
        taskdetail.time = time
        AutoGlobData.taskdetail = taskdetail
        autoUtils.logText('当前运行的任务是' + taskdetail.appName)
        AutoGlobData.phoneLookTotal = adUtils.getAllLookTotal()
        douyinAd.lookModel(taskdetail)
        adUtils.taskDeleteApp(taskAppList)

        // 一天养鸡一次 包括小程序  养鸡和广告时间间隔开 比如养鸡后息屏 半小时到1个半小时左右 期间续不定时激活屏幕 
        // 其他时候 就是判断看广告的模式了 模式可以有非常多种  一个一个看小程序 连着看两  看视频再看小程序 等等 可以非常多  
        // 此处判断是否息屏 清理后台 此处是一个任务运行完的时候


    },
    // 启动预装APP
    startyuzhuang() {
        autoUtils.sleep(2, '开始启动预装APP')
        let arr = [1, 2]
        let num = autoUtils.shuffle(arr)[0]
        let yuzhuangapp = autoUtils.shuffle(AutoGlobData.yuzhuangAPP)

        for (let i = 0; i < 2; i++) {
            let waitTime = autoUtils.getRandomInt(15, 60, 'int')
            if (autoUtils.getPackage(yuzhuangapp[i]) && i <= num) {
                autoUtils.logText('开始启动预装APP' + yuzhuangapp[i])
                autoUtils.loginApp(yuzhuangapp[i])
                autoUtils.sleep(waitTime, '预装APP启动后等待' + yuzhuangapp[i])
                autoUtils.logText('开始返回主页')
                autoUtils.autoHome()
                autoUtils.sleep(5, '返回主页后')
            }
        }
    },
    //根据启动时间等待
    waitByNum() {
        adUtils.loadAdList()
        let list = autoUtils.shuffle(AutoGlobData.waitNumList.list)
        if (list.length > 0) {
            let waitFlag = true
            let haveId = false
            let timeMax = list.sort((a, b) => b.time - a.time)[0].time

            for (let i = 0; i < list.length; i++) {
                if (list[i].id == device.getDeviceIntID()) {
                    haveId = true
                    if (autoUtils.getTodayTime(list[i].time) == autoUtils.getTodayTime(time.nowStamp())) {
                        autoUtils.logText('今日已启动过，不用等待')
                        waitFlag = false
                    }
                    // 更新时间
                    list[i] = { id: device.getDeviceIntID(), model: device.getBrand(), time: time.nowStamp() }
                }
            }
            let maxTime = time.nowStamp() - timeMax
            let intervalTime = autoUtils.shuffle(AutoGlobData.intervalTimeArr)[0]

            // autoUtils.logText((maxTime)/1000,intervalTime,'间隔的时间秒')

            if (!waitFlag || maxTime > intervalTime * 1000 * 60 * 10) {
                autoUtils.logText('满足了条件,不用等待')
            } else {
                autoUtils.logText('需要等待后开始任务')
                this.setTimeWaitByNum((intervalTime * 1000 * 60 * 10) - maxTime)
            }

            if (!haveId) {
                list.push({ id: device.getDeviceIntID(), model: device.getBrand(), time: time.nowStamp() })
            }
            AutoGlobData.waitNumList.list = list
        } else {
            let arr = [{ id: device.getDeviceIntID(), model: device.getBrand(), time: time.nowStamp() }]
            AutoGlobData.waitNumList.list = arr
        }

        autoUtils.setApiNumData(AutoGlobData.waitNumList)
        autoUtils.logText('等待完成,开始任务')
    },
    setTimeWaitByNum(time) {
        autoUtils.logText('开始等待' + time + '秒')
        autoUtils.sleep(5, '等待启动中')
        autoUtils.autoHome()
        autoUtils.sleep(time / 1000, '等待启动中')
    },
    // 特殊配置任务
    setOtherValue() {
        if (AutoGlobData.otherValue.indexOf('3')>-1) {
            // 切换APP时清除当前任务队列，重置今日广告的次数（适用于比如今天抖音的任务完成了，只想在火山版看几个广告）
            autoUtils.logText('重置今日广告的次数,清除当前任务队列')
            this.resetRunAppAndAdNum()
            // autoTask.initApp('fast')
        }
        if (AutoGlobData.otherValue.indexOf('4')>-1) {
            // 重置当前的搜索，使其搜索字符串为initData里的搜索数组第一项的第一个字符串
            autoUtils.logText('重置当前的搜索，使其搜索字符串为initData里的搜索数组第一项的第一个字符串')
            this.resetCurrentSearchStr()
            // 快速开始任务
            // autoTask.initApp('fast')
        }
        
        if (AutoGlobData.otherValue.indexOf('2')>-1) {
            input.setAiWork()
            autoUtils.sleep(10, '开始测试搜索功能')
            douyinAd.yangjimodel6()
        }

        if (AutoGlobData.otherValue.indexOf('5')>-1) {
            // 今日运行时随机下载一款游戏
            AutoGlobData.todayIsDownLoadGame = true
        }

        if (AutoGlobData.otherValue.indexOf('1')>-1) {
            // 快速看模式
            autoUtils.logText('快速看模式')
            autoTask.initApp('fast')
        }else{
            autoTask.initApp()
        }
        
        
    }
}

// 主线程任务
var mainThread = new thread();
mainThread.runJsCode(() => {
    autoTask.startTask() // 抖音任务
}, "主任务线程");


// 设置socket任务类型
function setTaskRunBySocket(type) {
    // 只养机
    if (type == 1) {
        autoUtils.logText('只养机不看广告')
        autoUtils.loginApp(AutoGlobData.appPhoneName)
        douyinAd.jingyangji()
    }
    // 快速任务
    else if (type == 2) {
        autoTask.initApp('fast')
    }
    else if (type == 3) {
        autoUtils.autoHome()
        autoUtils.sleep(3, '主线程任务已停止')
    } else {
        // 重启任务
        autoTask.startTask()
    }
}
var restartThread = new thread();
// 远程设置socket任务
function restartAppTask(type) {
    restartThread.runJsCode(() => {
        mainThread.stop()
        mainThread = new thread();
        mainThread.runJsCode(() => {
            setTaskRunBySocket(type)
        }, "主任务线程");

    }, "socket重启线程");
}

ws.event(
    function onTextMessage(msg) {
        let str = msg.split('@')
        let phoneId = str[0]
        let message = str[1]

        if (phoneId == device.getDeviceIntID() && message == '重启任务') {
            autoUtils.sleep(1, '开始启用新线程重启任务')
            restartAppTask()
        }

        if (phoneId == device.getDeviceIntID() && message == '养机') {
            autoUtils.sleep(1, '开始启用新线程养机')
            restartAppTask(1)
        }


        if (phoneId == device.getDeviceIntID() && message == '切换成火山版') {
            autoUtils.sleep(1, '切换成火山版')
            // 切换为抖音火山
            AutoGlobData.runApp = 2
            AutoGlobData.appPhoneName = '抖音火山版'
            autoUtils.loginApp(AutoGlobData.appPhoneName)  // 执行APP登录操作
            restartAppTask(2)
        }

        if (phoneId == device.getDeviceIntID() && message == '切换成抖音') {
            autoUtils.sleep(1, '切换成抖音')
            // 切换为抖音火山
            AutoGlobData.runApp = 1
            AutoGlobData.appPhoneName = '抖音'
            autoUtils.loginApp(AutoGlobData.appPhoneName)  // 执行APP登录操作
            restartAppTask(2)
        }

        if (phoneId == device.getDeviceIntID() && message == '快速任务') {
            autoUtils.sleep(1, '开始启用新线程快速任务')
            restartAppTask(2)
        }

        if (phoneId == device.getDeviceIntID() && message == '停止任务') {
            autoUtils.sleep(1, '开始启用新线程停止任务')
            restartAppTask(3)
        }


        //   printl(msg,'收到消息了')
    }
)
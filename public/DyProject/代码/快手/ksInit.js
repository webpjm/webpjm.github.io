let autoTaskKs = {
    runAppList: {
        "5": '快手',
        "7": '快手极速版',
    },
    startTask() {
        autoUtils.logText(AutoGlobData.otherValue,'有其他设置的值')
         // 判断是否存在特殊配置参数
        if (AutoGlobData.otherValue&&AutoGlobData.otherValue.length>0) {
             // 执行特殊配置任务（快速模式/测试模式/重置模式等）
            this.setOtherValue()
        } else {
            // 正常启动任务流程
            autoUtils.logText('开始任务')
            autoTaskKs.initApp() // 调用主初始化流程
        }
    },
    //初始化 总逻辑是this.setRunModel先执行养机逻辑 在执行kaishouAd.lookModel看小程序广告的逻辑
    initApp(name) {
         AutoGlobData.taskApp = adUtilsKs.taskApp
         AutoGlobData.appList = adUtilsKs.appList

        autoUtils.logText('最新版本：快手1.0')
        // 设置当前运行的APP名称（从预定义列表获取）
        AutoGlobData.appPhoneName = this.runAppList[AutoGlobData.runApp] || '快手'

        // 快速任务模式处理（通过socket调用）

        if (name && name == 'fast') {
            autoUtils.logText('快速开始任务--不预启动')
        } else {
            autoUtils.logText('开始登录' + AutoGlobData.appPhoneName + '先预启动')
            this.startyuzhuang() // 启动预装APP流程
        }

        // this.setTimeWaitByNum(rand.randDoubleNumber(3,500))          // 根据设备启动次数等待间隔
        this.setRunAppList()      // 配置要运行的小程序列表
        autoUtils.loginApp(AutoGlobData.appPhoneName)  // 执行APP登录操作
        this.setRunModel()        // 设置养机/广告模式
    },
    //设置养机模式
    setRunModel() {
        // 获取今日养机数据
        kaishouAd.getTodayDataInfo()
        let yangjiNum = kaishouAd.todayDataInfo.yangjiNum
        autoUtils.logText(yangjiNum, 'yangjiNum')
        // 模式1: 先看广告不养机
        if (AutoGlobData.runModel == 3) {
            autoUtils.logText('不养机模式')
            this.startRunAppList()
        }
        // 模式2: 先养机+广告
        else if (AutoGlobData.runModel == 1) {
            if (yangjiNum == 0) {
                autoUtils.logText('养机次数小于1,先养机')
                kaishouAd.yangji()
            } else {
                autoUtils.logText('养机次数大于1不再养机，开始运行小程序任务')
            }
            this.startRunAppList()
        }
        // 模式3: 精养机无广告
        else if (AutoGlobData.runModel == 2) {
            kaishouAd.jingyangji()
            autoTaskKs.logText('精养机任务完成')
        }
        // 模式4： 只在推荐页刷视频
        else if (AutoGlobData.runModel == 8) {
            kaishouAd.onlyIndexPageYangji()
            autoUtils.qiutApp()
            autoTaskKs.logText('养机任务完成')
            // this.startRunAppList()
        }
        autoUtils.logText('运行模式方法执行完成，今日任务已完成')
    },
    //设置运行APP
    setRunAppList() {
        // 数量配置映射表：
        // 2 → 5个  3 → 8个  4 → 全部小程序
        let appNumObj = {
            '2': 5,
            '3': 8,
            '4': AutoGlobData.appList.length
        }
            // 根据配置选择数量，默认取全部
        this.setAppRunNum(appNumObj[AutoGlobData.miniAppNum] || AutoGlobData.appList.length)

        autoUtils.logText('运行的小程序是' + JSON.stringify(AutoGlobData.taskApp))

    },
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
    },
    /**
     * 开始运行小程序任务列表
     * 该函数负责初始化广告工具，获取运行的小程序任务列表，
     * 并根据养机情况和时间条件决定是否息屏，然后依次执行每个任务。
     * 如果任务未完成，则继续执行任务；如果任务完成，则进行精养机操作。
     */
    startRunAppList() {
        // 初始化广告工具
        adUtilsKs.init()
        // 获取按时间排序的任务列表
        let taskAppList = adUtilsKs.getRunAppListByTime()
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
                    this.taskAppRun(taskAppList[i], taskAppList)
                } else {
                    // 不满足息屏条件，直接执行单个小程序任务
                    this.taskAppRun(taskAppList[i], taskAppList)
                }
            }
        }
        // 如果任务列表为空，重置当前的任务队列
        if (taskAppList.length == 0) {
            config.setConfig(AutoGlobData.configUrl, 'taskAppRunList', JSON.stringify([]))
        }

        // 判断今日任务是否完成
        if (!adUtilsKs.getTaskStatus()) {
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
        // 此处逻辑非常多了  可以设置多种模式看广告 可以自动息屏亮屏 
        //保证拿到的数据都是最新的
        adUtilsKs.loadAdList()
        //保证拿到的数据都是最新的
        let taskdetail = adUtilsKs.getAdDetail(task.appName)
        let time = adUtilsKs.getAppAdTime(task.appName)
        taskdetail.time = time
        AutoGlobData.taskdetail = taskdetail
        autoUtils.logText('当前运行的任务是' + taskdetail.appName)
        AutoGlobData.phoneLookTotal = adUtilsKs.getAllLookTotal()
        kaishouAd.lookModel(taskdetail)
        adUtilsKs.taskDeleteApp(taskAppList)

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
    
    setTimeWaitByNum(time) {
        autoUtils.logText('开始等待' + time + '秒')
        autoUtils.sleep(5, '等待启动中')
        // autoUtils.autoHome()
        logWindow.show()
        autoUtils.sleep(time, '等待启动中')
        logWindow.close()
    },
    // 特殊配置任务
    setOtherValue() {
        if (AutoGlobData.otherValue.indexOf('3')>-1) {
            // 切换APP时清除当前任务队列，重置今日广告的次数（适用于比如今天抖音的任务完成了，只想在火山版看几个广告）
            this.resetRunAppAndAdNum()
            // autoTaskKs.initApp('fast')
        }
        if (AutoGlobData.otherValue.indexOf('4')>-1) {
            // 重置当前的搜索，使其搜索字符串为initData里的搜索数组第一项的第一个字符串
            this.resetCurrentSearchStr()
            // 快速开始任务
            // autoTaskKs.initApp('fast')
        }
        
        if (AutoGlobData.otherValue.indexOf('2')>-1) {
            input.setAiWork()
            autoUtils.sleep(10, '开始测试搜索功能')
            kaishouAd.yangjimodel6()
        }

        if (AutoGlobData.otherValue.indexOf('1')>-1) {
            // 快速看模式
            autoUtils.logText('快速看模式')
            autoTaskKs.initApp('fast')
        }else{
            autoTaskKs.initApp()
        }
        
        
    }
}
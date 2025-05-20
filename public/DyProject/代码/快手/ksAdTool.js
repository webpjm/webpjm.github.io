/*
   欢迎使用AiWork安卓自动化IDE
   帮助文档: http://help.autoapp.net.cn
   官方地址: www.aiwork24.com
   qq群: 743723025
*/ 
let adUtilsKs = {
    appPhoneName: '快手',
    adMiniNum:3,
    adMaxNum:4,
    adListApiData: [],
    copyTaskApp: [],
    todayTaskAllList: [],
    phoneId: device.getDeviceIntID(),
    adListApiData: [], // 接口获取的小程序列表
    adBiaoZhun1: 5 * 60 * 1000, // 同手机同小程序观看时间要大于2小时+一个随机数（小于10分钟的）
    adBiaoZhun2: 2 * 60 * 1000, // 同手机不同小程序观看时间要大于40分钟+一个随机数（小于10分钟的）
    adBiaoZhun3: 5 * 60 * 1000, // 不同手机同小程序观看时间要大于10分钟+一个随机数（小于5分钟的）
    adBiaoZhun4: 5 * 60 * 1000, // 不同手机不同小程序观看时间要大于5分钟+一个随机数（小于1分钟的）
    todayTaskAllList: [], // 随机今天广告观看次数数组
    yangjiNum: 0,
    waitNumList: {
        list: []
    },
    appList: [ // 所有要运行的小程序 固定的，用于初始化数据
        {
            appName: '洛雪壁纸',
            main: '大明网络'
        },
        {
            appName: '熊猫君看图',
            main: '大明网络'
        },
        {
            appName: '柠檬精品壁纸 ',
            main: '大明网络'
        },
        {
            appName: ' 优图选 ',
            main: '大明网络'
        },
        {
            appName: '番茄优选',
            main: '大明网络'
        },
        {
            appName: '小西瓜图库',
            main: '大明网络'
        },
        {
            appName: '云帆启航',
            main: '大明网络'
        },
        {
            appName: '优橙壁纸',
            main: '大明网络'
        },
        {
            appName: '海豚优图',
            main: '大明网络'
        },
        {
            appName: '优创汇大全',
            main: '大明网络'
        }
    ],
    taskApp: [ //  运行的小程序 会变化
        {
            appName: '洛雪壁纸',
            main: '大明网络'
        },
        {
            appName: '熊猫君看图',
            main: '大明网络'
        },
        {
            appName: '柠檬精品壁纸 ',
            main: '大明网络'
        },
        {
            appName: ' 优图选 ',
            main: '大明网络'
        },
        {
            appName: '番茄优选',
            main: '大明网络'
        },
        {
            appName: '小西瓜图库',
            main: '大明网络'
        },
        {
            appName: '云帆启航',
            main: '大明网络'
        },
        {
            appName: '优橙壁纸',
            main: '大明网络'
        },
        {
            appName: '海豚优图',
            main: '大明网络'
        },
        {
            appName: '优创汇大全',
            main: '大明网络'
        }
    ],
    init() {
        this.copyTaskApp = JSON.parse(JSON.stringify(this.appList))
        // 养机是养机 看广告是看广告  如果算出广告等待时间过长(等待时长在30分钟内的可以接受大于30分钟则跳过) 也不能取时间最近的  这样就有规律可寻了 可能会被检测  则 把这个广告放在队列的最后  先执行下一个
        // 获取要看的小程序列表  随机 setSuccessAppAd
        // 如果等待时间在30分钟内 hid.home() 然后在前台等 也可以在抖音刷几个视频在退出  一切随机  判断当前的观看模式  只看广澳模式 就退出再前台等
        // 先查列表的第一个小程序  就一个一个处理吧 效率低 可能是安全的 
        // 先挑出来符合条件的前几个（30分钟内的） 再随机  之后等时间到再看 下一个的时候依旧如此策略

        // 加载远程数据 放在 ksAdUtils.adListApiData
        this.loadAdList()
        
        // 初始化广告数据  没有的新增 有重复的话删除基础数据 
        this.initAdAppList()
        
        // 初始化需要观看的次数 放在 ksAdUtils.todayTaskAllList
        this.initAdNeedLokkNum()

        // 获取小程序剩余的观看时间
        // let time = this.getAppAdTime('洛雪壁纸')
        // 观看完成后更新API接口广告数据
        // this.upDateAdTime()
        // 获取小程序观看广告详情
        // let detail = this.getAdDetail('云帆壁纸库')
    },
    // 初始化小程序列表
    loadAdList() {
        autoUtils.sleep(2, '开始请求接口loadAdList------广告列表数据')
        function getR() {
            var http = new okHttp()
            var t = http.get('https://gitee.com/api/v5/gists/kxglmtzjyc07o82bf4p9n11?access_token=725746d242425b8942088f56a3a8d836')
            if (t != 'OK') {
                return '' + t
            } else {
                sleep.millisecond(毫秒 = 1000 * 1);
                getR()
            }
        }
        let adList = JSON.parse(getR())

        let adListData = JSON.parse(adList.files.ksAd.content)

        let numlist =  JSON.parse(adList.files.ksAdNum.content)

        ksAdUtils.adListApiData = adListData
        ksAdUtils.waitNumList = numlist
        autoUtils.sleep(3, '请求接口广告列表数据后')
    },
    // 初始化广告数据
    initAdAppList() {
        let list = ksAdUtils.appList
        let apiList = ksAdUtils.adListApiData
        autoUtils.logText('执行initAdAppList-----初始化小程序API广告列表的数据')
        if (apiList.length > 0) {
            autoUtils.logText('接口有广告列表值')
            //接口有值
            let arr = []
            for (let i = 0; i < list.length; i++) {
                arr.push({ appName: list[i].appName,runApp: ksAdUtils.appPhoneName, model:device.getModel(), phoneId: device.getDeviceIntID(), lastLookTime: 0, main: list[i].main, todayClickNum: 0, clickNumTotal: 0, todayLookNum: 0, lookAdTotal: 0,successAdList: [],todayDownLoad:0,downLoadTotal: 0,downLoad:false,isClick:false,customObj:{} })
            }
            // let newList = apiList.concat(arr)
            // newList = autoUtils.uniqueAdArr(newList)
             let newList = autoUtils.differenceAndMerge(apiList,arr)
            autoUtils.setApiDataKs(newList)
        } else {
            //接口没值
            let arr = []
            // { name: '洛雪壁纸', phoneId: '', lastLookTime: 1235689789, main: '大明网络', todayClickNum: 0, clickNumTotal: 0, todayLookNum: 0, todayLookNumToal: 0, lookAdTotal: 0 }
            for (let i = 0; i < list.length; i++) {
                arr.push({ appName: list[i].appName,runApp: ksAdUtils.appPhoneName,model:device.getModel(), phoneId: device.getDeviceIntID(), lastLookTime: 0, main: list[i].main, todayClickNum: 0, clickNumTotal: 0, todayLookNum: 0, lookAdTotal: 0,successAdList: [],todayDownLoad:0,downLoadTotal: 0,downLoad:false,isClick:false,customObj:{} })
            }
            autoUtils.setApiDataKs(arr)
        }
    },
    // 初始化随机广告次数
    initAdNeedLokkNum() {
        autoUtils.logText('获取每个小程序当天需要观看的广告数据')
        let taskArr = []
        let listdata = config.getConfig(AutoGlobData.configUrlKs, 'todayTaskListStatus', JSON.stringify({}))
        let listObj = JSON.parse(listdata)
        if (listObj.time && (autoUtils.getTodayTime(listObj.time) == autoUtils.getTodayTime(time.nowStamp()))) {
            autoUtils.logText('执行initAdNeedLokkNum方法今日已设置过随机的广告观看次数，缓存取出---------'+JSON.stringify(listObj.data),listObj.time)
            taskArr = listObj.data
        } else {
            // 初始化今天的数据
            let applist = autoUtils.shuffle(ksAdUtils.taskApp)
            for (let i = 0; i < applist.length; i++) {
                // 少看点看效果
                if (i == 0 || i == 1) {
                    applist[i].todayTaskNum = 2
                } else {
                    applist[i].todayTaskNum = autoUtils.getRandomInt(AutoGlobData.adMiniNum, AutoGlobData.adMaxNum, 'round')
                }
                // applist[i].todayTaskNum = autoUtils.getRandomInt(ksAdUtils.adMiniNum, ksAdUtils.adMaxNum, 'round')
                applist[i].todayTasktatus = 'doing'
            }

            let obj = {
                time: time.nowStamp(),
                data: applist
            }
            taskArr = applist
            config.setConfig(AutoGlobData.configUrlKs, 'todayTaskListStatus', JSON.stringify(obj))
        }

        let conArr = []
        for(let i=0;i<taskArr.length;i++){
            conArr.push({name: taskArr[i].appName,num: taskArr[i].todayTaskNum})    
        }
        autoUtils.logText('每个小程序需要观看的次数汇总------------'+JSON.stringify(conArr))

        ksAdUtils.todayTaskAllList = taskArr
        return taskArr
    },
    taskDeleteApp(task) {
        task.shift()
        let obj = {
            time: time.nowStamp(),
            data: task
        }
        config.setConfig(AutoGlobData.configUrlKs, 'taskAppRunList', JSON.stringify(obj))
    },
    // 获取运行的小程序列表缓存数据 没有的话重制
    setTaskRunApp() {
        let taskApp = config.getConfig(AutoGlobData.configUrlKs, 'taskAppRunList', JSON.stringify({}))
        autoUtils.logText("setTaskRunApp 缓存的数据", JSON.stringify(taskApp))
        let taskAppObj = JSON.parse(taskApp)
        let runApp = ksAdUtils.taskApp
        if (taskAppObj.time) {
            // 如果是今天
            if (autoUtils.getTodayTime(taskAppObj.time) == autoUtils.getTodayTime(time.nowStamp())) {
                if (taskAppObj.data&&JSON.stringify(taskAppObj.data).indexOf('appName') > -1) {
                    //   autoUtils.logText('jintian', taskAppObj.data, JSON.stringify(taskAppObj.data).indexOf('appName') > -1)
                    runApp = taskAppObj.data
                }
            }
        } else {
            autoUtils.logText('初始化运行小程序缓存数据')
            let obj = {
                time: time.nowStamp(),
                data: runApp
            }
            config.setConfig(AutoGlobData.configUrlKs, 'taskAppRunList', JSON.stringify(obj))

        }
        // autoUtils.logText("setTaskRunApp 最终数据", JSON.stringify(runApp))
        return runApp
    },
    getTaskStatus() {
        let taskAllListAppStatus = ksAdUtils.todayTaskAllList
        let runArr = ksAdUtils.taskApp
        for (let i = 0; i < runArr.length; i++) {
            runArr[i].todayTasktatus = 'doing'
            for (let j = 0; j < taskAllListAppStatus.length; j++) {
                runArr[i].todayLookNum = this.getAdDetail(runArr[i].appName).todayLookNum ? this.getAdDetail(runArr[i].appName).todayLookNum : 0
                if (runArr[i].appName == taskAllListAppStatus[j].appName && runArr[i].todayLookNum >= taskAllListAppStatus[j].todayTaskNum) {
                    autoUtils.logText(runArr[i].appName + '任务已完成')
                    runArr[i].todayTasktatus = 'done'
                }
            }
        }
        let taskArr = []
        let flag = true
        for (let i = 0; i < runArr.length; i++) {
            if (runArr[i].todayTasktatus == 'doing') {
                taskArr.push(runArr[i])
                flag = false
            }
        }
        return flag
    },
    // 获取要运行的小程序列表  可以从UI取值
    getRunAppListByTime() {
        // 加载最新广告数据（从远程接口/本地缓存）
        this.loadAdList()
        // 获取当前设备任务列表（含历史运行状态）
        let appList = this.setTaskRunApp()
        autoUtils.logText("getRunAppListByTime setTaskRunApp结果"+JSON.stringify(appList))

        // 预处理：为每个小程序添加时间/次数属性
        for (let i = 0; i < appList.length; i++) {
            // 获取API数据 剩余观看时间 下面要根据时间做随机  // 计算剩余冷却时间（单位：毫秒）
            appList[i].time = this.getAppAdTime(appList[i].appName)
            // 获取API数据 观看次数 与缓存数据对比
            appList[i].todayLookNum = this.getAdDetail(appList[i].appName).todayLookNum ? this.getAdDetail(appList[i].appName).todayLookNum : 0
        }

        let arr = []
        let arr1 = []
        for (let i = 0; i < appList.length; i++) {
            // if (appList[i].time < 5 * 60 * 1000) {
            //     arr.push(appList[i])
            // } else {
            //     arr1.push(appList[i])
            // }
            arr1.push(appList[i])
        }

        arr1 = arr1.sort((a, b) => a.time - b.time)

        // let twoArr = []
        // let twoArr1 = []
        // for (let i = 0; i < arr1.length; i++) {
        //     if (arr1[i].time < 60 * 60 * 1000) {
        //         twoArr.push(appList[i])
        //     } else {
        //         twoArr1.push(appList[i])
        //     }
        // }

        // let twoRunArr = autoUtils.shuffle(twoArr).concat(twoArr1)

        //随机过的appList数据
        let runArr = autoUtils.shuffle(arr).concat(arr1)

        // autoUtils.logText('当前运行的任务列表是-----------',runArr)

        // 缓存的广告需要观看次数数据
        let taskAllListAppStatus = ksAdUtils.todayTaskAllList
        autoUtils.logText(JSON.stringify(taskAllListAppStatus)+"----taskAllListAppStatus")
        for (let i = 0; i < runArr.length; i++) {
            runArr[i].todayTasktatus = 'doing'
            for (let j = 0; j < taskAllListAppStatus.length; j++) {
                // autoUtils.logText(taskAllListAppStatus[j].todayTaskNum,taskAllListAppStatus[j].appName)
                if (runArr[i].appName == taskAllListAppStatus[j].appName && runArr[i].todayLookNum >= taskAllListAppStatus[j].todayTaskNum) {
                    autoUtils.logText(runArr[i].appName+ "--"+ runArr[i].todayLookNum+taskAllListAppStatus[j].todayTaskNum + "--"+  '任务已完成')
                    runArr[i].todayTasktatus = 'done'
                }
            }
        }
        // 待运行小程序列表

        let waitRunArr = []
        for (let i = 0; i < runArr.length; i++) {
            if (runArr[i].todayTasktatus == 'doing') {
                waitRunArr.push(runArr[i])
                autoUtils.logText(runArr[i].appName+ "---次数---" +  runArr[i].todayLookNum+'---待完成任务-waitRunArr')
            }
        }

        return waitRunArr
    },
    getAppAdTime(name) {
        let adListData = ksAdUtils.adListApiData
        let nowTime = time.nowStamp();
        let appTime = 0 // 当前手机当前小程序
        let phoneTimeList = [0] // 当前手机不同小程序
        let otherPhoneTimeList = [0] // 其他手机的相同小程序
        let otherPhoneOtherAppList = [0] // 其他手机所有小程序

        for (let i = 0; i < adListData.length; i++) {
            let currentTime = adListData[i].lastLookTime
            if (ksAdUtils.phoneId == adListData[i].phoneId) {
                // autoUtils.logText("相同手机")
                if (name == adListData[i].appName) {
                    // 当前手机 当前小程序 上一次观看时间
                    appTime = currentTime
                } else {
                    // 当前手机 不同小程序 上一次观看时间
                    phoneTimeList.push(currentTime)
                }
            } else {
                if (name == adListData[i].appName) {
                    // 其他手机 相同小程序 上一次观看时间
                    otherPhoneTimeList.push(currentTime)
                } else {
                    //其他手机 不相同小程序
                    otherPhoneOtherAppList.push(currentTime)
                }
            }
        }
        // 大到小 就是 找到最近一次观看的时间
        let maxTime2 = phoneTimeList.sort((a, b) => b - a)[0]
        let maxTime3 = otherPhoneTimeList.sort((a, b) => b - a)[0]
        let maxTime4 = otherPhoneOtherAppList.sort((a, b) => b - a)[0]

        //括号里是当前时间距离上一次广告的时间  用标准时间-括号时间就是 剩余多长时间可以观看  数值越大 等待时间越长
        let ksAdUtilsBiaozhun1Value = ksAdUtils.adBiaoZhun1 - (nowTime - appTime)
        let ksAdUtilsBiaozhun2Value = ksAdUtils.adBiaoZhun2 - (nowTime - maxTime2)
        let ksAdUtilsBiaozhun3Value = ksAdUtils.adBiaoZhun3 - (nowTime - maxTime3)
        let ksAdUtilsBiaozhun4Value = ksAdUtils.adBiaoZhun4 - (nowTime - maxTime4)

        let maxAdTime = [ksAdUtilsBiaozhun1Value, ksAdUtilsBiaozhun2Value, ksAdUtilsBiaozhun3Value, ksAdUtilsBiaozhun4Value]

        let leftTime = maxAdTime.sort((a, b) => b - a)[0]

        leftTime = leftTime > 0 ? leftTime : 0

        return leftTime
    },
    setSuccessAppAd(name, isClick,download) {
        this.loadAdList()
        let detail = this.getAdDetail(name)
        // autoUtils.logText(JSON.stringify(detail),detail.todayLookNum, autoUtils.getTodayTime(detail.lastLookTime) == autoUtils.getTodayTime(time.nowStamp()),'setSuccessAppAd111')
        if (autoUtils.getTodayTime(detail.lastLookTime) == autoUtils.getTodayTime(time.nowStamp())) {
            detail.todayLookNum += 1
            if (isClick) {
                detail.todayClickNum += 1
            }
            if(download) {
                detail.todayDownLoad += 1
            }
        } else {
            if (isClick) {
                detail.todayClickNum = 1
            }
            if(download) {
                detail.todayDownLoad = 1
            }
            detail.todayLookNum = 1
        }
        if (isClick) {
            detail.clickNumTotal += 1
        }
        if(download) {
            detail.downLoadTotal += 1
        }
        detail.lookAdTotal += 1
        detail.lastLookTime = time.nowStamp();
        detail.downLoad = download
        detail.isClick = isClick
        detail.ip = ksAdUtils.phoneIp
        // autoUtils.logText(detail,'更新的广告数据')
        this.upDateAdTime(detail)

        // autoUtils.logText(name, '今日已看：' + detail.todayClickNum, '广告数据更新成功')
    },
    upDateAdTime(detail) {
        this.loadAdList()
        let apiList = ksAdUtils.adListApiData
        for (let i = 0; i < apiList.length; i++) {
            if (apiList[i].appName == detail.appName && apiList[i].phoneId == detail.phoneId) {
                autoUtils.logText('修改' + apiList[i].appName + '的值')
                let clone = JSON.parse(JSON.stringify(detail))
                delete clone.successAdList
                detail.successAdList.push(clone)
                // autoUtils.logText(JSON.stringify(detail))
                apiList[i] = detail
            }
        }
        autoUtils.setApiDataKs(apiList)
    },
    getAdDetail(appName) {
        let detail = {}
        let apiList = ksAdUtils.adListApiData
        for (let i = 0; i < apiList.length; i++) {

            if (apiList[i].appName.indexOf(appName)>-1 && apiList[i].phoneId == ksAdUtils.phoneId) {
                // autoUtils.logText('获取' + apiList[i].appName + '的值')
                detail = apiList[i]
            }
        }

        if (autoUtils.getTodayTime(detail.lastLookTime) == autoUtils.getTodayTime(time.nowStamp())) {
            
        }else{
            detail.todayClickNum = 0
            detail.todayLookNum = 0
        }

        return detail
    },
    getAdDetailByPhoneId() {
        let detail = {todayLookNum: 0,allLookNum:0,lastLookTime:0,lastLookTimeStr:''}
        let arr = []
        let apiList = ksAdUtils.adListApiData
        for (let i = 0; i < apiList.length; i++) {

            if (apiList[i].phoneId == ksAdUtils.phoneId) {
                arr.push(apiList[i])
            }
        }
        let timeArr = []
        arr.map(item => {
            timeArr.push(item.lastLookTime)
            detail.allLookNum+=item.lookAdTotal
            if (autoUtils.getTodayTime(item.lastLookTime) == autoUtils.getTodayTime(time.nowStamp())) {
                detail.todayLookNum+=item.todayLookNum
            }
        })

        timeArr = timeArr.sort((a,b) => b-a)
        timeArr[0] = timeArr[0] || 0

        detail.lastLookTime = timeArr[0]
        if(timeArr[0]) {
            detail.lastLookTimeStr = autoUtils.getTodayTime(timeArr[0]) +" "+  autoUtils.getTimeStr(timeArr[0])
        }
        return detail
    },
    getAllLookTotal() {
        let total = 0
        let downLoad = 0
        let apiList = ksAdUtils.adListApiData
        for (let i = 0; i < apiList.length; i++) {

            if (apiList[i].phoneId == ksAdUtils.phoneId) {
                // autoUtils.logText('获取' + apiList[i].appName + '的值'+apiList[i].lookAdTotal)
                total += apiList[i].lookAdTotal
                downLoad += apiList[i].downLoadTotal
            }
        }
        return {total:total,downLoadTotal: downLoad}
    },
}
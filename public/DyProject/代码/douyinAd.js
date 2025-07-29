let douyinAd = {
    // 点击的字符串对象
    clickTextStrObj: {
        '搜索后的视频': '图色115176.cv',
        '搜索后的直播': '图色554192.cv',
        '视频的喜欢按钮': '图色238422.cv',
        '视频的收藏按钮': '图色475965.cv',
        "视频中的评论按钮": '图色484289.cv',
        '视频的关注按钮': '图色802197.cv',
        "直播的礼物按钮": '图色808001.cv',
        "直播的关注按钮": '图色499394.cv',
        "查看钻石余额图标": '图色394492.cv',
        "是不是广告视频": '图色672887.cv',
        "首页的搜索图标": '图色593933.cv',
        "视频进度条的小点位置": '图色410427.cv',
        "游戏直播的手柄标识": '图色829970.cv',
        '我的页面的小程序图标': '图色862778.cv',
        '首页左上角更多图标': '图色947103.cv',
        '广告界面的广告图标': '图色226207.cv',
        '广告的领取成功': '图色494529.cv',
        '广告的可领奖励': '图色148106.cv',
        '寻找柠檬壁纸图标': '图色183483.cv',
        '寻找橘子壁纸图标': '图色315859.cv',
        '寻找橙子壁纸图标': '图色781467.cv',
        '寻找洛雪壁纸图标': '图色495375.cv',
        '寻找云帆壁纸图标': '图色659762.cv',
        '寻找熊猫壁纸图标': '图色926604.cv',
        '寻找番茄壁纸图标': '图色727567.cv',
        '寻找西瓜壁纸图标': '图色142765.cv',
        '寻找优创汇壁纸图标': '图色161717.cv',
        '寻找海豚壁纸图标': '图色450874.cv',
        '寻找数字大挑战图标': '图色742549.cv'
    },
    hanldeCvTextByAppName(appName) {
        let str = '寻找洛雪壁纸图标'
        if (appName.indexOf('洛雪') > -1) {
            str = '寻找洛雪壁纸图标'
        } else if (appName.indexOf('熊猫') > -1) {
            str = '寻找熊猫壁纸图标'
        } else if (appName.indexOf('柠檬') > -1) {
            str = '寻找柠檬壁纸图标'
        } else if (appName.indexOf('橘子') > -1) {
            str = '寻找橘子壁纸图标'
        } else if (appName.indexOf('番茄') > -1) {
            str = '寻找番茄壁纸图标'
        } else if (appName.indexOf('西瓜') > -1) {
            str = '寻找西瓜壁纸图标'
        } else if (appName.indexOf('云帆') > -1) {
            str = '寻找云帆壁纸图标'
        } else if (appName.indexOf('橙子') > -1) {
            str = '寻找橙子壁纸图标'
        } else if (appName.indexOf('海豚') > -1) {
            str = '寻找海豚壁纸图标'
        } else if (appName.indexOf('优创') > -1) {
            str = '寻找优创汇壁纸图标'
        } else if (appName.indexOf('数字') > -1) {
            str = '寻找数字大挑战图标'
        }
        return str
    },
    // 小程序观看广告的模式
    lookModelList: [
        { type: 3, text: '小程序页停留几分钟+返回抖音养鸡' },
        { type: 4, text: '先抖音养鸡在在小程序页停留几分钟看广告' },
        { type: 1, text: '返回手机主页等待后看广告' },
        { type: 3, text: '小程序页停留几分钟+返回抖音养鸡' },
        { type: 5, text: '只是停留不看广告' },
        { type: 3, text: '小程序页停留几分钟+返回抖音养鸡' },
        { type: 4, text: '先抖音养鸡在在小程序页停留几分钟看广告' },
        { type: 6, text: '不等待直接看广告' }
    ],
    // 养机模式的值 用于养机缓存变化的值 自定义一个乱中有序
    yangjiModelData: [
        // { type: 1, text: '在推荐页养机' },
        // { type: 5, text: '在搜索页的视频养机' },
        // { type: 2, text: '在推荐页左侧的直播养机' },
        // { type: 7, text: '在搜索页的综合样机养机' },
        // { type: 3, text: '在推荐页左侧关注养机' },
        // { type: 5, text: '在搜索页的视频养机' },
        // { type: 4, text: '在小程序列表页养机' },
        // { type: 6, text: '在搜索页的直播养机' },
        // { type: 1, text: '在推荐页养机' },
        // { type: 7, text: '在搜索页的综合样机养机' },
        // { type: 8, text: '在我的喜欢中穿插右滑查看主页中的视频养机' },
        // { type: 5, text: '在搜索页的视频养机' },
        // { type: 1, text: '在推荐页养机' },
        // { type: 6, text: '在搜索页的直播养机' },
        // { type: 9, text: '在我的收藏中穿插右滑查看主页中的养机' },
        { type: 5, text: '在搜索页的视频养机' },
        { type: 1, text: '在推荐页养机' },
        { type: 5, text: '在搜索页的视频养机' },
        { type: 5, text: '在搜索页的视频养机' },
        { type: 1, text: '在推荐页养机' },
        { type: 1, text: '在推荐页养机' },
        { type: 5, text: '在搜索页的视频养机' },
        { type: 1, text: '在推荐页养机' },
        { type: 6, text: '在搜索页的直播养机' },
        { type: 1, text: '在推荐页养机' },
        { type: 5, text: '在搜索页的视频养机' },
        { type: 5, text: '在搜索页的视频养机' },
        { type: 1, text: '在推荐页养机' },
        { type: 6, text: '在搜索页的直播养机' },
        { type: 7, text: '在搜索页的综合样机养机' },
        { type: 1, text: '在推荐页养机' },
        // { type: 4, text: '在小程序列表页养机' },
        // { type: 8, text: '在我的喜欢中穿插右滑查看主页中的视频养机' },


    ],
    // 养机模式的值
    yangjiModelType: 1,
    // 养机的速度
    yangjiSpeed: 'slow', // slow normal quick
    // 小程序观看广告的模式的值
    lookModelValue: 1,
    todayTimeInterval: {},
    // 存在缓存里的数据汇总
    // todayDataInfo 今日观看详情
    // videoLikeNum  喜欢关注等的次数
    // modeListData  小程序观看广告的模式
    // taskAppRunList  当前运行小程序的列表
    // todayTaskListStatus  今日观看小程序列表的数量状态

    // 今天的数据对象
    todayDataInfo: {
        time: time.nowStamp(),
        'todayLikeNum': 0,     // 今日点击喜欢的数量
        'todayCollect': 0,    // 今日点击收藏的数量
        'todayFocus': 0,      // 今日点击关注的数量
        "pingLunNum": 0,      // 今日点击评论的数量
        "giftNum": 0,         // 今日送出礼物的数量
        "yangjiNum": 0,       // 今日养机的次数
    },
    //初始化喜欢收藏等的次数，一天的量不能超过这个数 收藏要设置的少一点
    LikeMaxAndMin: [5, 8],
    CollectMaxAndMin: [2, 3],
    //关注的次数，一天的量不能超过这个数
    focusMaxAndMin: [1, 3],
    videoLikeNum: {
        time: time.nowStamp(),
        like: 5,
        collect: 3,
        focus: [2, 4]
    },
    isSameDay(TIME) {
        let flag = false
        if (autoUtils.getTodayTime(TIME) == autoUtils.getTodayTime(time.nowStamp())) {
            flag = true
        }
        return flag
    },
    configPath: AutoGlobData.configUrlDy,
    getConfig(key) {
        let data = config.getConfig(this.configPath, key, '')
        if (data != '') { data = JSON.parse(data) }
        return data
    },
    setConfig(key, value) {
        config.setConfig(this.configPath, key, JSON.stringify(value))
    },
    // 获取今天的数据 点击喜欢、样机等数据
    getTodayDataInfo() {
        let todayDataInfo = this.getConfig('todayDataInfo')
        if (todayDataInfo == '' || !this.isSameDay(todayDataInfo.time)) {
            autoUtils.logText('初始化todayDataInfo数据')
            this.setConfig('todayDataInfo', this.todayDataInfo)
        } else {
            autoUtils.logText('今日启动过了')
            this.todayDataInfo = todayDataInfo
        }
        // printl(JSON.stringify(this.todayDataInfo))
    },
    // 设置模式
    setLookModelValueData() {
        let modelList = JSON.parse(JSON.stringify(autoUtils.shuffleObj(this.lookModelList)))
        let localModelListData = config.getConfig('/sdcard/config.ini', 'modeListData', '[]')
        if (localModelListData == '') {
            //第一次运行 随机模式
            autoUtils.logText('首次设置观看广告模式')
            this.setModeList(modelList)
        } else {
            // 不是第一次
            let modedata = JSON.parse(localModelListData)
            if (modedata.length > 0) {
                let modelList = autoUtils.shuffleObj(modedata)
                this.setModeList(modelList)
            } else {
                this.setModeList(modelList)
            }
        }
    },
    // 设置运行的模式
    setModeList(data) {
        this.lookModelValue = data[0].type
        data.shift()
        config.setConfig(this.configPath, 'modeListData', JSON.stringify(data))
    },
    // 直播间数据
    zhiboInfo: {
        personNum: '', // 直播间人数
        zhiBoisFocus: false, // 是否关注了直播间
        zuanShiNum: 0  // 账户钻石余额
    },
    // 视频的权重
    shipinInfo: {
        currentVideoWeight: 2, // 当前视频的推荐指数 1 非常优质 2 差一点 3 差
    },
    // 评论的话术
    pingLunTextArr: ['这个怎么样啊,有了解的吗', '喜欢这种类型的介绍',
        '这个好吗,身边很多人都知道', '这个非常不错的，可以多了解了解吗', '经常看到,感觉还不错', '这个简直太好了，非常用心的产品', '这个太好了，多推荐推荐'
        , '非常经典的产品，体验很好', '这个体验不错,值得推荐', '看起来还不错，可以多了解了解', '这个太强了，非常赞'],
    //直播弹幕话术
    zhiBoTextArr: ['这个怎么样啊,有了解的吗', '主播好，这个怎么样', "主播好，这个真不错", '看起来不错啊，主播非常棒', '非常不错，多推荐', '这个太厉害了', '主播好，来打卡了'],
    getCvByText(text, isClick) {
        let str = this.clickTextStrObj[text]
        let isHave = false
        var detects = opencv.findImagesEx(str);
        if (detects != null) {
            isHave = true
            if (isClick) {
                detects[0].hidClick()
            }
        }
        return isHave
    },
    // 点击Cv
    clickCv(text) {
        autoUtils.sleep(3, '开始点击' + text)
        this.getCvByText(text, true)
        autoUtils.sleep(3, '开始点击后' + text)
    },
    // 获取直播的数据，直播间人数，是否关注
    getZhiBoData() {
        this.zhiboInfo.personNum = 0
        this.zhiboInfo.zhiBoisFocus = false
        var ocrResult = screen.MLKitOcr('zh', -2.5);
        ocrResult = ocrResult.getJson()
        const numberRegex = /^\d+$/; // 只匹配正整数
        for (var i = 0; i < ocrResult.length; i++) {
            if ((ocrResult[i].rect.right + ocrResult[i].rect.left) < 300) {
                if (numberRegex.test(ocrResult[i].text)) {
                    this.zhiboInfo.personNum = ocrResult[i].text
                    break;
                }
            }
        }
        let str = this.clickTextStrObj['直播的关注按钮']
        var detects = opencv.findImagesEx(str);
        if (detects != null) {
            this.zhiboInfo.zhiBoisFocus = false
        } else {
            this.zhiboInfo.zhiBoisFocus = true
        }
        printl('当前直播间的人数', this.zhiboInfo.personNum)
        printl('当前直播间的是否关注了', this.zhiboInfo.zhiBoisFocus)
    },
    // 获取直播详情数据
    getZhiBoInfo() {
        douyinAd.getZhiBoData()
        // 人数小于10人时检测是否是异常，等待3秒后再检测一次
        if (Number(this.zhiboInfo.personNum) < 10) {
            sleep.millisecond(毫秒 = 3000);
            douyinAd.getZhiBoData()
        }
    },
    // 获取当前钻石余额
    getZuanShiNum() {
        var ocrResult = screen.MLKitOcr('zh', 1.5);
        ocrResult = ocrResult.getJson()
        for (var i = 0; i < ocrResult.length; i++) {
            if (ocrResult[i].text.indexOf('余') > -1 && ocrResult[i].text.indexOf('钻') > -1) {
                var num = ocrResult[i].text.split(":")[1].split('钻')[0]
                this.zhiboInfo.zuanShiNum = num
            }
        }
        autoUtils.logText('当前钻石余额', this.zhiboInfo.zuanShiNum)
    },
    videoWeightObj: {
        '1': 500, // 优质
        '2': 200,  // 良好
    },
    // 获取当前视频的权重 点赞收藏等数量越多 权重越高 （还可以右滑进详情查看粉丝数量，粉丝数量越高，标签跃越精准）
    getCurrentVideoWeight() {
        // var ocrRes = screen.MLKitOcr('zh', 1.5);
        //截屏并转成mat格式
        var mat = screen.screenShot(900, 1600, 100).getMat();
        //颜色翻转
        opencv.invertColor(mat)
        //对比度
        opencv.adjustContrast(mat, 100)
        let img = new image().readMat(mat)
        var ocrRes = img.MLKitOcr('zh');
        let result = ocrRes.getJson()

        var weight = 3
        const numberRegex = /^\d+$/; // 只匹配正整数
        let arr = []
        for (var i = 0; i < result.length; i++) {
            let str = String(result[i].text)
            // autoUtils.logText(str, result[i], 'aaaa')
            if (result[i].rect.left + result[i].rect.right > 1500) {

                // autoUtils.logText(str, result[i], 'aaaa')
                if (str.indexOf('万') > -1) {
                    weight = 1
                    break;
                } else if (numberRegex.test(str)) {
                    if (Number(str) < 10000) { // 筛选正常数据
                        arr.push(str)
                    }
                }
            }
        }
        for (let i = 0; i < arr.length; i++) {
            if (Number(arr[i]) > this.videoWeightObj['1']) {
                weight = 1
            }
        }
        if (weight != 1) {
            for (let i = 0; i < arr.length; i++) {
                if (Number(arr[i]) > this.videoWeightObj['2']) {
                    weight = 2
                }
            }
        }
        this.shipinInfo.currentVideoWeight = weight
        // autoUtils.logText(this.shipinInfo.currentVideoWeight, '推荐指数')
        return weight
    },
    // 当前视频的进度
    getVideoProgress() {
        let progress = 0
        var detects = opencv.findImagesEx('图色410427.cv');
        if (detects != null) {
            // autoUtils.logText(detects[0].getRect().top)
            progress = parseInt(detects[0].getRect().left * 100)
            // autoUtils.logText('当前的进度', parseInt(detects[0].getRect().left * 100) + '%')
        } else {
            autoUtils.logText('没有找到')
        }
        return progress
    },
    // 当前视频的时长
    currentVideoTime: 15,
    // 获取视频的总时长
    getCurrentVideoTime() {
        autoUtils.sleep(2, '等待2秒检测')
        // 初始化视频的时长
        let durationTime = rand.randNumber(15, 30)
        let start = this.getVideoProgress()
        if (start > 0) {
            sleep.millisecond(毫秒 = 5000);
            let end = this.getVideoProgress()
            // autoUtils.logText('等待5秒后的进度')
            autoUtils.logText(end - start)
            if (end - start <= 0) {
                // autoUtils.logText('视频播放完成了')
            } else {
                autoUtils.logText('当前视频的总长度', parseInt((100 * 5) / (end - start)) + '秒')
                let time = parseInt((100 * 5) / (end - start)) * ((100 - end) / 100) + rand.randNumber(3, 6)
                autoUtils.logText('剩余时长', parseInt((100 * 5) / (end - start)) * ((100 - end) / 100))
                time = time > 0 ? time : 3
                if (time > 120) { // 可能是异常检测
                    time = 45
                }
                durationTime = time
                // autoUtils.sleep(time, '继续等待中')
            }

            // if (this.getVideoProgress() < 50) {
            //     autoUtils.logText('视频播放完成了')
            // } else {

            // }
        } else {
            autoUtils.logText('视频长度小于30秒,没有检测到进度条')
        }
        return durationTime
    },
    startMoveByType(timeAll, type) {
        // num = this.setHuaDongCishu(num)
        this.currentSwipNum = 0
        this.duibiaoVideoOrZhiBoNum = 0
        this.isNotGoodTypeNum = 0
        // let timeStart = time.nowStamp()
        autoUtils.sleep(3, '等待三秒')
        // let timeEnd = time.nowStamp()
        // let allNum = rand.randNumber(15, 20)
        // autoUtils.logText(allNum + '滑动次数上限')
        let huadongNum = rand.randNumber(2, 2)
        if (type == 'video') {
            huadongNum = rand.randNumber(3, 8)
        }
        autoUtils.logText(huadongNum + '需要滑动的次数')
        // 如果时间小于随机时间，则循坏滑动视频或直播
        for (let i = 0; i < huadongNum; i++) {
            // autoUtils.logText((timeEnd - timeStart) / 1000, '当前运行时长')
            // autoUtils.logText(timeAll + '需要运行的总时长')
            this.currentSwipNum++
            if (type == 'video') {
                this.handelVideo()
            } else {
                this.handelZhiBo()
            }
            autoUtils.sleep(3, '开始滑动')
            this.startHuaDong()
            timeEnd = time.nowStamp()
        }
        // if((timeEnd - timeStart) / 1000 < timeAll ) {
        //     // autoUtils.logText('还没有达到总时长，再快速养机一次')
        //     let time1 = timeAll - ((timeEnd - timeStart) / 1000)
        //     this.autoHome()
        //     autoUtils.sleep(time1, '等待中间休息')
        //     autoUtils.loginApp(AutoGlobData.appPhoneName)
        //     // this.yangji('quick')
        // }
        // autoUtils.logText((timeEnd - timeStart) / 1000, '当前运行时长')
        // autoUtils.logText(timeAll, '需要运行的总时长')
        // autoUtils.logText(this.duibiaoVideoOrZhiBoNum,this.currentSwipNum, 'duibiaoVideoOrZhiBoNum')
    },
    startMoveVideoByTime(time) {
        this.startMoveByType(time, 'video')
    },
    startMoveZhiBoByTime(time) {
        this.startMoveByType(time, 'zhibo')
    },
    isFirstYangjiToday() {
        return this.todayDataInfo.yangjiNum == 0;
    },
    // 设置第一次养机类型（随机）
    setSearchTypeValue() {
        let arr = [5, 6, 7]
        let firstType = autoUtils.shuffle(arr)[0]
        this.yangjiModelType = firstType
    },
    setYangjiModelList(data) {
        this.yangjiModelType = data[0].type
        data.shift()
        this.setConfig('newYangjiModelTypeList', data)
    },
    setYangjiModelType() {
        // autoUtils.logText(data,'开始设置养机模式的值')
        if (this.isFirstYangjiToday()) {
            autoUtils.logText('首次养机设置先搜索')
            this.setSearchTypeValue()
        } else {
            let yangjiTypeData = this.getConfig('newYangjiModelTypeList')
            if (yangjiTypeData == '') {
                autoUtils.logText('初始化newYangjiModelTypeList启动数据')
                this.setYangjiModelList(this.yangjiModelData)
            } else {
                this.setYangjiModelList(yangjiTypeData)
            }
        }
    },
    // 设置视频喜欢
    setVideoLikeNum() {
        this.videoLikeNum.like = rand.randNumber(this.LikeMaxAndMin[0], this.LikeMaxAndMin[1])
        this.videoLikeNum.collect = rand.randNumber(this.CollectMaxAndMin[0], this.CollectMaxAndMin[1])
        this.videoLikeNum.focus = rand.randNumber(this.focusMaxAndMin[0], this.focusMaxAndMin[1])
        this.videoLikeNum.time = time.nowStamp()
    },

    initVideoLikeNum() {
        let videoLikeNum = this.getConfig('videoLikeNum')
        if (videoLikeNum == '' || !this.isSameDay(videoLikeNum.time)) {
            autoUtils.logText('初始化initVideoLikeNum启动数据')
            this.setVideoLikeNum()
            this.setConfig('videoLikeNum', this.videoLikeNum)
        } else {
            // 不是第一次
            autoUtils.logText('今日启动过了,取缓存的值')
            this.videoLikeNum = videoLikeNum
        }
        // printl(JSON.stringify(this.videoLikeNum))
    },

    swipeVideoTime: 0,
    swipeZhiBoNum: 0,
    setHuaDongCishu(num) {
        // 获取任务的次数  15次左右传15 
        let allNum = 1
        if (num == 1) {
            allNum = 1
        }else{
            let arr = []
            for (let i = 0; i <= num; i++) {
                arr.push(i + 1)
            }
            let modelArr = autoUtils.shuffle(arr)

            allNum = modelArr[0] + modelArr[1]
        }
        // if (allNum < num) {
        //     allNum = rand.randNumber(3, 5)
        // }
        return allNum
    },

    sleepTimeVideoMehtod(min, max) {
        return rand.randNumber(min, max)
    },
    // 针对小程序的页面滑动  暂时三种 以后还可以增加优化
    timeTypeOptions: {
        1: '短时间等待',
        2: '正常时间等待',
        3: '长时间等待',
    },
    pageSleepTimeByType(type) {
        type = type ? type : 2
        autoUtils.logText(this.timeTypeOptions[type])
        let timeTypeMethod = {
            "1": this.sleepTimeVideoMehtod(3, 20),
            "2": this.sleepTimeVideoMehtod(30, 50),
            "3": this.sleepTimeVideoMehtod(50, 80),
        }
        return timeTypeMethod[type]
    },
    setSearchMethod(data) {
        this.searArrData = data[0]
        data[0].time = time.nowStamp()
        this.setConfig('newSearchArrList', data)
    },
    searArrData: {},
    searTextStr: '',
    // 设置当天要搜索的类型
    setSearchStrText() {
        // this.setConfig('newSearchArrList','')
        let searArrTextData = this.getConfig('newSearchArrList')
        if (searArrTextData == '') {
            autoUtils.logText('初始化newSearchArrList启动数据')
            this.setSearchMethod(AutoGlobData.searchArr)
        } else {
            // autoUtils.logText(time.nowStamp(),autoUtils.getTodayTime(searArrTextData[0].time))
            if (this.isSameDay(searArrTextData[0].time)) {
                autoUtils.logText('搜索值缓存里的还没用完,取缓存的值')
                this.setSearchMethod(searArrTextData)

            } else {
                autoUtils.logText('搜索值今日没启动过,更新搜索值，从缓存里取或者重置搜索值')
                searArrTextData.shift()
                if (searArrTextData.length > 0) {
                    this.setSearchMethod(searArrTextData)
                } else {
                    this.setSearchMethod(AutoGlobData.searchArr)
                }
                this.setTodaySearTextStrMethod(this.searArrData.textArr)
            }
        }
        // this.searArrData = searArrTextData
        // autoUtils.logText(JSON.stringify(this.searArrData))
    },
    setTodaySearTextStrMethod(data) {
        this.searTextStr = data[0]
        this.setConfig('currentTextStr', data)
    },
    setTodaySearTextStr() {
        let searTextStr = this.getConfig('currentTextStr')
        if (searTextStr == '') {
            autoUtils.logText(this.searArrData.textArr)
            this.setTodaySearTextStrMethod(this.searArrData.textArr)
        } else {
            searTextStr.shift()
            if (searTextStr.length > 0) {
                this.setTodaySearTextStrMethod(searTextStr)
            } else {
                this.setTodaySearTextStrMethod(autoUtils.shuffle(this.searArrData.textArr))
            }
        }
        autoUtils.logText(this.searTextStr, 'searTextStr')
    },
    indexSwipeRight() {
        hid.swip(rand.randNumber(screen.getScreenWidth() - 400, screen.getScreenWidth() - 350), douyinAd.getSwipeY(), rand.randNumber(30, 50), douyinAd.getSwipeY(), rand.randNumber(30, 60), 0, 0)
    },
    swipePageByCurrentPageType(pageType, type) {
        if (pageType == 2) { // 直播页面
            if (type == 1) {
                autoUtils.sleep(5, '向右滑动一次到推荐页')
                this.indexSwipeRight()
            } else if (type == 3) {
                autoUtils.sleep(5, '向左滑动一次到关注页')
                this.performLeftSwipe()
            }
        } else if (pageType == 3) { // 关注页面
            if (type == 1) {
                autoUtils.sleep(5, '向右滑动一次到推荐页，第一次')
                this.indexSwipeRight()
                autoUtils.sleep(5, '向右滑动一次到推荐页，第二次')
                this.indexSwipeRight()
            } else if (type == 2) {
                autoUtils.sleep(5, '向右滑动一次到直播页')
                this.performRightSwipe()
            }
        } else if (pageType == 1) { // 首页的推荐页面
            if (type == 2) {
                autoUtils.sleep(5, '向左滑动一次到直播页')
                this.performLeftSwipe()
            } else if (type == 3) {
                autoUtils.sleep(5, '向左滑动两次到关注页，开始第一次')
                this.performLeftSwipe()
                autoUtils.sleep(5, '向左滑动两次到关注页，开始第二次')
                this.performLeftSwipe()
            }
        }
    },
    //根据类型去首页的tab
    goIndexPageByType(name) {
        this.backToHome(1)
        let typeObj = {
            '首页的推荐': 1,
            '首页的直播': 2,
            '首页的关注': 3
        }
        let type = typeObj[name]

        var ocrRes = screen.MLKitOcr('zh', 2.5);
        let result = ocrRes.getJson()
        let zhiboNum = 0
        for (var i = 0; i < result.length; i++) {
            let str = String(result[i].text)
            if (str.indexOf('直播中') > -1) {
                zhiboNum += 1
            }
        }
        if (zhiboNum > 1) {
            if (autoUtils.getText('我的预约')) {
                autoUtils.logText('在首页直播页面')
                this.swipePageByCurrentPageType(2, type)
            } else {
                autoUtils.logText('在首页关注tab页面')
                this.swipePageByCurrentPageType(3, type)
            }
        } else {
            if (autoUtils.getText('直播发现')) {
                autoUtils.logText('在首页直播页面')
                this.swipePageByCurrentPageType(2, type)
            } else if (autoUtils.getText('个直播')) {
                autoUtils.logText('在首页关注页面')
                this.swipePageByCurrentPageType(3, type)
            } else {
                autoUtils.logText('在首页推荐页面')
                this.swipePageByCurrentPageType(1, type)
            }
        }
    },
    //是否在首页我的推荐页面
    isIndexPageTuiJian() {
        return autoUtils.getText('首页') && autoUtils.getText('我') && autoUtils.getText('推荐')
    },
    //是否在首页我的页面
    isIndexPageMy() {
        return autoUtils.getText('首页') && autoUtils.getText('作品') && autoUtils.getText('喜欢')
    },
    // 是否在首页右滑动的进入小程序侧边弹窗页面
    isIndexMiniAppRuKou() {
        return autoUtils.getText('更多功能') && autoUtils.getText('创作者中心') && autoUtils.getText('小程序')
    },
    // 是否在小程序列表页的入口
    isMiniAppListPage() {
        return autoUtils.getText('小程序') && autoUtils.getText('最近使用')
    },
    //右滑点击弹窗出现的小程序文字
    clickPopMiniApp() {
        hid.swip(screen.getScreenWidth() - 100, screen.getScreenHeight() * 0.18, 50, screen.getScreenHeight() * 0.18, rand.randNumber(20, 50), 0, 0)
        autoUtils.sleep(3, '右滑动进入弹窗')

        let x = screen.getScreenWidth() - screen.getScreenWidth() / 3
        hid.swipEx(x, screen.getScreenHeight() / 2 + 200, x, screen.getScreenHeight() / 2 - 200, 0, rand.randNumber(500, 1500), 0)

        if (autoUtils.getText('常用小程序')) {
            autoUtils.clickGetText('全部>')
        } else {
            if (autoUtils.getText('小程序')) {
                autoUtils.clickGetText('小程序')
            } else {
                this.performForwardSwipe()
                if (autoUtils.getText('小程序')) {
                    autoUtils.clickGetText('小程序')
                } else {
                    autoUtils.logText('检测到了异常，没有找到小程序按钮,重新登录后在找')
                    autoUtils.loginApp(AutoGlobData.appPhoneName)
                    this.goAppListPage()
                }
            }
        }

    },
    handleJisuBanEnterAppList() {
        if (AutoGlobData.appPhoneName == '抖音极速版' || AutoGlobData.appPhoneName.indexOf('火山') > -1) {
            if (autoUtils.getText('最近使用')) {
                autoUtils.clickGetText('最近使用')
            }
        }
    },
    fromMyToAppList() {
        if (this.getCvByText('我的页面的小程序图标')) {
            const num = rand.randNumber(1, 10)
            if (num > 3) {
                autoUtils.logText('点击我的小程序，直接进入小程序列表')
                this.clickCv('我的页面的小程序图标')
                autoUtils.sleep(6, '点击后')
            } else {
                this.clickPopMiniApp()
            }
        } else {
            this.clickPopMiniApp()
        }
    },
    fromIndexMyToAppList(num, name) {
        num = num ? num : 1
        if (num > 10) {
            autoUtils.loginApp(AutoGlobData.appPhoneName)
            autoUtils.backToHome()
        }
        if (autoUtils.getText('首页') && autoUtils.getText('朋友')) {
            if (this.isIndexPageMy()) {
                this.fromMyToAppList()
            } else {
                autoUtils.clickGetTextAll('我')
                this.fromMyToAppList()
            }
        } else {
            if (this.isMiniAppListPage()) {
                autoUtils.sleep(3, '开始点击最近使用')
                autoUtils.clickGetText('最近使用')
                autoUtils.logText('找到了小程序列表入口页面')
                // this.handleJisuBanEnterAppList()
            } else {
                name = autoUtils.getShortName(name)
                if (this.isAppDetailPage(name)) {
                    autoUtils.logText('在小程序内部了')
                } else {

                    num++
                    if (num == 8) {
                        autoUtils.autoHome()
                        autoUtils.sleep(10, '开始重新寻找')
                        autoUtils.loginApp(AutoGlobData.appPhoneName)
                    }

                    if (num == 10) {
                        autoUtils.logText(num + '多次都没找到，从此处清理后台，重起抖音或者抖音极速版后再进入小程序')
                        autoUtils.clearRecentsApp()
                        num = 1
                    }
                    autoUtils.autoBack()
                    this.fromIndexMyToAppList(num, name)
                }

            }
        }
        this.handleJisuBanEnterAppList()
    },
    goAppListPage(name) {
        this.fromIndexMyToAppList(1, name)
    },
    isAppDetailPage(name) {

        let flag = false
        if (!autoUtils.getText('最近使用')) {
            if (!autoUtils.getText(name)) {
                name = name.slice(0, 2)
            }
            if (name.indexOf('数字') > -1) {
                if (autoUtils.getText('2048')) {
                    flag = true
                }
            } else {
                if (autoUtils.getText(name) && autoUtils.getText('反馈')) {
                    flag = true
                } else {
                    //找不到橘子或者柠檬时候 有反馈就行了
                    if (name.indexOf('橘子') > -1 && autoUtils.getText('反馈')) {
                        flag = true
                    }
                    if (name.indexOf('柠檬') > -1 && autoUtils.getText('反馈')) {
                        flag = true
                    }
                }
            }

        }

        return flag
    },
    findMiniAppNameAndClick(name, num) {
        //前提是进入了小程序列表页 在此寻找小程序
        num = num ? num : 1

        autoUtils.sleep(5, '等待后寻找')

        if (autoUtils.getText('取消')) {
            autoUtils.logText('小程序取消');
            autoUtils.clickGetText('取消')
            autoUtils.sleep(3, '等待后寻找')
        }

        if (this.isAppDetailPage(name)) {
            autoUtils.logText('小程序进入成功了');
            return;
        }


        let newName = name

        let cvName = this.hanldeCvTextByAppName(name)

        autoUtils.logText(cvName)

        if (this.getCvByText(cvName)) {
            this.clickCv(cvName)
            autoUtils.sleep(rand.randNumber(10, 15), '检验是否在小程序页面')
            if (this.isAppDetailPage(name)) {
                autoUtils.logText('小程序进入成功了')
                return;
            }
        }
        else if (autoUtils.getText(newName)) {
            autoUtils.logText('找到了开始点击' + newName)
            autoUtils.clickGetText(newName)

            autoUtils.sleep(rand.randNumber(15, 25), '检验是否在小程序页面')

            if (this.isAppDetailPage(name)) {
                autoUtils.logText('小程序进入成功了')
            } else {
                autoUtils.logText(name + '小程序进入失败了')

                autoUtils.sleep(6, '尝试移动点击寻找')

                autoUtils.clickGetText(name, true)

                autoUtils.sleep(6, '检测是否点击成功')

                if (this.isAppDetailPage(name)) {
                    autoUtils.logText('移动寻找成功')
                } else {
                    autoUtils.logText(name + '移动寻找失败')
                    autoUtils.autoBack()
                    this.fromIndexMyToAppList(1, name)
                    this.findMiniAppNameAndClick(name, 1)

                }
            }

        } else {

            autoUtils.sleep(5, '开始下滑寻找' + name)
            hid.swipAI(this.getSwipeX(), screen.getScreenHeight() - 300, this.getSwipeX(), screen.getScreenHeight() - 850)
            autoUtils.sleep(2, '等待寻找' + name)
            if (num < 6) {
                num++
                this.findMiniAppNameAndClick(name, num)
            } else {
                num = 1
                autoUtils.logText('多次都没找到，返回重新寻找')
                autoUtils.sleep(5, '开始重新寻找')
                autoUtils.autoBack()
                this.fromIndexMyToAppList(1, name)
                this.findMiniAppNameAndClick(name, 1)

            }
        }
    },
    // 找到小程序列表里的小程序点击
    findAppListPage(name) {
        this.goAppListPage(name)
        this.findMiniAppNameAndClick(name, 1)
    },
    // 处理随机数的权重
    weightedRandom(items) {
        let totalWeight = 0;
        for (let item of items) {
            totalWeight += item.weight;
        }
        let rand = Math.random() * totalWeight;
        let cummulativeWeight = 0;
        for (let item of items) {
            cummulativeWeight += item.weight;
            if (rand <= cummulativeWeight) {
                return item.value;
            }
        }
    },
    // num 随机的总数量，weight 权重高的对象[{value:1,weight: 2}]
    randomNumWeight(num, weightArr) {
        let numbers = []
        for (let i = 0; i < num; i++) {
            let defaultValue = 1
            for (let j = 0; j < weightArr.length; j++) {
                if (weightArr[j].value == i + 1) {
                    defaultValue = weightArr[j].weight
                }
            }
            numbers.push({
                value: i + 1,
                weight: defaultValue
            })
        }
        return numbers
    },
    getSwipeX() {
        return rand.randNumber(screen.getScreenWidth() / 2 - 200, screen.getScreenWidth() / 2 + 200)
    },
    getSwipeY() {
        return rand.randNumber(screen.getScreenHeight() / 2 - 200, screen.getScreenHeight() / 2 + 200)
    },
    // 优化滑动参数生成逻辑
    generateSwipeParams() {
        const screenHeight = screen.getScreenHeight();
        // 生成滑动参数 开始位置(x,startY) 结束位置(endX,endY) 滑动时长(duration)
        return {
            x: this.getSwipeX(),
            startY: rand.randNumber(screenHeight - 500, screenHeight - 300),
            endX: this.getSwipeX(),
            endY: rand.randNumber(500, 800)
        };
    },
    //滑动操作方法 左滑
    performLeftSwipe() {
        autoUtils.logText('执行左滑操作');
        const centerY = this.getSwipeY();
        const centerY1 = this.getSwipeY();
        hid.swip(rand.randNumber(50, 100), centerY, rand.randNumber(screen.getScreenWidth() - 200, screen.getScreenWidth() - 100), centerY1, rand.randNumber(30, 60), 0, 0)
    },
    //滑动操作方法 右滑
    performRightSwipe() {
        autoUtils.logText('执行右滑操作');
        const centerY = this.getSwipeY();
        const centerY1 = this.getSwipeY();
        hid.swip(rand.randNumber(screen.getScreenWidth() - 350, screen.getScreenWidth() - 100), centerY, rand.randNumber(50, 100), centerY1, rand.randNumber(30, 60), 0, 0)
    },
    // 滑动操作方法 回滑
    performBackwardSwipe() {
        autoUtils.logText('执行回滑操作');
        const centerX = this.getSwipeX();
        const centerX1 = this.getSwipeX();
        hid.swipEx(centerX, rand.randNumber(300, 400), centerX1, screen.getScreenHeight() - rand.randNumber(100, 300), 0, rand.randNumber(500, 1500), 0);
    },
    // 滑动操作方法 上滑
    performForwardSwipe() {
        let type = rand.randNumber(1, 3)
        autoUtils.logText(`执行上滑操作-方式${type}`);
        const params = this.generateSwipeParams();
        let { x, startY, endX, endY } = params
        if (type == 1) {
            hid.swipEx(x, startY, endX, endY, 0, rand.randNumber(500, 1500), 0)
        } else if (type == 2) {
            hid.swipEx(x, startY, endX, endY, 0, 500, 0)
        } else if (type == 3) {
            hid.swipEx(x, startY, endX, endY, 0, rand.randNumber(300, 800), rand.randNumber(0, 500))
        } else {
            hid.swipEx(x, startY, endX, endY, 0, 500, 0)
        }
    },
    // 滑动模式 每个模式的执行 等待时间都不一样 滑动模式
    huadongmoshiOptions: {
        1: '前进',
        2: '后退',
    },
    // 开始滑动
    startHuaDong(init) {
        let model = rand.randNumber(1, 15) == 15 ? 2 : 1
        autoUtils.logText('滑动的模式是' + this.huadongmoshiOptions[model])
        // 初始化滑动方向控制
        if (init && model === 2) {
            model = 1
        }
        autoUtils.sleep(3, '滑动前等待');
        if (model == 2) {
            this.performBackwardSwipe();
        } else {
            this.performForwardSwipe();
        }
    },
    //返回首页 开始养机
    backToHome(num) {
        num = num ? num : 1
        if (autoUtils.getText('以后再说')) {
            autoUtils.clickGetText('以后再说')
            autoUtils.sleep(5, '等待')
        }
        if (autoUtils.getText('同意')) {
            autoUtils.clickGetText('同意')
            autoUtils.sleep(5, '同意后等待')
        }
        if (autoUtils.getText('签到')) {
            autoUtils.sleep(2, '等待关闭签到')
            autoUtils.autoBack()
            autoUtils.sleep(3, '等待')
        }
        if (autoUtils.getText('取消', true)) {
            autoUtils.sleep(2, '等待关闭取消')
            autoUtils.clickGetText('取消')
            autoUtils.sleep(3, '取消')
        }
        if (num < 9) {
            autoUtils.sleep(3, '等待检测是否在首页')
            if (autoUtils.isIndexPage()) {
                autoUtils.logText('返回首页成功了')
            } else {
                autoUtils.logText('返回首页失败了,开始尝试重新返回页面')
                autoUtils.autoBack()
                num++
                this.backToHome(num)
            }
        } else {
            num = 1
            if (autoUtils.getText('以后再说')) {
                autoUtils.clickGetText('以后再说')
                autoUtils.sleep(5, '等待')
            } else {
                autoUtils.clearRecentsApp()
            }
            this.backToHome(num)
        }
    },
    isVideoPage() {
        return this.getCvByText('视频中的评论按钮') || autoUtils.getText('@') || this.getCvByText('视频的收藏按钮')
    },
    isSearchPage() {
        return autoUtils.getText('综合') && autoUtils.getText('搜索')
    },
    goSearchPage() {
        //设置当天搜索的类型
        // this.setSearchStrText()
        // this.setTodaySearTextStr()
        // autoUtils.logText(this.searTextStr)

        this.backToHome()
        if (this.getCvByText('首页的搜索图标')) {
            this.clickCv('首页的搜索图标')
        } else {
            autoUtils.sleep(6, '开始点击搜索')
            hid.clickPercent(0.9201, 0.0801)
            autoUtils.sleep(3, '开始点击搜索后')
        }
        Clipboard.copy(this.searTextStr)
        autoUtils.sleep(8, '点击首页搜索后')
        hid.paste()
        autoUtils.sleep(6, '粘贴后')
        autoUtils.clickByText('搜索')
        autoUtils.sleep(10, '点击搜索后')

        if (this.isSearchPage()) {
            autoUtils.logText('进入了搜索tab页')
        }

    },
    // 标签对标关键字
    duibiaoStrArr: ['传奇', '汽', '游', '医', '牙', '疤', '种植', '婚', '腋', '搬砖', '散人', '名扬', '自动', '回收', '腔', '游戏', '玩家', '武侠', '冰雪', '爆率', '手游', '宝', '原始', '霸业', '三国', '战略', '挂机', '传世', '怀旧', '热血', '车', '植发', '口腔', '近视'],
    isDuiBiaoVideo() {
        var ocrResult = screen.MLKitOcr('zh', 1);
        var str = ocrResult.getAllString();
        // autoUtils.logText(str)
        let duibiao = false
        for (var i = 0; i < this.duibiaoStrArr.length; i++) {
            if (str.indexOf(this.duibiaoStrArr[i]) > -1) {
                // autoUtils.logText(this.duibiaoStrArr[i])
                duibiao = true
                break;
            }
        }
        return duibiao
    },
    // 对于优质视频 优先喜欢+随机评论 一天不超过5-8个 优质视频完播后 再停留一段时间 中等质量视频完播后 停留短时间  劣质和 不对标视频马上划走
    // 然后收藏+随机评论 不超过5-8个 都满了 再对优质视频评论5-8 如果都满了 去直播间挂时长活跃
    // 关注不要超过4个
    // 直播任务时，区分直播类型，快速还是慢速 首页找到人气高的直播间 快速的话 看两个大概15分钟 慢速的话看3个大概45分钟 快速和慢速都要随机评论 如果遇到人气超过500的直播间 一点要评论 关注
    // 对搜索标签分类，每天打一个类型的标签，标签第一次先随机，后面按照顺序搜索，比如今天养传奇手游，那么标签就都是传奇手游的。
    //普通养机  直播间挂时长  推荐页刷标签视频 
    //精养机  养的更加细致（普通养机的组合）
    jingyangji() {
        // 直播间停留时间更长，视频滑动次数更多 更加注重搜索养机 精养机（深度养号用精养模式）
        autoUtils.loginApp(AutoGlobData.appPhoneName)
        this.yangjiSpeed = 'quick'
        this.getTodayDataInfo()
        this.setVideoAndZhiBoSwipeNum()
        this.initVideoLikeNum()
        this.backToHome()
        this.yangjimodel5()
        this.backToHome()
        this.yangjimodel1()
        this.yangjimodel1()
        this.backToHome()
        this.yangjimodel5()
        this.backToHome()
        this.yangjimodel6()
        this.backToHome()
        this.yangjimodel1()
        this.backToHome()
        this.yangjimodel5()
        this.yangjiSpeed = 'slow'
        this.backToHome()
        this.yangjimodel6()
        // this.backToHome()
        // this.yangjimodel7()
        this.yangjiSpeed = 'quick'
        autoUtils.autoHome()
        autoUtils.logText(10, '精养机完成了')
    },
    currentSwipNum: 0,
    duibiaoVideoOrZhiBoNum: 0,
    isNotGoodTypeNum: 0,

    //简单快速养 看广告过程中穿插的养机 
    // normal 正常养机（日常维护用普通模式）quick 快速养（观看广告中穿插的养机）
    // 用于简单养机 随机用
    yangjiTypeList: {
        1: '在推荐页养机',
        2: '在推荐页左侧的直播养机',
        3: '在推荐页左侧关注养机',
        4: '在小程序列表页养机',
        5: '在搜索页的综合样机养机',
        6: '在搜索页的直播养机',
        7: '在搜索页的视频养机',
        8: '在我的喜欢中养机',
        9: '在我的收藏中养机',
    },
    onlyIndexPageYangji() {
        for (var i = 0; i < 10; i++) {
            this.yangjimodel1()
        }
    },
    yangji(model) {
        if (model == 'quick') {
            this.yangjiSpeed = 'quick'
        } else {
            this.yangjiSpeed = 'normal'
        }
        // 初始化今日养机的次数
        this.getTodayDataInfo()
        // 初始化今日养机点赞等的上限数据
        this.initVideoLikeNum()
        // 根据养机速度快慢生成滑动视频或者直播的次数
        this.setVideoAndZhiBoSwipeNum()
        // 返回首页
        this.backToHome()
        // 判断今日是否第一次养机
        if (this.isFirstYangjiToday()) {
            autoUtils.logText('首次养机改为打一个标签')
            this.firstYangJiMethod()
            // 刷新存储的今日养机数据
        } else {
            // 设置养机的模式
            this.setYangjiModelType()
            let yangjiTypeMethods = {
                1: () => this.yangjimodel1(),
                2: () => this.yangjimodel2(),
                3: () => this.yangjimodel3(),
                4: () => this.yangjimodel4(),
                5: () => this.yangjimodel5(),
                6: () => this.yangjimodel6(),
                7: () => this.yangjimodel7(),
                8: () => this.yangjimodel8(),
                9: () => this.yangjimodel9()
            }
            yangjiTypeMethods[this.yangjiModelType]()
            // 刷新存储的今日养机数据
            this.todayDataInfo.yangjiNum++
            this.setConfig('todayDataInfo', this.todayDataInfo)
        }


    },
    firstYangJiMethod() {
        // 首次养机打两个标签 搜索两次
        let num = rand.randNumber(2, 4)
        autoUtils.logText('首次养机滑动的次数--' + num)
        for (let i = 0; i < num; i++) {
            this.handelVideo()
            this.startHuaDong()
        }

        //推荐页滑动几次
        // this.onlyMove(2)
        // 随机搜索养机
        this.yangjimodel5()
        this.todayDataInfo.yangjiNum++
        this.setConfig('todayDataInfo', this.todayDataInfo)
        this.backToHome()
        // type = rand.randNumber(1, 3)
        // searchMethods[type]()
        // this.todayDataInfo.yangjiNum++
        // this.setConfig('todayDataInfo', this.todayDataInfo)
    },
    // 滑动过程中处理视频 点赞 收藏 评论 
    handelVideo() {
        console.time()
        autoUtils.sleep(2, '开始处理视频')
        // 获取视频权重
        let flag = false
        for (var i = 0; i < 5; i++) {
            if (this.isVideoPage()) {
                flag = true
                break;
            } else {
                autoUtils.sleep(3, '开始检测视频标识')
            }
        }
        if (!flag) {
            this.startHuaDong()
            autoUtils.sleep(3, '开始检测视频标识')
            if (!this.isVideoPage()) {
                autoUtils.logText('没有检测到视频标识，等待5s开始下一个动作，返回寻找视频')
                this.goIndexPageByType('首页的推荐')
                return;
            }
        }
        if (autoUtils.getText('大家都在搜')) {
            autoUtils.autoBack()
            autoUtils.sleep(1, '返回后')
        }
        if (!this.isDuiBiaoVideo()) {
            autoUtils.logText('这不是对标视频')
            autoUtils.sleep(rand.randNumber(20, 35), '等待后进行下一步')
            autoUtils.sleep(5, '开始处理下一个')
            return;
        }
        // 是视频并且是对标视频
        autoUtils.logText('这是对标视频')
        this.duibiaoVideoOrZhiBoNum++
        if (autoUtils.getText('进入直播')) {
            autoUtils.logText('对标直播的处理')
            autoUtils.sleep(35, '等待后处理是否观看直播')
            // 随机1，2，3 3的权重高 出现的机率更大
            const numbers = this.randomNumWeight(3, [{ value: 3, weight: 2 }]);
            let num = this.weightedRandom(numbers)
            if (num == 3) {
                autoUtils.sleep(5, '开始点击进入直播')
                autoUtils.clickGetText('进入直播')
                autoUtils.sleep(5, '开始点击进入直播后')
                this.handelZhiBo(true)
            } else {
                this.handleVideoDetail()
            }
        } else {
            this.handleVideoDetail()
        }
        console.timeEnd()
    },
    // 判断视频的优劣
    handleVideoDetail() {

        //视频的总时长
        let time = this.getCurrentVideoTime()
        //视频的优质权重
        let weight = this.getCurrentVideoWeight()
        //是不是广告视频
        let isAdVideo = this.getCvByText('是不是广告视频')

        autoUtils.logText(time, '当前视频时长')
        autoUtils.logText(weight, '当前视频权重')
        autoUtils.logText(isAdVideo, '是不是广告视频')

        if (weight == 3) {
            if (isAdVideo) {
                this.isNotGoodTypeNum++
                autoUtils.logText('劣质的广告视频')
                autoUtils.logText('等待完播')
                autoUtils.sleep(time, '等待后进行下一步')
            } else {
                autoUtils.logText('劣质视频')
                // autoUtils.logText('不做停留，开始下一步')
                autoUtils.sleep(time, '等待后进行下一步')
            }
        } else if (weight == 2) {
            autoUtils.logText('中等视频,等待完播')
            autoUtils.sleep(time, '等待后进行下一步')
        } else {
            //滑动次数大于20次 放慢观看优质视频的速度，停留时间更长点
            // if (this.todayDataInfo.yangjiNum > 2) {
            //     // 延长3-6分钟看一个 
            //     time = time + rand.randNumber(1 * 60, 2 * 60)
            // }
            time = time + rand.randNumber(1 * 10, 2 * 30)
            this.handleGoodVideo(time)
        }

        // autoUtils.sleep(5,'不进入直播的逻辑处理')
        // autoUtils.sleep(time,'等待后播完视频')
    },
    // 处理好的视频
    handleGoodVideo(time) {
        // time视频的总时长
        autoUtils.logText('开始处理优质视频点赞等事件')
        // 实时获取今日数据
        this.getTodayDataInfo()
        // 获取今日数据点赞等上限数据
        this.initVideoLikeNum()

        // 今天的视频点击数据 喜欢数量：todayLikeNum 收藏数量：todayCollect 关注数量：todayFocus 评论数量：pingLunNum 
        let todayDataInfo = this.todayDataInfo
        // 今天随机设置的点赞、收藏、关注的上限数据 like: 5, collect: 3, focus: 3
        let videoLikeNum = this.videoLikeNum


        autoUtils.logText(JSON.stringify(todayDataInfo))
        autoUtils.logText(JSON.stringify(videoLikeNum))

        let actionType = []

        if (todayDataInfo.todayLikeNum <= videoLikeNum.like) {
            actionType.push(1)
        }
        if (todayDataInfo.todayCollect <= videoLikeNum.collect) {
            actionType.push(2)
        }
        if (todayDataInfo.todayFocus <= videoLikeNum.focus) {
            actionType.push(3)
        }

        // 延长单个优质视频时长 
        // time = time + rand.randNumber(30, 60)

        if (actionType.length > 0) {
            if (rand.randNumber(1, 10) > 3) {
                this.actionVedio(autoUtils.shuffle(actionType)[0], time)
            } else {
                autoUtils.logText('随机到不互动，进行下一步')
            }

        } else {


            let randType = rand.randNumber(1, 10)
            if (randType > 8) {
                autoUtils.logText('今日点赞等的数量已经满了,随机的数大余5,也执行点赞操作（收藏和关注的数量不能太多）')
                this.actionVedio(1, time)
            } else {
                randType = rand.randNumber(1, 10)
                if (randType > 3) {
                    autoUtils.logText('随机数大于5开始评论')
                    this.randomPingLun()
                }
            }
        }



    },
    // 生成互动的随机时间
    sleepActionVideo(time) {
        autoUtils.sleep(1, '等待中剩余' + time + '秒')
        // let arr = [-0.2, -0.3, -0.4, -0.5, 0.1, 0.2, 0.5]
        // let timeNum = 1 + autoUtils.shuffle(arr)[0]
        // autoUtils.sleep(1, '等待中')
        // if(rand.randNumber(1,10) > 8){ //减小服务器的压力
        //     autoUtils.sleep(1, '等待中剩余'+time+'秒') 
        // }else{
        //     sleep.millisecond(毫秒 = 1000 * timeNum);
        // }

    },
    // 点击视频的关注等
    actionVedio(type, time) {
        let obj = {
            1: '点赞',
            2: '收藏',
            3: '关注',
        }
        autoUtils.logText('随机互动的类型是' + obj[type])
        time = time + rand.randNumber(5, 10)
        autoUtils.logText('等待的时长是' + time)
        let timeAction = rand.randNumber(0, time)
        if (timeAction < 5) {
            timeAction = 5
        }
        autoUtils.logText('第' + timeAction + '秒时互动')
        if (type == 1) {
            for (let i = 0; i < time; i++) {
                if (i == timeAction) {
                    autoUtils.logText('开始点赞')
                    this.clickCv('视频的喜欢按钮')
                    this.todayDataInfo.todayLikeNum++
                    this.setConfig('todayDataInfo', this.todayDataInfo)
                }
                this.sleepActionVideo(time - i)
            }
        } else if (type == 2) {
            for (let i = 0; i < time; i++) {
                if (i == timeAction) {
                    autoUtils.logText('开始收藏')
                    this.clickCv('视频的收藏按钮')
                    this.todayDataInfo.todayCollect++
                    this.setConfig('todayDataInfo', this.todayDataInfo)
                }
                this.sleepActionVideo(time - i)
            }
        } else if (type == 3) {
            for (let i = 0; i < time; i++) {
                if (i == timeAction) {
                    autoUtils.logText('开始关注')
                    this.clickCv('视频的关注按钮')
                    this.todayDataInfo.todayFocus++
                    this.setConfig('todayDataInfo', this.todayDataInfo)
                }
                this.sleepActionVideo(time - i)
            }
        }

        let randPingLun = rand.randNumber(1, 15)
        if (randPingLun > 12) {
            autoUtils.logText('开始随机评论')
            this.randomPingLun()
        }

    },
    // 随机生成评论
    randomPingLun() {
        autoUtils.sleep(3, '等待5秒')
        if (this.getCvByText('视频中的评论按钮')) {
            this.clickCv('视频中的评论按钮')
            if (rand.randNumber(1, 10) > 5) {
                for (var i = 0; i < rand.randNumber(2, 6); i++) {
                    autoUtils.sleep(rand.randNumber(5, 10))
                    this.detailSwipe()
                }
            }
            autoUtils.sleep(5, '等待5秒')
            if (autoUtils.getText('善语结善缘') || autoUtils.getText('说点')) {
                if (autoUtils.getText('说点')) {
                    autoUtils.clickGetText('说点')
                }
                if (autoUtils.getText('善语结善缘')) {
                    autoUtils.clickGetText('善语结善缘')
                }
                Clipboard.copy(autoUtils.shuffle(this.pingLunTextArr)[0])
                autoUtils.sleep(5, '等待5秒')
                hid.paste()
                autoUtils.sleep(5, '等待5秒')
                autoUtils.clickGetText('发送')
                autoUtils.sleep(5, '等待5秒')
            }

            autoUtils.autoBack()
        }

        autoUtils.sleep(5, '等待5秒')
        if (!this.getCvByText('视频中的评论按钮')) {
            autoUtils.logText('开始返回')
            autoUtils.autoBack()
        } else {
            autoUtils.logText('返回成功了')
        }


    },
    // 生成直播的停留时长
    computedZhiBoTime() {
        let time = rand.randNumber(30, 60)
        if (this.yangjiSpeed == 'quick') {
            // 2-3分钟 结合滑动次数 养一次大概20分钟-40分钟
            time = rand.randNumber(120, 150)
        } else if (this.yangjiSpeed == 'slow') {
            // 5-10分钟
            time = rand.randNumber(300, 500)
        } else {
            // 9-10分钟
            time = rand.randNumber(500, 600)
        }
        return time
    },
    // 滑动直播屏幕 关注 发评论 送礼物 互动
    handelZhiBo(back) {

        autoUtils.sleep(10, '等待10秒')
        if (this.getCvByText('直播的礼物按钮') || autoUtils.getText('说点什么')) {
            autoUtils.logText(time, '进入直播了')
            this.handleZhiboDetail()
            autoUtils.sleep(10, '等待10秒')
        } else {
            autoUtils.sleep(rand.randNumber(30, 60), '没有找到直播礼物按钮，判断为不在直播页面，等待20秒后继续')
        }
        if (back) {
            autoUtils.sleep(3, '当前直播是从视频进入的，开始返回视频')
            autoUtils.autoBack()
            if (this.isVideoPage()) {
                autoUtils.logText('返回成功了')
            } else {
                autoUtils.autoBack()
                if (this.isVideoPage()) {
                    autoUtils.logText('返回成功了')
                } else {
                    autoUtils.autoBack()
                }
            }
        }
    },
    isFromAdZhiBo: false,
    // 处理直播详情
    handleZhiboDetail(timeAll) {
        let time = timeAll ? timeAll : this.computedZhiBoTime()
        if (timeAll) {
            this.isFromAdZhiBo = true
        } else {
            this.isFromAdZhiBo = false
        }
        autoUtils.logText(time, '停留的时长')
        this.getZhiBoInfo()
        autoUtils.logText(this.zhiboInfo.personNum, '直播间的人数')
        autoUtils.logText(this.zhiboInfo.zhiBoisFocus, '当前直播间的是否关注了')

        if (this.zhiboInfo.personNum < 100) {
            autoUtils.logText('劣质直播间,刷个停留视时长')
            this.isNotGoodTypeNum++
            autoUtils.sleep(rand.randNumber(60, 120), '等待直播')
            return;
        }

        autoUtils.logText('优质直播间')

        if (this.zhiboInfo.zhiBoisFocus || this.isFromAdZhiBo) {
            autoUtils.logText('关注过主播，增加停留时长,增加2-5分钟')
            if (this.isFromAdZhiBo) {
                //避免看直播太长，总推荐直播广告
                time = time + rand.randNumber(60, 160)
            } else {
                time = time + rand.randNumber(120, 300)
            }
        }

        // //滑动次数大于10次或者养机次数大于2 放慢观看优质视频的速度，停留时间更长点
        // if (this.currentSwipNum > 10 || this.todayDataInfo.yangjiNum > 2) {
        //     // 延长5-10分钟看一个 
        //     time = time + rand.randNumber(5 * 60, 10 * 60)
        // }

        let timeAction = rand.randNumber(0, time / 2)
        if (timeAction < 5) {
            timeAction = 5
        }

        let timeAction1 = timeAction + rand.randNumber(10, 15)
        let timeAction2 = timeAction1 + rand.randNumber(10, 15)

        time = time + 50

        let typeArr = autoUtils.shuffle([1, 2, 3])

        let objMethods = {
            1: () => this.goZhiBoPinglun(),
            2: () => this.giveZhiBoGift(),
            3: () => this.setZhiboFocus(),
        }

        autoUtils.logText('执行的顺序是' + typeArr)
        autoUtils.logText('执行的总时间是', time)
        autoUtils.logText('执行的时间是', timeAction, timeAction1, timeAction2)
        for (let i = 0; i < time; i++) {
            if (i == timeAction) {
                objMethods[typeArr[0]]()
            } else if (i == timeAction1) {
                objMethods[typeArr[1]]()
            } else if (i == timeAction2) {
                objMethods[typeArr[2]]()
            }
            this.sleepActionVideo(time - i)
        }

    },
    // 设置直播的关注
    setZhiboFocus() {
        autoUtils.logText('执行关注')
        if (this.zhiboInfo.zhiBoisFocus) {
            return;
        }
        // 实时获取今日数据
        this.getTodayDataInfo()
        if (this.todayDataInfo.todayFocus < this.videoLikeNum.focus) {
            this.clickCv('直播的关注按钮')
        } else {
            let focus = rand.randNumber(1, 10)
            if (focus > 8) {
                this.clickCv('直播的关注按钮')
                this.todayDataInfo.todayFocus++
                this.setConfig('todayDataInfo', this.todayDataInfo)
            } else {
                autoUtils.logText('随机到不关注')
            }
        }
    },
    // 设置直播的评论
    goZhiBoPinglun() {
        autoUtils.sleep(3, '开始评论')
        let isPingLun = rand.randNumber(1, 10)
        if (autoUtils.getText('说点什么') && isPingLun > 3) {
            autoUtils.clickGetText('说点什么')
            Clipboard.copy(autoUtils.shuffle(this.zhiBoTextArr)[0])
            autoUtils.sleep(5, '等待5秒')
            hid.paste()
            autoUtils.sleep(10, '等待10秒')
            if (autoUtils.getText('发送')) {
                autoUtils.clickGetText('发送')
            } else {
                autoUtils.clickGetText('说点什么')
                autoUtils.sleep(5, '等待5秒')
                if (autoUtils.getText('发送')) {
                    autoUtils.clickGetText('发送')
                }
            }


            autoUtils.sleep(5, '等待5秒')
        }

        this.backToZhiBo()
    },
    // 评论等动作后返回直播
    backToZhiBo() {
        if (!this.getCvByText('直播的礼物按钮')) {
            autoUtils.autoBack()
            autoUtils.sleep(5, '等待5秒')
            if (!this.getCvByText('直播的礼物按钮')) {
                autoUtils.autoBack()
            }
            if (!this.getCvByText('直播的礼物按钮')) {
                autoUtils.autoBack()
            }
        }

        if (this.getCvByText('直播的礼物按钮')) {
            autoUtils.logText('返回成功了')
        } else {
            autoUtils.sleep(5, '等待5秒')
            autoUtils.autoBack()
        }
    },
    // 送钻石的上限
    maxGiveGiftNum: 3,
    // 直播间送礼物方法
    giveZhiBoGift() {
        autoUtils.logText('执行送礼物')
        // 实时获取今日数据
        this.getTodayDataInfo()
        // autoUtils.logText(JSON.stringify(this.todayDataInfo))
        autoUtils.sleep(6, '等待5秒')

        let flag = false
        if (this.isFromAdZhiBo) {
            // 广告进入的直播间刷礼物的概率大 当前送礼物小于6一定刷
            if (this.todayDataInfo.giftNum <= 6) {
                flag = true
            }
        } else {
            if (this.todayDataInfo.giftNum <= this.maxGiveGiftNum) {
                flag = true
            }
        }
        if (flag) {
            this.clickCv('直播的礼物按钮')
            autoUtils.sleep(10, '等待5秒')
            // if (autoUtils.getText('充值')) {
            //     autoUtils.logText('没钱了，没有钻石了，不能刷礼物')
            //     let str = `送礼提醒:${AutoGlobData.phoneIdToNameList[device.getDeviceIntID()]} ID:${device.getDeviceIntID()} 账号没钱了`
            //     ws.send(str)
            //     return;
            // }
            if (this.getCvByText('查看钻石余额图标')) {
                this.clickCv('查看钻石余额图标')
                autoUtils.sleep(10, '等待10秒')
                this.getZuanShiNum()
                let num = this.zhiboInfo.zuanShiNum || 0
                autoUtils.sleep(5, '等待5秒')
                autoUtils.autoBack()
                autoUtils.sleep(2, '等待2秒')
                if (num > 1) {
                    autoUtils.sleep(5, '等待5秒赠送')
                    autoUtils.clickByText('赠送')
                    this.todayDataInfo.giftNum++
                    this.setConfig('todayDataInfo', this.todayDataInfo)
                    autoUtils.sleep(5, '等待5秒')
                    let str = `送礼提醒:${AutoGlobData.phoneIdToNameList[device.getDeviceIntID()]} ID:${device.getDeviceIntID()} 送了一个一毛钱的礼物`
                    ws.send(str)
                    // autoUtils.clickByText('赠送')
                    // this.todayDataInfo.giftNum++
                    // this.setConfig('todayDataInfo', this.todayDataInfo)
                }
            } else {
                autoUtils.logText('没钱了，没有钻石了，不能刷礼物')
                let str = `送礼提醒:${AutoGlobData.phoneIdToNameList[device.getDeviceIntID()]} ID:${device.getDeviceIntID()} 账号没钱了`
                ws.send(str)
            }
        } else {
            autoUtils.logText('今天送的礼物到上限了，不送了')
        }
        this.backToZhiBo()
    },
    // 设置养机滑动的次数，完成后开始看广告
    setVideoAndZhiBoSwipeNum() {
        //swipeVideoTime 单次养机时长
        if (this.yangjiSpeed == 'quick') {
            // 刷视频时间短的话，正好小程序的停留时间变长了 实际运行后20-45之间好像太长了改成15-25
            this.swipeVideoTime = rand.randNumber(15 * 60, 25 * 60)
        } else {
            // 精养机就是多个正常养机的组合所以单次时间的随机是不变的，区别就是直播间停留时间更长了
            // this.swipeVideoTime = rand.randNumber(30 * 60, 60 * 60)
            this.swipeVideoTime = rand.randNumber(15 * 60, 25 * 60)
        }
    },
    // 观看视频后检测对标视频数量
    checkDuiBiaoNum() {
        //对标率小于20%
        if (this.duibiaoVideoOrZhiBoNum < (this.currentSwipNum / 3)) {
            //随机 接着滑动或者去搜索页养机
            // this.startMoveVideoByTime(this.swipeVideoTime)
        }
        autoUtils.logText(this.currentSwipNum, this.duibiaoVideoOrZhiBoNum, 'duibiaoVideoOrZhiBoNum')
    },
    //首页的推荐页养机
    yangjimodel1() {
        this.goIndexPageByType('首页的推荐')
        this.startMoveVideoByTime(this.swipeVideoTime)
        // 运行完检测对标数量
        this.checkDuiBiaoNum()
    },
    //首页的关注养机
    yangjimodel2() {
        this.goIndexPageByType('首页的关注')
        this.startMoveVideoByTime(this.swipeVideoTime)
    },
    //首页的直播养机
    yangjimodel3() {
        this.goIndexPageByType('首页的直播')
        autoUtils.sleep(60, '等待自动进入直播间')
        this.startMoveZhiBoByTime(this.swipeVideoTime)
        // 运行完检测对标数量
        this.checkDuiBiaoNum()
    },
    //只养小程序的首页停留时长
    yangjimodel4() {
        autoUtils.logText('只养小程序列表页')
        let list = autoUtils.shuffle(AutoGlobData.appList)
        for (let i = 0; i < list.length; i++) {
            autoUtils.logText('当前养机小程序', list[i].appName)
            this.findAppListPage(list[i].appName)
            autoUtils.sleep(6, '开始滑动页面')
            this.onlyMove(3)
        }
    },
    commonSearchVideo() {
        if (this.getCvByText("搜索后的视频")) {
            this.clickCv('搜索后的视频')
            autoUtils.sleep(5, '等待')
            hid.clickPercent(rand.randNumber(17.4, 39.2) / 100, rand.randNumber(35.5, 45.9) / 100)
            autoUtils.sleep(10, '等待后寻找视频标志')
            if (this.isVideoPage()) {
                this.startMoveVideoByTime(this.swipeVideoTime)
            } else {
                autoUtils.logText('没有检测到到视频详情，随机滑动十次左右')
                this.onlyMove(5)
            }
        } else {
            autoUtils.logText('没有找到视频图标，随机滑动十次左右')
            this.onlyMove(5)
        }
    },
    // 搜索页的视频养机
    yangjimodel5() {
        //设置当天搜索的类型
        autoUtils.logText('搜索页的视频养机')
        this.setSearchStrText()
        this.setTodaySearTextStr()
        autoUtils.logText(this.searTextStr)
        this.goSearchPage()
        this.commonSearchVideo()
    },
    // 搜索页的直播养机
    yangjimodel6() {
        autoUtils.logText('搜索页的直播养机')
        //设置当天搜索的类型 传奇，三国等
        this.setSearchStrText()
        //设置当天搜索的字符串，按照缓存的顺序
        this.setTodaySearTextStr()
        autoUtils.logText(this.searTextStr)
        // 只观看游戏类的直播
        if (this.searTextStr.indexOf('游') == -1 && this.searTextStr.indexOf('车') == -1) {
            this.goSearchPage()
            this.commonSearchVideo()
            return;
        }
        this.goSearchPage()
        if (this.getCvByText("搜索后的直播")) {
            this.clickCv('搜索后的直播')
            autoUtils.sleep(10, '等待10秒后点击第一个')
            hid.clickPercent(rand.randNumber(35.7, 75.3) / 100, rand.randNumber(36.13, 42.38) / 100)
            autoUtils.sleep(10, '等待10秒寻找直播')
            if (this.getCvByText('直播的礼物按钮')) {
                this.startMoveZhiBoByTime(this.swipeVideoTime)
            } else {
                autoUtils.logText('没有找到直播')
                if (autoUtils.getText('直播')) {
                    autoUtils.clickGetText('直播')
                    if (this.getCvByText('直播的礼物按钮')) {
                        this.startMoveZhiBoByTime(this.swipeVideoTime)
                    }
                } else {
                    autoUtils.logText('还是没找到直播')
                    this.onlyMove(5)
                }

            }

        } else {
            autoUtils.logText('没有找到直播图标，随机滑动十次左右')
            this.onlyMove(5)
        }
    },
    // 搜索页的综合养机
    yangjimodel7() {
        autoUtils.logText('搜索页的综合养机')
        this.goSearchPage()
        this.onlyMove(6)
    },
    backToMy(num) {
        num = num ? num : 1
        if (autoUtils.getText('首页') && autoUtils.getText('朋友')) {
            if (this.isIndexPageMy()) {
                autoUtils.logText('找到我的页面了')
            } else {
                autoUtils.logText('点击我的页面了')
                autoUtils.clickGetTextAll('我')
            }
        } else {
            num++
            autoUtils.sleep(3, '开始返回')
            autoUtils.autoBack()
            autoUtils.sleep(3, '开始返回后')

            if (autoUtils.getText('取消')) {
                autoUtils.sleep(2, '等待关闭取消')
                autoUtils.clickGetText('取消')
                autoUtils.sleep(3, '取消')
            }

            if (num < 9) {
                this.backToMy(num)
            } else {
                num = 1
                autoUtils.loginApp(AutoGlobData.appPhoneName)
                this.backToMy(num)
            }
        }
    },
    //处理我的页面的喜欢和收藏视频
    handleMyVideoMethod() {
        if (this.isVideoPage()) {
            let num = 5
            if (AutoGlobData.yangjiSpeed == 'quick') {
                num = 6
            } else {
                num = 12
            }
            num = this.setHuaDongCishu(num)
            autoUtils.logText("滑动的次数是", num)
            for (let i = 0; i < num; i++) {
                let time = this.getCurrentVideoTime()
                autoUtils.sleep(time + rand.randNumber(5, 10), '视频等待时间')
                this.performForwardSwipe()
            }


        }
    },
    yangji8And9Common(text) {
        this.backToMy(1)
        if (autoUtils.getText(text)) {
            autoUtils.clickGetText(text)
            // 点击左下角第一个视频
            hid.clickPercent(rand.randNumber(7.64, 25.69) / 100, rand.randNumber(67.38, 70.51) / 100)
            autoUtils.sleep(5, '进入视频页面')
            this.handleMyVideoMethod()
        }
    },
    // 我的页面喜欢养机
    yangjimodel8() {
        this.yangji8And9Common('喜欢')
    },
    // 我的页面收藏养机
    yangjimodel9() {
        this.yangji8And9Common('收藏')
    },
    // 只是等待随机时间后滑动
    onlyMove(num) {
        let num = this.setHuaDongCishu(num)
        autoUtils.logText('滑动的次数' + num)
        for (let i = 0; i < num; i++) {
            if (this.getCvByText('视频中的评论按钮')) {
                this.handelVideo()
            }
            else if (this.getCvByText('直播的礼物按钮')) {
                this.handelZhiBo()
            } else {
                let type = rand.randNumber(1, 3)
                autoUtils.sleep(this.pageSleepTimeByType(type), '等待后滑动')
            }
            this.startHuaDong()

        }
    },
    getCurrentAppRunDetail(name) {
        //保证拿到的数据都是最新的
        adUtils.loadAdList()
        //保证拿到的数据都是最新的
        let taskdetail = adUtils.getAdDetail(name)
        let time = adUtils.getAppAdTime(name)
        taskdetail.time = time
        AutoGlobData.taskdetail = taskdetail
        autoUtils.logText('当前运行的任务是' + name)
        AutoGlobData.phoneLookTotal = adUtils.getAllLookTotal()
        // autoUtils.logText(JSON.stringify(AutoGlobData.phoneLookTotal))
    },
    lookModel(task) {
        this.getCurrentAppRunDetail(task.appName)

        this.setLookModelValueData()
        let lookModelValue = this.lookModelValue
        // task.time 等待观看广告的时间 等于0就是可以看了 不等于就是需要等待的时间 
        let startTime = autoUtils.getCurrentTime()
        // 根据类型判断选择哪种等待方式  
        let text = ''
        let taskDetail = AutoGlobData.taskdetail
        let PrintObj = {
            appName:taskDetail.appName,
            todayLookNum:taskDetail.todayLookNum,
            todayClickNum:taskDetail.todayClickNum,
            todayDownLoad:taskDetail.todayDownLoad,
            lookAdTotal:taskDetail.lookAdTotal,
            downLoadTotal:taskDetail.downLoadTotal,
            customObj:taskDetail.customObj,
            ip:taskDetail.ip,
        }
        autoUtils.logText(JSON.stringify(PrintObj)+'这是taskDetail信息')
        if (AutoGlobData.runModel == 5) {
            this.backHomeWaitAd(task)
            this.swipeIndexAppListForAd(taskDetail, 2)
            this.lookAd(taskDetail.appName)
            if (rand.randNumber(1, 10) > 6) {
                autoUtils.logText('随机到了养机')
                this.yangji('quick')
            } else {
                autoUtils.logText('随机到了返回主页')
                autoUtils.autoHome()
            }
            return;
        }

        this.lookModelList.map(value => { if (value.type == lookModelValue) { text = value.text } })
        autoUtils.logText("观看的类型是-----" + text)
        autoUtils.logText(taskDetail.time / (1000 * 60) + taskDetail.appName + '需要等待的时间分钟')

        if (lookModelValue == 1) {
            this.lookModel1()
        } else if (lookModelValue == 2) {
            this.lookModel2()
        } else if (lookModelValue == 3) {
            this.lookModel3()
        } else if (lookModelValue == 4) {
            this.lookModel4()
        } else if (lookModelValue == 5) {
            this.lookModel5()
        } else if (lookModelValue == 6) {
            this.lookModel6()
            autoUtils.logText('不等待看广告')
        }
        autoUtils.sleep(35, '等待后观看广告')


        let appNumObj = {
            '1': 3,
            '2': 5,
            '3': 8,
            '4': AutoGlobData.appList.length
        }

        let chaPingNum = AutoGlobData.chaPingNum
        autoUtils.logText('插屏广告观看数量'+chaPingNum)
        let shoudLookChaPing = false
        if(chaPingNum>0) {
            let adDetail = adUtils.getAdDetailByPhoneId()
            //今日已看的数量，比如上一个看了0个，当前的就是0+1个
            let todayLook = adDetail.todayLookNum + 1
            autoUtils.logText('今日已看的数量'+todayLook)
            let todayClickNum = adDetail.todayClickNum
            //观看总数
            let taskLookTotal = appNumObj[AutoGlobData.miniAppNum]
            //每次观看插屏的间隔
            let jiangeNum = Math.ceil(taskLookTotal/chaPingNum)
            autoUtils.logText('每次观看插屏的间隔'+jiangeNum)
            autoUtils.logText('taskDetail.customObj.isChaPing'+taskDetail.customObj.isChaPing)
            // 当天没看过插屏广告并且满足间隔的条件
            if(todayLook%jiangeNum == 0&&!taskDetail.customObj.isChaPing&&AutoGlobData.appPhoneName=='抖音'&&taskDetail.appName.indexOf('数字') == -1) {
                shoudLookChaPing = true
            }

            if(shoudLookChaPing) {
                autoUtils.logText('观看插屏广告todayLook, todayClickNum'+todayLook, todayClickNum)
                //每三个广告随机点击一次
                let isClick = this.shouldClick(todayLook, todayClickNum)
                autoUtils.logText('每三个广告随机点击一次'+isClick)
                this.lookChaPing(taskDetail.appName,isClick)
            }

        }
        
        if (lookModelValue != 5) {
            this.lookAd(taskDetail.appName,shoudLookChaPing)
        }

        autoUtils.logText(10, '观看完成了')

    },
    lookChaPing (name,isClick) {
        
        adUtils.loadAdList()

        this.getTodayTimeInterval()
        let timeAddNum = this.todayTimeInterval.dataArr[0]

        autoUtils.logText("当前时间间隔，默认取第一个" + JSON.stringify(this.todayTimeInterval.dataArr))

        let time = adUtils.getAppAdTime(name, timeAddNum * 60 * 1000)

        if (time > 0) {
            autoUtils.logText('时间条件未满足，继续等待')
            if(time/1000>20*60) {
                autoUtils.sleep((time /2) / 1000, '时间条件大于20分钟等待一半时间先看插屏')
            }else{
                autoUtils.sleep(time / 1000, '时间条件未满足，继续等待')
            }
            
        } else {
            autoUtils.logText('时间条件满足，开始点击看广告')
        }

        this.toAppListPage(name)
        if(name.indexOf('洛雪壁纸')>-1) {
            for(let i=0;i<10;i++){
                if(autoUtils.getText('古风')) {
                    autoUtils.clickGetText('古风')
                    autoUtils.sleep(30)
                    this.checkChaPingAdSuccess(name,isClick)
                    break;
                }
                else{
                    this.performBackwardSwipe()
                    autoUtils.sleep(3)
                }
                    
            }
        }

        else if (name.indexOf('优创')>-1) {
            autoUtils.sleep(10)
            hid.clickPercent(0.4792, 0.2969)
            autoUtils.sleep(5)
            if(autoUtils.getText('电话区号')) {
                autoUtils.clickGetText('电话区号')
                autoUtils.sleep(30)
                this.checkChaPingAdSuccess(name,isClick)
            }
        }

        else if(name.indexOf('番茄壁纸')>-1) {
            for(let i=0;i<10;i++){
                if(autoUtils.getText('最新壁纸')) {
                    autoUtils.clickGetText('最新壁纸')
                    autoUtils.sleep(30)
                    this.checkChaPingAdSuccess(name,isClick)
                    break;
                }
                else{
                    this.performBackwardSwipe()
                    autoUtils.sleep(3)
                }
                    
            }
        }

        else if(name.indexOf('橙子壁纸')>-1) {
            for (let i = 0; i < 3; i++) {
                let time = this.detailWaitTime()
                autoUtils.sleep(time, '距离小的滑动')
                this.detailSwipe()
            }
            autoUtils.sleep(5)
            hid.clickPercent(0.7396, 0.3613)
            for(let i=0;i<10;i++){
                if(autoUtils.getText('自然风光')>-1) {
                    autoUtils.clickGetText('自然风光')
                    autoUtils.sleep(30)
                    this.checkChaPingAdSuccess(name,isClick)
                    break;
                }
                else{
                    this.performBackwardSwipe()
                    autoUtils.sleep(3)
                }
                    
            }
        }

        else if(name.indexOf('海豚壁纸')>-1) {
            autoUtils.sleep(5)
            if(autoUtils.getText('海豚壁纸大全')) {
                autoUtils.clickGetText('海豚壁纸大全')
                autoUtils.sleep(30)
                this.checkChaPingAdSuccess(name,isClick)
            }
        }

        else if(name.indexOf('柠檬壁纸')>-1) {
            autoUtils.sleep(5)
            this.performBackwardSwipe()
            if(autoUtils.getText('浪漫专辑')) {
                autoUtils.clickGetText('浪漫专辑')
                autoUtils.sleep(30)
                this.checkChaPingAdSuccess(name,isClick)
            }
        }

        else if(name.indexOf('橘子壁纸')>-1) {
            autoUtils.sleep(5)
            if(autoUtils.getText('精品壁纸')) {
                autoUtils.clickGetText('精品壁纸')
                autoUtils.sleep(30)
                this.checkChaPingAdSuccess(name,isClick)
            }
        }

        else if(name.indexOf('熊猫壁纸')>-1) {
            for(let i=0;i<10;i++){
                if(autoUtils.getText('自然风景')) {
                    autoUtils.clickGetText('自然风景')
                    autoUtils.sleep(30)
                    this.checkChaPingAdSuccess(name,isClick)
                    break;
                }
                else{
                    this.performBackwardSwipe()
                    autoUtils.sleep(3)
                }
                    
            }
        }

        else if(name.indexOf('云帆壁纸')>-1) {
            autoUtils.sleep(5)
            if(autoUtils.getText('云帆壁纸库')) {
                autoUtils.clickGetText('云帆壁纸库')
                autoUtils.sleep(30)
                this.checkChaPingAdSuccess(name,isClick)
            }
        }

        else if(name.indexOf('西瓜壁纸')>-1) {
            autoUtils.sleep(5)
            if(autoUtils.getText('热门标签')) {
                autoUtils.clickGetText('热门标签')
                autoUtils.sleep(30)
                this.checkChaPingAdSuccess(name,isClick)
            }
        }


        if(time/1000>20*60) {
            autoUtils.sleep((time /2) / 1000, '时间条件未满足，继续等待剩余的一半时间后看视频广告')
        }
        // 随机等待10-20分钟后再看视频广告
        autoUtils.sleep(rand.randNumber(10*60,20*60), '时间条件未满足，继续等待剩余的一半时间后看视频广告')


    },

    checkChapingIcon() {
        var detects = auto.findImages(['iVBORw0KGgoAAAANSUhEUgAAACkAAAAlCAYAAADfosCNAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAe6SURBVFhHlZaJcxRVEMbnb1aukGuz2SPnXtndJAQSCIKillckCBTiwRVusDwiiqKCEI4kSg52s7T9dU/PezPZUOXUfvXu7t/r1/Nmg+7db1HPnrdD7YrUu3d31N+9b7e0odS+PVzu4j6dA2Hcn+P62VYH2+nY01a9+/dGpalHSoxj3W7q4/HAASqk78SHNAhAwnnXXjffnGLMSZ2ow/ZASQEQSnWq0NfXsZcCBYKzXZTa44O4ehLC2jAAJZ0BDEIU2o0rANvq3PdG9Xd2iAQSuzZIGG0HBeNJqGQ7LgVM728HYNHSdl9XR1T6ynTtDyHZoB2L7twdSRLCYOHYlzlMOrFIoK7jqnT3fu3r5rUQr093d0h/Owmkhd8gox0yYDvnAINzgzTnsTlsHJGAnEP0M3hPpyjdy7A91sdRQx/Ps3FT4DuxnWMRwH3nKQ+gnXN14pTp7aRst8o5tHHXl+ntkrm+cj1dIoxlU90U6HHEIR0cjobbDCIKIwTHki+eMwOFE4PBPHMWB7E+B5JNoTSh7RT4x5CRKMWjYmPqVOWPt3eY1A4Avb3xNgs2cn09lE/3SgkFGnLdvQ9pYL5y4VwTnO4EF+9zgOZYlEqp/D5WFiVDAhQK5OhCR85h3OjIQJaG8xlpQzIv6ZCFsXxaoyCRMPEY2gP9KSlHB3NUHB6ggUwf5bkP/b5srilAzphzJ+0rsLGFi9/Q0qOH9PivB3T21OdiGDuFIhivDsiB/jgkHA3yuqFcP507PU+PHj6gJ4//optXL1NpZFDGbA7KoWxa6qYAMLk+A0M+uAidPTVPjVcb9HqrRUQtajY26eqli1QeHYqOA0bzfWpchT5T2MeOsGbhyiV6BXuvt8ReY32N5j/7VMahoawpHVOgQHpMCoi6RuDkp5/Q+ss1NvqajeJp0VbzFd3/9R7VygV3VOm0yEXEpM7HiiP0y71FavJa2DAB8tTcZzTIIJg3nEuH6hc4KwOD83NJjoudIXds92oYT0sisbL8nI4dOcwOMgIDud2HEWEnR2emafnFM2q1eH2LNyv71c3evr4guYl50EjelIlJILcdD9cRCTmCwSx9/NGH4TG5iEIb6y/p2/Nf8ouVjwCxewgbPH/2DL38d9WtCwGRNic//0TyES8kXkyRBwkbESRgsGs7HheNMHlRsg4dnOBkf8SOkE9chI7h8NrVK3z8pcgojvfqwmXNZ54nUcTDa58uPZYTAFRhKE8jgw4SbWwOL6yK+1iBS1YHaNGIiZ1Pjdfppx+/lxfJIFFuNZr02/1faLJWpXqlHOWfP6fVasrag1PjAiIaYjiGjNqhDLI4pKCBS1YH58Ju0ghB1dIoXx0LUZSih/NtdXmFVl4sx/plEwx85/Z13kBRomURK3IJWR/ys50EcjuMD9hPhVyGivksjfKRQKWRYZr7+CNqbOJt9R68GOFjtearBs2fnKNKYZiKIwzCEkAAeJBJML8v8KNkEBHMQE5kueFyRY8Fby5ybPujL9bzZ0t0/NhRcVTyNRqKX5w3KpwXGJAPYAIgdloaxo6tro6w04nqGP35x+9ypLGjDyEfPfxTchAOy6EqfKmXC1yHUH+TwnmBhDuESobf3721xRkvfPf4rNyVOz8K+s/qMp147zi/8QU58rhGXb04RGMlLSOF/YEP5wP5kFJH+BEJXvjV+bO0vob7T68jexqNBmszbCkktLm+QRe/vcAvXVGupwiMIaO2D2cySB8qguE8sCSPjoY1WavQjetX+G5cDwH0AezTp08kYu8cnaGlJ39zp36f7Wk2m3TzxjWaOjBB5dKICNEFJFQtbxciCwWAKoyqkrkQA5wY42/2IrW2GuzSoqSAi4s/0uGZKXXGVxTq937+gbZkrj7IWax98Pt9mpk+KJCILOZDtYqqHWwAqCJDQIDxwz3G4YbjE++9QysrL9iViwwe3H/f3b3NG6hGBiWvuMSmbt+6Jl+k+NOiVc7TDz84IRc//qiIQsh2CnDuJQaCYoDsDIsvfHWO1l7+I8b9B1+U01/MU71WFjgYs7JS4fVcjtfL9MWpuRio3gRbtLGxRlcuX+QboiyXfH1MQVGaHGQCzNeZ+Tl+Qf5lPr5e8MOR8Xf4xfOn9MH7x8U4NlIvs3HIcxCJ55w4Niv3afKa2mTQM6dPKiSryvNr1SKNs3wbAWDsmCCLCIS3GJ8/jSJ/r/mbje/y0dlpNqiGofFKQeQb9gWnWIO1DhT/htbpm6/P0fhYSQRAgGKNH9WghgQOoUwW5tnpKVr8/i6trjzj/4RLdPfOLTo0WXc5hCgCNDQGGAjOJCJwHtbrtZJc7LduXpf/l6uc43i5Zo8ckjkTPI45uhYlr61XpBRIg/Ilu2EI5Aze1pnpA7H8gdA2EF9whnzEuKwJnWMurrEjh6c5sofpwGRNchprJnk+5ulcFcagwIAEKqzjKKGkczgxp5BBGozJjAMIQkQEpk0JJedNjI9JaYpBRrAWbg8QxyFQXPchpc8DNcdJ574AYXrTPFMAp1EOAQCgBrGDcDSQGqlGxpxztHXcB9pJ/jyzpX1qZxskIDDQDtLgrK6Ga5ED5whj7uj+jwzYIKEADv3jQ9hRhyPU5RgThkwH6qpkP7420MSkytpT41URvlDtlLSjtqr0H7RnkaGxUQtMAAAAAElFTkSuQmCC'], 0.8, 5000, 2, [0,0,1,1]);
        return detects
    },
    checkChaPingAdSuccess(name,isClick) {
        var detects = this.checkChapingIcon()
        // if(detects!=null){
        // detects[0].hidClick();
        // }
        if(autoUtils.getText('广告') || detects!=null){
            autoUtils.logText('插屏广告加载成功')
            autoUtils.sleep(66,'插屏广告等待')
            if(isClick) {
                if(autoUtils.getText('直播')) {
                    autoUtils.clickGetText('直播')
                }else{
                    hid.click(rand.randNumber(screen.getScreenWidth()/2-100,screen.getScreenWidth()/2+100),rand.randNumber(screen.getScreenHeight()/2-100,screen.getScreenHeight()/2+100))
                }
                autoUtils.sleep(5,'插屏广告等待')
                var detects = this.checkChapingIcon()
                if(autoUtils.getText('广告') || detects!=null) {
                    autoUtils.logText('还在插屏广告界面停留')
                    autoUtils.sleep(30)
                }else{
                    this.handleAdDetail()
                }
            }

            var detects1 = this.checkChapingIcon()
            if(autoUtils.getText('广告') || detects1!=null) {
                autoUtils.logText('返回了插屏广告界面')
            }else{
                autoUtils.autoBack()
            }

            let isDownLoad = false
            if (AutoGlobData.todayIsDownLoadGame) {
                if (AutoGlobData.phoneLookTotal.todayDownLoadTotal == 0) {
                    if (rand.randNumber(1, 10) > 5) {
                        autoUtils.logText('随机到了主动点击')

                        if (autoUtils.getText("下载")) {
                            autoUtils.logText('可以点击下载了')
                            autoUtils.sleep(3, '开始发送邮件')
                            // 钉钉设置了只有发送包括通知两个字才能发送成功
                            let str = `广告转化通知（游戏下载）:${AutoGlobData.phoneIdToNameList[device.getDeviceIntID()]}-小程序:${name} -- 观看总数:${AutoGlobData.phoneLookTotal.total} -- ${autoUtils.getTodayTime(time.nowStamp())} ${autoUtils.getTimeStr()} --ID:${device.getDeviceIntID()}`
                            ws.send(str)

                            autoUtils.clickGetText('下载')
                            isDownLoad = true
                            autoUtils.logText('等待下载完成')
                            autoUtils.sleep(rand.randNumber(30, 60))
                        }

                    }
                } else {
                    autoUtils.logText('今日已经随机下载了一款游戏了')
                }
            }

            // 保存图片
            autoUtils.sleep(2, '开始保存图片')
            autoUtils.setSuccessPic(name)

            let longTime = rand.randNumber(5, 8)

            autoUtils.sleep(longTime, '开始返回小程序界面')

            if(autoUtils.getText('广告') || detects1!=null){
              autoUtils.autoBack()
            }

            autoUtils.sleep(5, '点击关闭图标后')

            autoUtils.sleep(5, '开始修改广告值')
            adUtils.setSuccessAppAd(name, isClick, isDownLoad,true)

            autoUtils.sleep(5, '返回后等待5S')

            

        }else{
            autoUtils.logText('插屏广告加载失败了')
        }

        this.toAppListPage(name)

    },
    detailWaitTime() {
        let shortTime = []
        for (let i = 3; i < 10; i++) {
            shortTime.push(i)
        }
        let shortTimeValue = autoUtils.shuffle(shortTime)[0]
        return shortTimeValue
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
    detailSwipeBack() {
        let x = rand.randNumber(200, screen.getScreenWidth() - 200)
        let y = rand.randNumber(500, 800)
        let y1 = rand.randNumber(screen.getScreenHeight() - 500, screen.getScreenHeight() - 300)
        let arr = [1, 2]
        let type = autoUtils.shuffle(arr)[0]
        if (type == 1) {
            hid.swipEx(x, y, x, y1, 0, rand.randNumber(500, 1500), 0);
        }
        else {
            hid.swipAI(x, y, x, y1)
        }

    },
    backHomeWaitAd(task) {
        if (task.time == 0) {
            autoUtils.sleep(10, '等待后观看广告')
        } else {
            // 总时间+时间随机在2分钟左右
            let newTime = task.time + rand.randNumber(-2 * 60 * 1000, 2 * 60 * 1000)
            if (newTime > 0) {
                autoUtils.logText('返回主页等待看广告')
                autoUtils.autoHome()
                autoUtils.sleep(task.time / 1000, '等待后观看广告')
                autoUtils.loginApp(AutoGlobData.appPhoneName)
                this.fromIndexMyToAppList(1, task.appName)
            } else {
                autoUtils.sleep(60, '等待后观看广告')
            }
        }
    },
    toAppListPage(name) {
        // 洛雪壁纸  负责找到要看的小程序
        this.fromIndexMyToAppList(1, name)
        // 点击找到的小程序
        this.findMiniAppNameAndClick(name, 1)
    },
    swipeIndexAppListForAd(task, swipeNum) {
        this.toAppListPage(task.appName)
        this.onlyMove(swipeNum)

        let arr = [1, 2, 3]
        let num = autoUtils.shuffle(arr)[0]
        for (let i = 0; i < num; i++) {
            let time = this.detailWaitTime()
            autoUtils.sleep(time, '距离小的滑动')
            this.detailSwipe()
        }
    },
    // { type: 1, text: '返回手机主页等待后看广告' },
    // { type: 2, text: '小程序首页停留几分钟+返回手机主页等待+看广告' },
    // { type: 3, text: '小程序页停留几分钟+返回抖音养鸡' },
    // { type: 4, text: '先抖音养鸡在在小程序页停留几分钟看广告' },
    // { type: 5, text: '只是停留不看广告' }
    lookModel1() {
        this.yangji('quick')
        this.yangji('quick')
        let task = AutoGlobData.taskdetail
        this.backHomeWaitAd(task)
        this.swipeIndexAppListForAd(task, 2)

        //小程序内部看广告的逻辑
        // this.lookAd(task.appName)
    },
    lookModel2() {
        let task = AutoGlobData.taskdetail
        this.swipeIndexAppListForAd(task, 2)
        this.yangji('quick')
        this.yangji('quick')
        this.backHomeWaitAd(task)
        this.swipeIndexAppListForAd(task, 2)
    },
    lookModel3() {
        let task = AutoGlobData.taskdetail
        this.yangji('quick')
        this.swipeIndexAppListForAd(task, 2)
        this.yangji('quick')
        this.swipeIndexAppListForAd(task, 2)
    },
    lookModel4() {
        let task = AutoGlobData.taskdetail
        this.yangji('quick')
        this.yangji('quick')
        this.swipeIndexAppListForAd(task, 2)

    },
    lookModel5() {
        let task = AutoGlobData.taskdetail
        this.swipeIndexAppListForAd(task, 2)
        for (let i = 0; i < 6; i++) {
            let time = this.detailWaitTime()
            autoUtils.sleep(time, '距离小的滑动')
            this.detailSwipe()
        }
        // this.yangji('quick')
        // this.yangji('quick')
        // this.swipeIndexAppListForAd(task, 4)
    },
    lookModel6() {
        let task = AutoGlobData.taskdetail
        this.swipeIndexAppListForAd(task, 2)
        for (let i = 0; i < 3; i++) {
            let time = this.detailWaitTime()
            autoUtils.sleep(time, '距离小的滑动')
            this.detailSwipe()
        }
        // this.yangji('quick')
        // this.yangji('quick')
        // this.swipeIndexAppListForAd(task, 4)
    },
    toPageTop(num, name) {
        if (num < 12) {
            num++
            // autoUtils.sleep(5,'返回')
            autoUtils.sleep(this.detailWaitTime(), '返回顶部')
            hid.swipAI(screen.getScreenWidth() / 2, 300, screen.getScreenWidth() / 2, screen.getScreenHeight())
            this.toPageTop(num, name)
        }

    },
    randomTime(text) {
        let type = rand.randNumber(1, 3)
        // autoUtils.sleep(5, '广告等待')
        autoUtils.sleep(this.pageSleepTimeByType(type), text ? text : '广告等待')
    },
    fromListPageToDetail(name) {
        if (name.indexOf('优创') > -1) {
            this.randomTime('优创等待')
            hid.clickPercent(0.4792, 0.2969)
        }
        else if (name.indexOf('海豚') > -1) {

            if (autoUtils.getText("文字")) {
                autoUtils.clickGetText("文字")
            }
            else if (autoUtils.getText("风格")) {
                autoUtils.clickGetText("风格")
            }
            else if (autoUtils.getText("建筑")) {
                autoUtils.clickGetText("建筑")
            } else if (autoUtils.getText("节日")) {
                autoUtils.clickGetText("节日")
            }
            this.randomTime('广告等待')
            hid.clickPercent(0.5903, 0.5137)
        }
        else if (name.indexOf('熊猫') > -1) {
            this.randomTime('广告等待')
            hid.clickPercent(0.5347, 0.4434)
        }
        else if (name.indexOf('西瓜') > -1) {
            this.randomTime('广告等待')
            if (autoUtils.getText("艺术")) {
                autoUtils.clickGetText("艺术")
            }
        }
        else if (name.indexOf('橙子') > -1) {
            this.randomTime('广告等待')
            hid.clickPercent(0.7396, 0.3613)
        }
        else if (name.indexOf('云帆') > -1) {
            this.randomTime('云帆等待')
        }
        else if (name.indexOf('洛雪') > -1) {
            this.onlyMove(2)
            hid.clickPercent(0.3889, 0.4609)
        }
        else if (name.indexOf('番茄') > -1) {
            douyinAd.performBackwardSwipe()
            this.randomTime('番茄等待')
            hid.clickPercent(0.4965, 0.2285)
            this.randomTime('番茄等待')
            hid.clickPercent(0.4722, 0.5703)
        }
        else if (name.indexOf('橘子') > -1) {
            this.randomTime('橘子等待')
        }
        else if (name.indexOf('柠檬') > -1) {
            this.randomTime('柠檬等待')
            hid.clickPercent(rand.randNumber(34.5, 84.5) / 100, rand.randNumber(47.5, 49.5) / 100)
        }
        else if (name.indexOf('数字') > -1) {
            autoUtils.sleep(10, '等待')
            if (autoUtils.getText('允许')) {
                autoUtils.clickGetText('允许')
            }
            this.randomTime('数字大挑战等待')
        }
        else {
            hid.clickPercent(0.3889, 0.4609)
        }
    },
    lookAd(name,lookChaPing) {
        autoUtils.stopRunByTime()
        autoUtils.logText('开始准备观看广告')
        autoUtils.sleep(6, '开始进入详情')
        this.fromListPageToDetail(name)
        this.randomTime('广告等待')

        //如果没有主动介入的操作

        // if (!this.isLookAdByEmailMessage) {
        //     autoUtils.logText('此次不用主动转化')
        //     this.clickAdDownloadBtn(name, 1)
        // }

        this.clickAdDownloadBtn(name, 1,lookChaPing)


    },
    sleepTimeVideoShort() {
        return rand.randNumber(5, 20)
    },
    setAdSuccess(name) {
        autoUtils.logText(name)
        //  保存图片
        autoUtils.sleep(6, '开始保存图片')
        autoUtils.setSuccessPic(name)
        autoUtils.sleep(6, '开始修改广告值')
        adUtils.setSuccessAppAd(name, true, true)
        douyinAd.isLookAdByEmailMessage = true
    },
    isLookAdByEmailMessage: false,
    isAppDetail() {
        return !autoUtils.getText("最近使用") && !autoUtils.getText("广告") && (autoUtils.getText("收藏") || autoUtils.getText("下载") || autoUtils.getText("下載") || autoUtils.getText("随机一张") || autoUtils.getText("查看全部") || autoUtils.getText("保存") || autoUtils.getText("立即") || autoUtils.getText("观看"))
    },
    // 获取今天的数据 点击喜欢、样机等数据
    getTodayTimeInterval() {
        let todayTimeInterval = this.getConfig('todayTimeInterval')
        if (todayTimeInterval == '' || !this.isSameDay(todayTimeInterval.time)) {
            this.setConfig('todayTimeInterval', AutoGlobData.todayTimeInterval)
            this.todayTimeInterval = AutoGlobData.todayTimeInterval
        } else {
            autoUtils.logText('今日启动过了,取缓存的timeInterval值')
            this.todayTimeInterval = todayTimeInterval
        }
    },
    clickDetailAdText(name) {
        if (name.indexOf('橙子') > -1) {
            hid.clickPercent(rand.randNumber(576, 782) / 1000, rand.randNumber(918, 921) / 1000)
            autoUtils.sleep(5, '点击下载后')
        }
        //洛雪壁纸 海豚
        else if (autoUtils.getText("收藏", true)) {
            autoUtils.clickGetTextAll("收藏")
        }
        //橙子壁纸 番茄
        else if (autoUtils.getText("下载")) {
            autoUtils.clickGetText("下载")
        }
        //西瓜壁纸
        else if (autoUtils.getText("保存")) {
            autoUtils.clickGetText("保存")
        }
        //熊猫壁纸
        else if (autoUtils.getText("下載")) {
            autoUtils.clickGetText("下載")
        }
        //云帆壁纸
        else if (autoUtils.getText("随机一张")) {
            autoUtils.clickGetText("随机一张")
        }
        //数字大挑战
        else if (autoUtils.getText("立即观看")) {
            autoUtils.clickGetText("立即观看")
        }
        //优创汇
        else if (autoUtils.getText("查看全部")) {
            autoUtils.clickGetText("查看全部")
        }
        else if (autoUtils.getText("立即")) {
            autoUtils.clickGetText("立即")
        }
        else if (autoUtils.getText("观看")) {
            autoUtils.clickGetText("观看")
        }

        // let time = this.sleepTimeVideoShort()
        autoUtils.sleep(rand.randNumber(10, 20), '等待后开始点击立即观看按钮')

        if (autoUtils.getText("立即")) {
            autoUtils.sleep(rand.randNumber(5, 10), '立即观看')
            autoUtils.clickGetText("立即")
            autoUtils.sleep(10, '开始点击立即观看后')
            this.checkAdSuccess(1, name)
        }
        // 橙子壁纸是点击确定
        else if (autoUtils.getText("确定")) {
            autoUtils.sleep(rand.randNumber(5, 10), '确定')
            autoUtils.clickGetText("确定")
            autoUtils.sleep(10, '开始点击立即观看后')
            this.checkAdSuccess(1, name)
        }
        else if (autoUtils.getText("观看")) {
            autoUtils.sleep(rand.randNumber(5, 10), '观看')
            autoUtils.clickGetText("观看")
            autoUtils.sleep(10, '开始点击立即观看后')
            this.checkAdSuccess(1, name)
        }
        else {
            if (name.indexOf('数字') > -1) {
                autoUtils.logText('数字大挑战直接观看')
                this.checkAdSuccess(1, name)
            } else {
                autoUtils.logText('没有检测到立即观看')
                num = 1
                this.swipeIndexAppListForAd({ appName: name }, 2)
                this.lookAd(name)
            }

        }
    },
    shortTimeMove() {
        let arr = [1, 2, 3]
        let num = autoUtils.shuffle(arr)[0]

        for (let i = 0; i < num; i++) {
            let time = this.detailWaitTime()
            autoUtils.sleep(time, '短时间滑动几次')
            hid.swipAI(screen.getScreenWidth() / 2, screen.getScreenHeight() - 300, screen.getScreenWidth() / 2, 500)
        }
    },
    clickAdDownloadBtn(name, num, isWait) {
        num = num ? num : 1
        adUtils.loadAdList()

        this.getTodayTimeInterval()
        let timeAddNum = this.todayTimeInterval.dataArr[0]

        autoUtils.logText("当前时间间隔，默认取第一个" + JSON.stringify(this.todayTimeInterval.dataArr))

        let time = adUtils.getAppAdTime(name, timeAddNum * 60 * 1000)

        if (time > 0&&!isWait) {
            autoUtils.logText('时间条件未满足，继续等待')
            // time = time + timeAddNum
            autoUtils.sleep(time / 1000, '时间条件未满足，继续等待')
        } else {
            if(isWait) {
              autoUtils.logText('刚看完插屏或者第二次进入不等待开始看广告')  
            }
            autoUtils.logText('时间条件满足，开始点击看广告')
        }

        if (!this.isAppDetail()) {
            autoUtils.logText('进入详情失败')
            this.toAppListPage(name)
            this.fromListPageToDetail(name)
        }

        this.randomTime('开始点击收藏等')

        if (this.isAppDetail()) {
            this.clickDetailAdText(name)
        } else {
            autoUtils.logText('进入详情失败')
            this.toAppListPage(name)
            this.shortTimeMove()
            this.fromListPageToDetail(name)
            autoUtils.sleep(6, '进入详情后')
            if (this.isAppDetail()) {
                autoUtils.logText('进入详情成功')
                this.clickAdDownloadBtn(name,1,'noWait')
            } else {
                this.lookAd(name)
                autoUtils.logText('点击后进入详情失败，开始重新执行lookAd方法')
            }
        }
    },
    isAdPage() {
        return this.getCvByText('广告界面的广告图标') || autoUtils.getText('广告') || autoUtils.getText('反馈') || autoUtils.getText('可领奖励') || autoUtils.getText('秒后') || autoUtils.getText('领取')
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
    checkAdSuccess(num, name) {
        if (!num) {
            num = 1
        }
        AutoGlobData.isClick = false

        autoUtils.sleep(2, '查找反馈')
        if (this.isAdPage()) {

        } else {
            autoUtils.sleep(3, '查找反馈')
        }
        // 以后这个要拓展更加智能 可以根据当天情况点击  或者自动下载安装 后台记录数据 
        if (this.isAdPage()) {

            autoUtils.logText('广告加载成功，开始等待广告结束')

            if (autoUtils.getText('进入直播')) {
                autoUtils.sleep(30, '增加观看时长，自动进入直播')
            }
            // let zhudongclick = false
            for (let i = 0; i < 150; i++) {
                autoUtils.sleep(2, '开始检测广告是否播放完成或者跳转了详情页')
                if (this.isAdPage()) {
                    if (autoUtils.getText('可领奖励') || autoUtils.getText('秒后') || this.getCvByText('广告的可领奖励')) {
                        autoUtils.logText('广告观看中....')
                    } else {
                        if (autoUtils.getText('领取成功') || this.getCvByText('广告的领取成功')) {
                            autoUtils.logText('领取成功了')

                            let adDetail = adUtils.getAdDetailByPhoneId()

                            let todayLook = adDetail.todayLookNum + 1
                            let todayClickNum = adDetail.todayClickNum

                            if (autoUtils.getText('进入直播')) {
                                let isClick = this.shouldClick(todayLook, todayClickNum)
                                if (isClick) {
                                    autoUtils.sleep(5, '点击进入直播')
                                    autoUtils.clickGetText('进入直播')
                                    autoUtils.sleep(5, '进入广告直播详情了')
                                    this.handleAdDetail()
                                }
                            } else {
                                //每三个广告随机点击一次
                                let isClick = this.shouldClick(todayLook, todayClickNum)
                                //无论今日点击了几次都在第四个或者第9个广告的时候主动点击
                                if (isClick) {
                                    autoUtils.logText('开始主动点击')
                                    hid.click(rand.randNumber(screen.getScreenWidth() / 2 - 10, screen.getScreenWidth() / 2 + 10), rand.randNumber(screen.getScreenHeight() / 2 - 10, screen.getScreenHeight() / 2 + 10))
                                    autoUtils.sleep(5, '开始检测广告是否播放完成或者跳转了详情页')
                                    if (this.isAdPage()) {
                                        autoUtils.sleep(2, '没有跳转成功，还在广告页面停留')
                                    } else {
                                        this.handleAdDetail()
                                        if (this.getCvByText('广告的领取成功') || autoUtils.getText('领取成功')) {
                                            autoUtils.logText('返回广告界面成功了')
                                        } else {
                                            autoUtils.autoBack()
                                        }
                                    }
                                }
                            }
                            let isDownLoad = false
                            if (AutoGlobData.todayIsDownLoadGame) {
                                if (AutoGlobData.phoneLookTotal.todayDownLoadTotal == 0) {
                                    if (rand.randNumber(1, 10) > 5) {
                                        autoUtils.logText('随机到了主动点击')

                                        if (autoUtils.getText("下载")) {
                                            autoUtils.logText('可以点击下载了')
                                            autoUtils.sleep(3, '开始发送邮件')
                                            // 钉钉设置了只有发送包括通知两个字才能发送成功
                                            let str = `广告转化通知（游戏下载）:${AutoGlobData.phoneIdToNameList[device.getDeviceIntID()]}-小程序:${name} -- 观看总数:${AutoGlobData.phoneLookTotal.total} -- ${autoUtils.getTodayTime(time.nowStamp())} ${autoUtils.getTimeStr()} --ID:${device.getDeviceIntID()}`
                                            ws.send(str)

                                            autoUtils.clickGetText('下载')
                                            isDownLoad = true
                                            autoUtils.logText('等待下载完成')
                                            autoUtils.sleep(rand.randNumber(30, 60))
                                        }

                                    }
                                } else {
                                    autoUtils.logText('今日已经随机下载了一款游戏了')
                                }
                            } else {
                                // let needdownload = parseInt(AutoGlobData.phoneLookTotal.total / 50)
                                // let downloadtotal = AutoGlobData.phoneLookTotal.downLoadTotal

                                // autoUtils.logText('自动下载游戏'+needdownload+'-'+downloadtotal)

                                // if (downloadtotal < needdownload) {
                                //     if (autoUtils.getText("下载")) {
                                //         autoUtils.logText('可以点击下载了')
                                //         autoUtils.sleep(3, '开始发送邮件')
                                //         // 钉钉设置了只有发送包括通知两个字才能发送成功
                                //         let str = `广告转化通知（游戏下载）:${AutoGlobData.phoneIdToNameList[device.getDeviceIntID()]}-小程序:${name} -- 观看总数:${AutoGlobData.phoneLookTotal.total} -- ${autoUtils.getTodayTime(time.nowStamp())} ${autoUtils.getTimeStr()} --ID:${device.getDeviceIntID()}`
                                //         ws.send(str)
                                //         autoUtils.clickGetText('下载')
                                //         isDownLoad = true
                                //         autoUtils.logText('等待下载完成')
                                //         autoUtils.sleep(rand.randNumber(30,60))
                                //     }
                                // }

                                // if(autoUtils.getText("下载")){
                                //     let str = `游戏下载通知:${AutoGlobData.phoneIdToNameList[device.getDeviceIntID()]}-小程序:${name} -- 观看总数:${AutoGlobData.phoneLookTotal.total} -- ${autoUtils.getTodayTime(time.nowStamp())} ${autoUtils.getTimeStr()} --ID:${device.getDeviceIntID()}`
                                //     ws.send(str)
                                // }
                            }

                            // 保存图片
                            autoUtils.sleep(2, '开始保存图片')
                            autoUtils.setSuccessPic(name)

                            let longTime = rand.randNumber(5, 8)

                            autoUtils.sleep(longTime, '点击领取成功')

                            autoUtils.autoBack()

                            autoUtils.sleep(5, '点击领取成功后')

                            if (this.getCvByText('广告的领取成功') || autoUtils.getText('领取成功')) {
                                autoUtils.logText('还在领取成功页面，继续返回')
                                autoUtils.sleep(3, '点击领取成功后')
                                autoUtils.autoBack()
                                autoUtils.sleep(3, '点击领取成功后')
                            }


                            autoUtils.sleep(5, '开始修改广告值')
                            adUtils.setSuccessAppAd(name, AutoGlobData.isClick, isDownLoad)


                            autoUtils.sleep(5, '返回后等待5S')

                            if (autoUtils.getText("同意")) {
                                autoUtils.clickGetText("同意")
                                autoUtils.sleep(5, '点击同意后等待5S')
                            }

                            for (let i = 0; i < 5; i++) {
                                if (autoUtils.getText("收藏") || autoUtils.getText("下载") || autoUtils.getText("下載") || autoUtils.getText("随机一张") || autoUtils.getText("查看全部") || autoUtils.getText("保存") || autoUtils.getText("立即") || autoUtils.getText("观看")) {
                                    this.randomTime('开始等待返回')
                                    autoUtils.logText('返回成功')
                                    break;
                                } else {
                                    autoUtils.logText('返回失败,重新返回')
                                    autoUtils.sleep(5)
                                    autoUtils.autoBack()
                                }
                            }

                            this.todayTimeInterval.dataArr.shift()
                            if (this.todayTimeInterval.dataArr.length > 0) {
                                this.setConfig('todayTimeInterval', this.todayTimeInterval)
                            } else {
                                this.setConfig('todayTimeInterval', AutoGlobData.todayTimeInterval)
                            }

                            break;
                        } else {
                            autoUtils.sleep(5, '没有检测到领取成功')
                            if (autoUtils.getText('继续观') || autoUtils.getText('继续')) {
                                autoUtils.sleep(3, '点击继续观看')
                                autoUtils.clickGetText('继续')
                                autoUtils.sleep(30, '点击继续观看')
                            } else {
                                autoUtils.autoBack()
                                num++
                                this.checkAdSuccess(num, name)
                                break;
                            }
                        }
                    }
                } else {
                    this.handleAdDetail()
                }
            }

        } else {
            num++
            if (num < 3) {
                autoUtils.sleep(10, '观看异常等待30秒后检测')
                if (this.isAdPage()) {
                } else {
                    autoUtils.autoBack()
                }
                this.checkAdSuccess(num, name)

            } else {
                autoUtils.logText('观看失败了')
            }
        }
    },
    handleAdDetail() {
        autoUtils.logText('跳转了详情页面')
        AutoGlobData.isClick = true

        if (this.getCvByText('直播的礼物按钮') || autoUtils.getText('人气') || autoUtils.getText('关注') || autoUtils.getText('直播')) {
            autoUtils.logText('进入直播了增加停留时长')
            this.handleZhiboDetail(rand.randNumber(60, 100))
            time = time ? time : rand.randNumber(60, 100)
            autoUtils.sleep(time, '直播等待')
        } else {
            let arr = [1, 2, 3]
            let num = autoUtils.shuffle(arr)[0]

            let num1 = autoUtils.shuffle(arr)[0]

            for (let i = 0; i < num1; i++) {
                let time = this.detailWaitTime()
                autoUtils.sleep(time + rand.randNumber(5, 15), '广告详情等待')
                hid.swipAI(screen.getScreenWidth() / 2, 500, screen.getScreenWidth() / 2, screen.getScreenHeight() - 300)
            }

            for (let i = 0; i < num; i++) {
                let time = this.detailWaitTime()
                autoUtils.sleep(time + rand.randNumber(5, 15), '广告详情等待滑动')
                this.detailSwipe()
            }
            let total = num + num1
            for (let i = 0; i < total; i++) {
                let time = this.detailWaitTime()
                autoUtils.sleep(time + rand.randNumber(5, 15), '广告详情等待滑动')
                this.detailSwipeBack()
            }
        }

        // let time = this.detailWaitTime()
        autoUtils.sleep(rand.randNumber(10, 15), '广告详情开始返回')
        autoUtils.autoBack()
    },
}
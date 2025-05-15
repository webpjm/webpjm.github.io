/*手机app默认启动文件*/
var win = window.loadUI("主界面.ui");
win.show();
logWindow.show();

//用来控制主界面是否加载远程UI
let isLocal = false
// 定义全局对象接收UI参数
let globData = {
    runApp: "1",   //  运行APP 1 抖音 2 抖音火山版 3 抖音极速版 4  其他任务(微信、APP、快手...)
    runModel: '1', //  运行模式 1 养机+看广告 2 精养机+不看广告 3 看广告+不养机 
    miniAppNum: "1", // 观看小程序数量 1 固定数量 2 随机6个 3 随机8个 4 随机全部
    lookRangeNum: [1, 2], // 最少最多观看数量 
    phoneIp: '',  //  ip地址
    remoteUiValue: [], // 远程自定义的地址
    otherValue: []
}
// 设置接收全局对象的回调
function setValueModelPhone(val) {
    globData.remoteUiValue = val
    printl(val, 'remoteUiValue的数值')
}
// 设置接收远程UI值的回调
function setPhoneGlobaData(data) {
    globData = data
    printl(data, 'UI设置的值')
}

// 设置今日数据的UI
function getTodayTime(currentTime) {
    // if (autoUtils.getTodayTime(modedata.time) == autoUtils.getTodayTime(time.nowStamp())) {}
    // 提取年、月、日信息
    currentTime = Number(currentTime)
    const year = new Date(currentTime).getFullYear(); // 年份
    const month = new Date(currentTime).getMonth() + 1; // 月份（注意月份从0开始计数）
    const day = new Date(currentTime).getDate(); // 日期
    return year + '-' + month + '-' + day
}
// 今日数据详情
let mainTodayDataInfo = config.getConfig('/sdcard/config.ini', 'todayDataInfo', '')
if (mainTodayDataInfo != '') {
    mainTodayDataInfo = JSON.parse(mainTodayDataInfo)
    if (getTodayTime(mainTodayDataInfo.time) == getTodayTime(time.nowStamp())) {
        uiText.findByID(控件ID = "yangjiNum").setTitle(`🟢 今日养机：  ${mainTodayDataInfo.yangjiNum}`)
        uiText.findByID(控件ID = "todayLikeNum").setTitle(`🟡 今日点赞：  ${mainTodayDataInfo.todayLikeNum}`)
        uiText.findByID(控件ID = "todayCollect").setTitle(`🔵 今日收藏：  ${mainTodayDataInfo.todayCollect}`)
        uiText.findByID(控件ID = "todayFocus").setTitle(`🔴 今日关注：  ${mainTodayDataInfo.todayFocus}`)
        uiText.findByID(控件ID = "giftNum").setTitle(`🟢 今日送礼：  ${mainTodayDataInfo.giftNum}`)
    }
}

var mainWeb = uiWeb.findByID(控件ID = "web");
//是否加载远程UI
if (!isLocal) {
    print.log('开始请求远程接口的数据UI')
    mainWeb.loadUrl('https://webpjm.github.io/public/DyProject/资源/ui.html')

}

function getUrlData(url) {
    let strArr = ''
    var http = new okHttp()
    var t = http.get(url)
    if (t != 'OK') {
        strArr = t
    } else {
        print.log(`接口加载失败,开始重新请求IP数据`)
        sleep.millisecond(毫秒 = 10);
        getUrlData(url)
    }
    return strArr
}
// 设置手机的IP数据
let mainResData = JSON.parse(getUrlData('https://qifu-api.baidubce.com/ip/local/geo/v1/district'))
var mainPhoneIp = mainResData.ip + '--' + mainResData.data.owner + '/' + mainResData.data.city
let mainIp = JSON.stringify({phoneIp:mainPhoneIp})
// 设置手机的型号数据
var mainPhoneData = JSON.stringify({ phoneId: device.getDeviceIntID(), phoneModel: device.getModel() })

// 有时执行一次不出数据，可能是web还没加载完
sleep.millisecond(毫秒 = 500);
mainWeb.runWebJs(`setPhoneData(${mainPhoneData},${mainIp})`)
sleep.millisecond(毫秒 = 1500);
mainWeb.runWebJs(`setPhoneData(${mainPhoneData},${mainIp})`)


runTime.Import('initData.js')
runTime.Import('tool.js')
// runTime.Import('socket.js')
runTime.Import('douyinAd.js')
runTime.Import('adTool.js')
runTime.Import('快手/ksAdTool.js')
// runTime.Import('main.js')

let kuaishouAd = {
   lookModelList: [
    {type:1,text:'每个小程序看一个广告后养机'},
    {type:2,text:'每个小程序看两个广告后养机'},
    {type:3,text:'每个小程序看3个广告后养机'},
    {type:4,text:'每个小程序看4个广告后养机'},
   ],
   init() {
        autoUtils.loginApp(ksAdUtils.appPhoneName)  // 执行APP登录操作
   }
}
function setPhoneGlobaData(data) {
    printl(data, 'UI设置的值')
}
ksAdUtils.init()
// kuaishouAd.init()
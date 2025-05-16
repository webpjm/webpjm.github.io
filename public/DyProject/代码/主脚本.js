
var win = window.loadUI("主界面.ui");
win.close();
logWindow.close()

if (!isLocal) {
    print.log('开始请求远程接口的数据')
    runTime.Import('loadCode.js')
}else{
    print.log('加载本地数据')
    runTime.Import('initData.js')
    runTime.Import('tool.js')
    runTime.Import('socket.js')
    runTime.Import('douyinAd.js')
    runTime.Import('adTool.js')
    runTime.Import('main.js')
}


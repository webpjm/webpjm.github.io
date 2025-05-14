

logWindow.show()
logWindow.setPosition(50,screen.getScreenHeight()/2-600)
logWindow.setWidth(1000)
logWindow.setHeight(300)
runTime.Import('initData.js')
runTime.Import('tool.js')
runTime.Import('socket.js')
runTime.Import('douyinAd.js')
runTime.Import('adTool.js')

var appName = uiRadioButton.findByID(控件ID="appname").getRadio()
var isClick = uiSwitch.findByID(控件ID="isClick").getOn();
printl(appName,isClick)
// 保存图片
autoUtils.sleep(2, '开始保存图片')
autoUtils.setSuccessPic(appName)
autoUtils.sleep(5, '开始修改广告值')
adUtils.setSuccessAppAd(appName, isClick, false)
autoUtils.sleep(5,'广告添加成功，关闭弹窗')
logWindow.close()
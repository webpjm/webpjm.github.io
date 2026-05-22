print.log(project.getPluginsPath())
print.log(project.getResourcesPath())
print.log(project.getCodePath())
var PluginsPath = project.getPluginsPath()
var CodePath = project.getCodePath()

new okHttp().downloadFile('http://daming360.duckdns.org:8889/initRemoteBase64.js', `${CodePath}/start.js`)
sleep.millisecond(5000)

new okHttp().downloadFile('http://daming360.duckdns.org:8889/webrtc.apk', `${PluginsPath}/webrtc.apk`)
sleep.millisecond(5000)
print.log("加载成功,重启应用既可以使用最新代码")

logWindow.show()

// try {
//    rhino.loadDex('webrtc.apk');
//    // // 导入插件类
//    rhino.loadClass("com.autoapp.screenstream.AutoAppScreenStreamPlugin");
//    importClass(com.autoapp.screenstream.AutoAppScreenStreamPlugin);

//    rhino.loadClass("com.autoapp.screenstream.ToolPlugin");
//    importClass(com.autoapp.screenstream.ToolPlugin);

//    // 获取插件实例
//    var Axios = ToolPlugin.getInstance(context);
//    var AutoAppPlugin = AutoAppScreenStreamPlugin.getInstance(context);
//    console.log(JSON.stringify(Axios))
// } catch (e) {
//    console.log(e)
// }
print.log(project.getPluginsPath())
print.log(project.getResourcesPath())
print.log(project.getCodePath())
var PluginsPath = project.getPluginsPath()

new okHttp().downloadFile('http://daming360.duckdns.org:8889/webrtcTest.apk', `${PluginsPath}/webrtc.apk`)
sleep.millisecond(5000)
print.log("加载成功")

try {
   rhino.loadDex('webrtcTest.apk');
   // // 导入插件类
   rhino.loadClass("com.autoapp.screenstream.AutoAppScreenStreamPlugin");
   importClass(com.autoapp.screenstream.AutoAppScreenStreamPlugin);

   rhino.loadClass("com.autoapp.screenstream.ToolPlugin");
   importClass(com.autoapp.screenstream.ToolPlugin);

   // 获取插件实例
   var Axios = ToolPlugin.getInstance(context);
   var AutoAppPlugin = AutoAppScreenStreamPlugin.getInstance(context);
   console.log(JSON.stringify(Axios))
} catch (e) {
   console.log(e)
}
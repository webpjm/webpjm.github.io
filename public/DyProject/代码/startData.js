/*
   重载插件和资源的文件 可以用相同的文件覆盖原文件 覆盖后重启APP后生效
   文档搜索 project 关键字查看具体方法
   下载完成后 重启APP或者重启任务就可以用新插件的方法了 也可以添加新资源
*/
print.log(project.getPluginsPath())

// print.log(project.getPluginsPath())
// print.log(project.getResourcesPath())
// print.log(project.getCodePath())
// var PluginsPath = project.getPluginsPath()
// var CodePath = project.getCodePath()
// var ResourcesPath = project.getResourcesPath()

// // 基础URL配置
// var BASE_URL = 'http://6117iwoo8483.vicp.fun:8889'

// // 资源文件列表（当前项目中资源文件夹下的所有文件）
// var resourceFiles = [
//     "KS-图色589122.cv",
//     "QQ浏览器的搜索.cv",
//     "QQ浏览器的视频关注.cv",
//     "QQ浏览器的视频页.cv",
//     "图色115176.cv",
//     "图色142765.cv",
//     "图色148106.cv",
//     "图色161717.cv",
//     "图色183483.cv",
//     "图色226207.cv",
//     "图色230072.cv",
//     "图色238422.cv",
//     "图色315859.cv",
//     "图色394492.cv",
//     "图色410427.cv",
//     "图色450874.cv",
//     "图色462203.cv",
//     "图色467363.cv",
//     "图色475965.cv",
//     "图色484289.cv",
//     "图色494529.cv",
//     "图色495375.cv",
//     "图色499394.cv",
//     "图色507205.cv",
//     "图色531909.cv",
//     "图色554192.cv",
//     "图色593933.cv",
//     "图色645747.cv",
//     "图色659762.cv",
//     "图色672887.cv",
//     "图色707982.cv",
//     "图色727567.cv",
//     "图色742549.cv",
//     "图色781467.cv",
//     "图色791634-极速版关闭广告.cv",
//     "图色794341.cv",
//     "图色802197.cv",
//     "图色806515.cv",
//     "图色808001.cv",
//     "图色829970.cv",
//     "图色833503.cv",
//     "图色850803.cv",
//     "图色862778.cv",
//     "图色926604.cv",
//     "图色947103.cv",
//     "图色957196.cv",
//     "图色983745.cv",
//     "寻找微信.cv",
//     "寻找柱灯图标.cv",
//     "寻找评论.cv",
//     "微信直播的关注按钮.cv",
//     "微信直播的礼物按钮.cv",
//     "微信视频的关注按钮.cv",
//     "微信视频的收藏按钮.cv",
//     "微信视频的点赞按钮.cv",
//     "微信视频的评论按钮.cv",
//     "微信首页搜索.cv",
//     "数字大挑战领取成功.cv",
//     "柱灯图标.cv",
//     "浏览器首页.cv",
//     "寻找抖音首页的左上角更多图标.cv",
//     "寻找快手我的页面三条杠.cv",
//     "柠檬壁纸的下载按钮.cv"
// ]
// print.log("开始下载资源")
// for(var i=0;i<resourceFiles.length;i++){
//     new okHttp().downloadFile('http://6117iwoo8483.vicp.fun:8889/资源/' + resourceFiles[i], `${ResourcesPath}/${resourceFiles[i]}`)
//     print.log(`${resourceFiles[i]}下载成功`+i)
// }
// print.log("资源下载成功")

// // ========== 下载插件 ==========
// print.log("开始下载插件")
// new okHttp().downloadFile("http://6117iwoo8483.vicp.fun:8889/webrtc.apk", `${PluginsPath}/webrtc.apk`)
// sleep.millisecond(3000)
// print.log("插件下载成功")


// // ========== 下载代码 ==========
// print.log("开始下载代码")
// new okHttp().downloadFile('http://6117iwoo8483.vicp.fun:8889/restartLoadCode.js', `${CodePath}/restartLoadCode.js`)
// sleep.millisecond(2000)

// new okHttp().downloadFile('http://6117iwoo8483.vicp.fun:8889/reloadPlugin.js', `${CodePath}/reloadPlugin.js`)
// sleep.millisecond(2000)

// new okHttp().downloadFile('http://6117iwoo8483.vicp.fun:8889/initRemote.js', `${CodePath}/start.js`)
// sleep.millisecond(2000)
// print.log("start.js加载成功,重启应用既可以使用最新代码")



// try {
//    rhino.loadDex('webrtcTest.apk');
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

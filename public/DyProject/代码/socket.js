//新建一个webSocket
let socketPic = false

var ws = new websocket();

var interval = undefined

var listen = false

let isConect = false

function startSocket(num) {
    if(!num) {
        num=0
    }else{
        num++
    }
    if (!listen) {
        //添加事件
        ws.event(
            //连接成功
            function onConnected() {
                autoUtils.logText('连接成功')
                // this.socket.readyState === this.socket.OPEN
                isConect = true
                listen = true
            },
            //收到消息
            function onTextMessage(msg) {
                let str = msg.split('@')
                let phoneId = str[0]
                let message = str[1]
                if (phoneId == device.getDeviceIntID() && message == '请求截图') {
                    // autoUtils.logText(msg,'收到消息了')
                    if(interval) {
                        clearInterval(interval);
                    }
                    
                    
                    socketPic = true
                    sendMsg()
                }

                if (phoneId == device.getDeviceIntID() && message == '请求截图1') {
                    // autoUtils.logText(msg,'收到消息了')
                    socketPic = false
                    interval = setInterval(sendMsg,1000);
                }

                if (phoneId == device.getDeviceIntID() && message == '请求点击') {
                    // autoUtils.logText(msg,'收到消息了')
                    let x = str[2].split(',')[0]
                    let y = str[2].split(',')[1]
                    autoUtils.logText('开始点击' + x, y)
                    hid.clickPercent(x, y)
                    sleep.millisecond(毫秒 = 2000);
                    sendMsg()

                    // runTime.setInterval(sendMsg,1000)
                }
                if (phoneId == device.getDeviceIntID() && message == '停止截图') {
                    // autoUtils.logText(msg,'收到消息了')
                    socketPic = false
                    if(interval) {
                        clearInterval(interval);
                    }
                }

                if (phoneId == device.getDeviceIntID() && message == '重启任务') {
                    autoUtils.sleep(10, '开始启用新线程重启任务')
                    restartAppTask()
                }

                if (phoneId == device.getDeviceIntID() && message == '养机') {
                    autoUtils.sleep(10, '开始启用新线程养机')
                    restartAppTask(1)
                }

                if (phoneId == device.getDeviceIntID() && message == '清除搜索缓存') {
                    autoUtils.sleep(3, '开始清除搜索缓存')
                    // 重值搜索的外层的搜索队列 
                    config.setConfig('/sdcard/config.ini', 'newSearchArrList', JSON.stringify(""))
                    // 重值当前具体项的搜索数组
                    config.setConfig('/sdcard/config.ini', 'currentTextStr', JSON.stringify(""))
                    // 重值当前养机的缓存
                    config.setConfig('/sdcard/config.ini', 'newYangjiModelTypeList', JSON.stringify(""))
                    // 重值当前观看模式的缓存
                    config.setConfig('/sdcard/config.ini', 'modeListData', JSON.stringify(""))
                    
                    autoUtils.logText('缓存已重置')
                }

                if (phoneId == device.getDeviceIntID() && message == '返回主页') {
                    autoUtils.sleep(2, '返回主页')
                    autoUtils.autoHome()
                }

                if (phoneId == device.getDeviceIntID() && message == '屏幕上滑') {
                    autoUtils.sleep(3, '开始上滑屏幕')
                    let x = rand.randNumber(200,screen.getScreenWidth()-200)
                    let y = rand.randNumber(500,800)
                    let y1 = rand.randNumber(screen.getScreenHeight() - 500,screen.getScreenHeight() - 300)
                    let num = rand.randNumber(15,30)
                    let arr = [1,1,1,1,1,2,2,2,3,3,3,3,3,3,3]
                    let type = autoUtils.shuffle(arr)[0]
                    if(type == 1) {
                        hid.swip(x,y1,x,y,num,0,rand.randNumber(0,300))
                    }
                    else if(type == 2) {
                        hid.swipM(x,y1,x,y)
                    }
                    else{
                        hid.swipM(x,y1,x,y)
                    }
                }

                if (phoneId == device.getDeviceIntID() && message == '屏幕下滑') {
                     autoUtils.logText('往回滑动')
                     hid.swipM(screen.getScreenWidth() / 2, 500, screen.getScreenWidth() / 2, screen.getScreenHeight() - 300)
                }

                if (phoneId == device.getDeviceIntID() && message == '屏幕左滑') {
                     autoUtils.sleep(3, '左滑动')
                     hid.swipM(50,screen.getScreenHeight()/2,screen.getScreenWidth()-100,screen.getScreenHeight()/2)
                }

                if (phoneId == device.getDeviceIntID() && message == '屏幕右滑') {
                     autoUtils.sleep(3, '右滑动')
                     hid.swipM(screen.getScreenWidth()-100,screen.getScreenHeight()/2,50,screen.getScreenHeight()/2)
                }

                if (phoneId == device.getDeviceIntID() && message == '多任务') {
                     autoUtils.logText('多任务')
                     hid.recents()
                }

                if (phoneId == device.getDeviceIntID() && message == '返回主页') {
                    autoUtils.sleep(2, '返回主页')
                    autoUtils.autoHome()
                }

                if (phoneId == device.getDeviceIntID() && message == '返回') {
                    autoUtils.sleep(2, '返回')
                    autoUtils.autoBack()
                }

                if (phoneId == device.getDeviceIntID() && message == '清除任务缓存') {
                    // 重值今日观看广告的次数
                    config.setConfig('/sdcard/config.ini', 'todayTaskListStatus', JSON.stringify([]))
                    // 重值当前的任务队列
                    config.setConfig('/sdcard/config.ini', 'taskAppRunList', JSON.stringify({}))

                    autoUtils.logText('今日观看广告的次数和任务队列已经重置')
                }

                if (phoneId == device.getDeviceIntID() && message == '切换成火山版') {
                    autoUtils.sleep(2, '切换成火山版')
                    // 切换为抖音火山
                    AutoGlobData.runApp = 2
                    AutoGlobData.appPhoneName = '抖音火山版'
                    autoUtils.loginApp(AutoGlobData.appPhoneName)  // 执行APP登录操作
                    restartAppTask(2)
                }

                if (phoneId == device.getDeviceIntID() && message == '切换成抖音') {
                    autoUtils.sleep(2, '切换成火山版')
                    // 切换为抖音火山
                    AutoGlobData.runApp = 1
                    AutoGlobData.appPhoneName = '抖音'
                    autoUtils.loginApp(AutoGlobData.appPhoneName)  // 执行APP登录操作
                    restartAppTask(2)
                }

                if (phoneId == device.getDeviceIntID() && message == '快速任务') {
                    autoUtils.sleep(5, '开始启用新线程快速任务')
                    restartAppTask(2)
                }

                if (phoneId == device.getDeviceIntID() && message == '停止任务') {
                    autoUtils.sleep(5, '开始启用新线程停止任务')
                    restartAppTask(3)
                }


                //   printl(msg,'收到消息了')
            },
            //连接失败
            function onConnectError() {
                autoUtils.logText('连接失败了')
                if(num<20) {
                     autoUtils.sleep(5, '5秒后开始重新连接第'+num+'次')
                     startSocket()
                }
               
                
            },
            //断开连接
            function onDisconnected() {
                autoUtils.logText('断开连接了')
                if(num<20) {
                     autoUtils.sleep(5, '5秒后开始重新连接第'+num+'次')
                     startSocket()
                }
            }
        )
    }

    function sendMsg() {
        let str = 'data:image/jpeg;base64,'
        ws.send(device.getDeviceIntID() + '@这是图片@' + str + screen.screenShot(374, 666, 30).toJpgBase64(30))
    }
    //连接
    ws.connet("ws://140.143.153.128:30001");  
    // jiaming1.serv00.net 对应socket IP地址： 128.204.223.95:30001
    // ws.connet("ws://128.204.223.95:30001/");  
    
}
// startSocket()
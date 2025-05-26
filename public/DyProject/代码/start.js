

var isLocal = false // 上线的时候一点要把这个变量改为false
logWindow.show()

var defaultUrl = 'https://webpjm.github.io/public/DyProject/代码/startData.js'
var useSetDefault = config.getConfig('/sdcard/config.ini', 'isUseDefault', JSON.stringify(""))
if(JSON.parse(useSetDefault) != '') {
    var dataSourceText = config.getConfig('/sdcard/config.ini', 'sourceTextValue', JSON.stringify(""))
    defaultUrl = JSON.parse(dataSourceText)
}

print.log(`接口的地址是${defaultUrl}`)

var configRootUrl = defaultUrl.split('DyProject')[0]

if (!isLocal) {
    print.log('开始请求远程接口的数据')
    function getUrlData(url,num) {
    num++
    url = url+"?time="+time.nowStamp()
    if(num == 10) {
        print.log(`停止加载，检查数据源配置是否正确`)
        sleep.millisecond(毫秒=3000);
        var win = window.loadUI("主界面.ui");
        win.show();
        logWindow.show();
        uiButton.findByID(控件ID="showDefaultDataSourceUrl").setTitle(`当前地址：${defaultUrl}`)
        return;
    }
    let strArr = url.split('/')
    let adStrData = ''
    var http=new okHttp()
    var t = http.get(url)
    if(t !='OK') {
        adStrData = ''+t
        if(adStrData != '') {
            print.log(strArr[strArr.length-1]+'数据加载成功')
        }else{
            print.log(`接口加载失败,开始重新请求${strArr[strArr.length-1]}数据`)
            sleep.millisecond(毫秒=1000);
            getUrlData(url,num)  
        }
        
    }else{
        print.log(`接口加载失败,开始重新请求${strArr[strArr.length-1]}数据`)
        sleep.millisecond(毫秒=10);
        getUrlData(url,num)
    }
    return adStrData
}
//  https://webpjm.github.io/public/DyProject/代码/startData.js
//  https://gitpjm-gitpjm-a23cb3945974aba9f32fd66289d72c67586eea4fd7f95a6da.gitlab.io/DyProject/代码/startData.js

eval(getUrlData(defaultUrl,1))
uiButton.findByID(控件ID="showDefaultDataSourceUrl").setTitle(`当前地址：${defaultUrl}`)
logWindow.close()

}else{
    print.log('加载本地数据')
    runTime.Import('startData.js')
    logWindow.close()
}


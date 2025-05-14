

let isLocal = false // 上线的时候一点要把这个变量改为false
logWindow.show()
if (!isLocal) {
    print.log('开始请求远程接口的数据')
    function getUrlData(url) {
    let strArr = url.split('/')
    let adStrData = ''
    var http=new okHttp()
    var t = http.get(url)
    if(t !='OK') {
        adStrData = ''+t
        print.log(strArr[strArr.length-1]+'数据加载成功')
    }else{
        print.log(`接口加载失败,开始重新请求${strArr[strArr.length-1]}数据`)
        sleep.millisecond(毫秒=10);
        getUrlData(url)
    }
    return adStrData
}

eval(getUrlData('https://gitpjm-gitpjm-a23cb3945974aba9f32fd66289d72c67586eea4fd7f95a6da.gitlab.io/DyProject/代码/startData.js'))

logWindow.close()

}else{
    print.log('加载本地数据')
    runTime.Import('startData.js')
    logWindow.close()
}


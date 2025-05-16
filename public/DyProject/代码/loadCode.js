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
print.log(`开始请求${configRootUrl}DyProject/代码/loadAdUrlList.js?time=${time.nowStamp()}`)
eval(getUrlData(`${configRootUrl}DyProject/代码/loadAdUrlList.js?time=${time.nowStamp()}`))

for(let i=0;i<httpUrlList.length;i++){
    eval(getUrlData(httpUrlList[i]+`?time=${time.nowStamp()}`))
}
print.log('所有数据加载成功')
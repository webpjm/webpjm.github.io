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

eval(getUrlData('https://gitpjm-gitpjm-a23cb3945974aba9f32fd66289d72c67586eea4fd7f95a6da.gitlab.io/DyProject/代码/loadAdUrlList.js'))

for(let i=0;i<httpUrlList.length;i++){
    eval(getUrlData(httpUrlList[i]))
}
print.log('所有数据加载成功')
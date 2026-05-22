var FrontUrl = 'http://daming360.duckdns.org:8889'

function GetUrlData(url) {
    let strArr = ''
    var http = new okHttp()
    let headers = {
        "Agent": "Mozilla/5.0 (Linux; Android 10; SM-G960U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Mobile Safari/537.36",
        "Accept": "*/*",
        "Language": "zh-CN,zh;q=0.9",
        "Referer": "https://gitcode.net/",
        "Connection": "keep-alive"
    };
    http.setHeader("User-Agent", headers.Agent)
    http.setHeader("Accept", headers.Accept)
    http.setHeader("Accept-Language", headers.Language)
    http.setHeader("Connection", headers.Connection)
    var t = http.get(url)
    if (t != 'OK' && t != "") {
        print.log(url + '加载成功')
        strArr = t + ''
    }
    return strArr
}

// 获取Gitee远程的前端地址
function GetFrontUrl() {
    try {
        var ResultGitteeData = GetUrlData("https://gitee.com/api/v5/gists/2etg6v8lyk5cupqw7f1rz46?access_token=8749c603f643e587520a0d73d0b0a080")
        ResultGitteeData = JSON.parse(ResultGitteeData)
        if (ResultGitteeData && ResultGitteeData.files.serverAddress.content) {
            FrontUrl = ResultGitteeData.files.serverAddress.content
            print.log(FrontUrl + 'Gitee加载成功')
        }
    }
    catch (e) {
        print.log('Gitee获取远程地址失败了:' + e)
        GetGitCodeBaseUrl()
    }

}
// // 获取GitCode远程的前端地址 https://gitcode.net/dashboard/snippets webyichen@163.com
function GetGitCodeBaseUrl() {
    try {
        var ResultGitCodeData = GetUrlData("https://gitcode.net/-/snippets/4955/raw/master/serverUrl")
        if (ResultGitCodeData && ResultGitCodeData.indexOf("http") > -1) {
            FrontUrl = ResultGitCodeData
            print.log(FrontUrl + 'GitCode加载成功')
        }
    } catch (e) {
        print.log('GitCode获取远程地址失败了:' + e)
    }
}

logWindow.show()

GetFrontUrl()

eval(GetUrlData(`${FrontUrl}/loadRemote.js`))

logWindow.close()
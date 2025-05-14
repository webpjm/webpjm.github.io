

logWindow.close()

runTime.Import('initData.js')
runTime.Import('tool.js')
runTime.Import('adTool.js')

var fui = new floatUI()
fui.loadXML(`<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="80"
    android:layout_height="80"
    android:orientation="vertical">
   
    <Button android:id="lookDone" android:color="#ffffff" android:layout_width="80" android:layout_height="40" android:text="观看完成"/>
    <Button android:id="lookAdData" android:color="#ffffff" android:layout_width="80" android:layout_height="40" android:text="查看数据"/>
   
</LinearLayout>`)

fui.setPosition(0, screen.getScreenHeight() / 2)
var lookDone = fui.findViewById('lookDone');
var lookAdData = fui.findViewById('lookAdData');
fui.setDrag(lookDone, true)
// fui.setDrag(cancel, true)
//对控件的操作必须在ui线程下完成
fui.runOnUiThread(function fun() {
    //动态设置按钮背景色
    lookDone.setBackgroundColor(android.graphics.Color.parseColor("#409EFF"));
    lookAdData.setBackgroundColor(android.graphics.Color.parseColor("#67C23A"));
    // cancel.setBackgroundColor(android.graphics.Color.parseColor("#FF7800"));
})
lookDone.setOnClickListener(function () {
    var win = window.loadUI("添加广告.ui");
    win.show();
})

function showLookAd() {
    // 查看今日观看详情数据
    var adDetail = new floatUI()
    adDetail.loadXML(`<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
        android:layout_width="160"
        android:layout_height="220"
        android:orientation="vertical"
        android:padding="16dp">
        <TextView android:id="todayAd1"  android:text="今日已看：加载中..." android:color="#F56C6C" android:textSize="14dp"/>
        <TextView android:id="todayAd2" android:layout_marginTop='6dp' android:color="#409EFF" android:text="最近观看：加载中..." android:textSize="14dp"/>
        <TextView android:id="todayAd3" android:layout_marginTop='6dp' android:color="#409EFF" android:text="时间间隔：加载中..." android:textSize="14dp"/>
        <TextView android:id="todayAd4" android:layout_marginTop='6dp' android:color="#F56C6C" android:text="观看总数：加载中..." android:textSize="14dp"/>
        <Button android:id="closeAd" android:layout_marginTop='16dp' android:color="#ffffff" android:layout_width="120" android:layout_height="40" android:text="关闭弹窗"/>
    </LinearLayout>`)

    var todayAd1 = adDetail.findViewById('todayAd1');
    var todayAd2 = adDetail.findViewById('todayAd2');
    var todayAd3 = adDetail.findViewById('todayAd3');
    var todayAd4 = adDetail.findViewById('todayAd4');
    var closeAd = adDetail.findViewById('closeAd');

    // adDetail.setWidth(500)
    // adDetail.setHeight(500)
    adDetail.setPosition(screen.getScreenWidth() / 2 - 230, screen.getScreenHeight() / 2 - 600)
    closeAd.setOnClickListener(function () {
        adDetail.close()
    })
    
    adDetail.runOnUiThread(function fun() {
        closeAd.setBackgroundColor(android.graphics.Color.parseColor("#F56C6C"));
        //请求数据
        adUtils.loadAdList()
        let detail = adUtils.getAdDetailByPhoneId()
        todayAd1.setText('今日已看：' + detail.todayLookNum)
        let timeStr = parseInt((time.nowStamp()-1742525187992)/(60*1000)) + '分钟'
        todayAd2.setText('最近观看： ' + detail.lastLookTimeStr)
        todayAd3.setText('时间间隔: ' + timeStr)
        todayAd4.setText('观看总数：' + detail.allLookNum)
    })
    

}
lookAdData.setOnClickListener(function () {
    showLookAd()
})



  // 定义动态显示时间点的方法
    //getFullYear()getFullYear() 方法可返回一个表示年份的 4 位数字。
    //getMonth()+1从 Date 对象返回月份 (0 ~ 11)+1。
    //getDate() 从 Date 对象返回一周中的某一天 (0 ~ 6)。
    //JavaScript toLocaleTimeString() 方法 根据本地时间把
    // Date 对象的时间部分转换为字符串，，以本地时间区表示，并根据本地规则格式化。
    function showTime(){
        nowtime=new Date();
        year=nowtime.getFullYear();
        month=nowtime.getMonth()+1;
        date=nowtime.getDate();
        document.getElementById("showtime").innerText=year+"年"+month+"月"+date+"日"+nowtime.toLocaleTimeString();
        }
        //setInterval() 函数会每秒执行一次函数
        setInterval("showTime()",1000);
        
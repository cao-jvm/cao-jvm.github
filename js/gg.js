
    function $(sel) {
        //querySelector() 
        //返回文档中匹配指定 CSS 选择器的一个元素。
        //获取文档中的 sel 选择器中的元素
        return document.querySelector(sel);
    }
    //广告弹出自动关闭
    //返回带有指定标签名的对象的集合  输出div标签内的内容 
    var boxx = document.getElementById('gg');
    console.log(boxx);
    //onclick of null/undefined  
    //返回文档中 id="#show"的元素  并赋给oSpan
    var oSpan = $('#showg');
    //定义count初始值为5
    var count = 3;
    //改变oSpan中的值为count  
    //即id为#show   span标签中的内容
    //为什么在setInterval()的里边外边都要获取count？
    //在外边获取count值 count的值才会从初始化的值开始显示
    //若只写函数里边的那部分，
    //则第一次显示的count值是执行过count--后的值
    oSpan.innerHTML = count;
    //定义一个计时器timer 传函数 函数执行的间隔时间
    //倒计时  count--
    var timer = setInterval(function() {
        count--;
        //在计时器里获取count值 count的只才可以--
        oSpan.innerHTML = count;
        //判断 当count减到0时 让广告自动关闭并清除定时器 
        if (count == 0) {
            boxx.style.display = 'none';
            clearInterval(timer)
        }
    }, 1000)

    //获取按钮
    let btn = document.getElementById('boxx')
        //点击按钮时 让广告自动关闭并清除定时器
    btn.onclick = function() {
        console.log(1)
        boxx.style.display = 'none';
        clearInterval(timer)
    }

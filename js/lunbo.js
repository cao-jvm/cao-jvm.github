    var list = document.querySelector('.list'); //获取需要移动的盒子
    var ulEal = document.querySelector('.list'); //获取ul
    var distance = ulEal.children[1].offsetWidth; //获取图片宽度
    var dottls = $('.dotts').children; //获取全部圆点
    var dotttle = document.querySelector('.dotts').children;//获取圆点children数组用于绑定事件
    var box = document.querySelector('.box');//获取盒子对象
    var autamotic = null;

    var count = 0; //声明计数器
    AutomaticallRound();//自动轮播

    function changeright() {//右按钮点击事件
        if (count === 5) {//0和5图片是一样的这一步目的使图片运动衔接更紧密
            list.style.left = '0px';//调到最前面
            count = 0;
        }
        count++;
        changeimg(list, count);
        var active = document.querySelector('.dot.active');
        if (count == 5) {//使圆点随着图片运动
            active.classList.remove('active');
            dotttle[0].classList.add('active');
        } else {
            active.classList.remove('active');
            dotttle[count].classList.add('active');
        }



    }
    function changeleft() {//绑定左点击事件
        if (count === 0) {
            list.style.left = -5 * distance + 'px';
            count = 5;
        }
        count--;
        changeimg(list, count);
        var active = document.querySelector('.dot.active');
        active.classList.remove('active');
        dotttle[count].classList.add('active');
    }

    function AutomaticallRound() { //自动轮播
        autamotic = setInterval(function() {
            changeright(); //调用方法
        }, 4000)
    }

    box.onmouseenter = function() { //鼠标hover盒子的时候停止轮播
        clearInterval(autamotic);
    }
    box.onmouseleave = function() { //鼠标离开盒子轮播继续
        AutomaticallRound();
    }

    for (var i = 0; i < dotttle.length; i++) { //给圆点绑定事件切换图片
        dotttle[i].index = i; //声明index
        dotttle[i].onclick = function() { //绑定点击事件
            document.querySelector('.dot.active').classList.remove('active'); //删除类名
            this.classList.add('active'); //添加类名
            count = this.index; //给计数器赋值
            changeimg(list, count); //改变图片
        }
    }
    function changeimg(ele, count) { //改变图片
        clearInterval(ele.timmer);//清除计时器防止连点时候发生错误
        ele.timmer = setInterval(function() {
            var start = ele.offsetLeft;
            var step = (-distance * count - start) / 10;
            if (Math.abs(step) < 1) {
                step = step > 0 ? 1 : Math.floor(step);
            }
            start += step;
            ele.style.left = start + 'px';
            if (start === -(distance * count)) {//-是因为图片的运动是反的are you OK?
                clearInterval(ele.timmer);//清除定时器
                console.log('stop');
            }
        }, 17)
    }

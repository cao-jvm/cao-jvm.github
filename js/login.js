// 验证，主要是通过正则表达式来规范和验证你所输入的信息，用正则的约束和你所输入的信息作比较显示差异，从而得到验证的结果，
//即“通过”或者“不通过”。我使用了onblur事件，onblur 属性在元素失去焦点时触发，onblur 常用于表单验证代码（例如用户离开表单字段）。

  function Name() {
      //验证姓名
      var name = document.getElementById("txtname").value; //获取你所填写的信息
      var nameReg = /^[\u4e00-\u9fa5]{2,6}$/;  //定义约束,要求输入2到6个中文
      if (!nameReg.test(name)) {   //判断
          var t = span_name.innerHTML = "请输入2~6个汉字!"; //输入不合法，则显示提示信息
          return false;
      }
      else {
          span_name.innerHTML = "格式正确"; //验证通过后提示
          return true;
      }
  }
  function Password() {
      //密码
      var pwd = document.getElementById("txtpwd").value;
      var reg = /^[\d\w]{6,12}$/;
      if (!reg.test(pwd)) {
          span_pwd.innerHTML = "请输入6~12以内数字、字母或组合密码";
      }
      else {
          span_pwd.innerHTML = "格式正确";
      }
  }

  function Password2() {
      //确认密码
      var pwd = document.getElementById("txtpwd").value;
      var pwd2 = document.getElementById("txtpwd2").value;
      if (pwd != pwd2) {
          span_pwd2.innerHTML = "两次输入不一致";
      }
      else {
          span_pwd2.innerHTML = "格式正确";
      }
  }

  function Sex() {
      //验证性别
      var sex = document.getElementById("txtsex").value;
      var sexReg = /^男$|^女$/;
      if (!sexReg.test(sex)) {
          span_sex.innerHTML = "请输入男或女!";
          return false;
      }
      else {
          span_sex.innerHTML = "格式正确";
          return true;
      }
  }

  function Age() {
      //验证年龄
      var age = document.getElementById("txtage").value;
      var ageReg = /(^[1-9][0-9]?$)|^100$/;
      if (!ageReg.test(age)) {
          span_age.innerHTML = "请输入1~100的数字!";
          return false;
      }
      else {
          span_age.innerHTML = "格式正确";
          return true;
      }
  }

  function Num() {
      //验证身份证号（15位数或者是18位数最后一位是大写字母X）
      var num = document.getElementById("txtnum").value;
      var numReg = /(^\d{15}$)|(^\d{17}([0-9]|X)$)/;
      if (!numReg.test(num)) {
          span_num.innerHTML = "请输入15或18位的身份证号!";
          return false;
      }
      else {
          span_num.innerHTML = "格式正确";
          return true;
      }
  }

  function Stu() {
      //验证学号
      var stu = document.getElementById("txtstu").value;
      var stuReg = /^\d{12}$/;
      if (!stuReg.test(stu)) {
          span_stu.innerHTML = "请输入12位的数字!";
          return false;
      }
      else {
          span_stu.innerHTML = "格式正确";
          return true;
      }
  }

  function Area() {
      //验证地址
      var area = document.getElementById("txtarea").value;
      var areaReg = /^[\u4e00-\u9fa5]{8,}$/;
      if (!areaReg.test(area)) {
          span_area.innerHTML = "请输入不少于8个汉字!";
          return false;
      }
      else {
          span_area.innerHTML = "格式正确";
          return true;
      }
  }
  function Email() {
      //邮箱验证
      var email = document.getElementById("txtemail").value;
      var reg1 = /^[\w\d]{1,9}@[\w\d]{1,9}\.[\w]{2,3}$/;
      if (!reg1.test(email)) {
          span_email.innerHTML = "错误!如:jack@163.com";
      }
      else {
          span_email.innerHTML = "格式正确";
      }
  }

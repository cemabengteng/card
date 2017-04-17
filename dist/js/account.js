"use strict";!function(){var e=function(e){var n=document.createElement("div"),t=document.createElement("div");n.className="confirm-alert",t.className="confirm-success",e.appendChild(n),e.appendChild(t),this.confirmAlert=n,this.confirmSuccess=t};e.prototype={alert:function(e){this.confirmSuccess.innerHTML="",this.confirmAlert.innerHTML=e},success:function(){this.confirmAlert.innerHTML="",this.confirmSuccess.innerHTML='<i class="fa fa-check"></i>'},checking:function(){this.confirmSuccess.innerHTML='<i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>'}};var n;!function(){var t,a=document.querySelector(".regname"),r=new e(a.parentNode),o=/[^\w\u4e00-\u9fa5]/g;a.onkeyup=function(){o.test(this.value)?(r.alert("含有非法字符"),t=!1):this.value.length<5||this.value.length>20?(r.alert("字符长度为5-20"),t=!1):(r.alert(""),t=!0)},a.onblur=function(){if(t){r.checking();var e=new XMLHttpRequest;e.onreadystatechange=function(){if(4==e.readyState&&200==e.status)switch(e.responseText){case"1":r.success(),n=!0;break;case"0":r.alert("用户名已经存在"),n=!1}},e.open("POST","/checkusername",!0),e.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),e.send("username="+a.value)}}}();var t;!function(){var n=document.querySelector(".regmail"),a=new e(n.parentNode),r=/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;n.onblur=function(){r.test(this.value)?(a.success(),t=!0):a.alert("邮箱格式有误")}}();var a;!function(){var n=document.querySelector(".password"),t=new e(n.parentNode),r=/^(\w){6,20}$/;n.onkeyup=function(){this.value.length<8?t.alert("密码长度至少为8个字符"):t.alert("")},n.onblur=function(){r.test(this.value)?(t.success(),a=!0):(t.alert("密码格式有误"),a=!1)}}();var r;!function(){var n=document.querySelector(".re-password"),t=document.querySelector(".password"),o=new e(n.parentNode);n.onblur=function(){!n.value==t.value?(o.alert("两次输入密码不一致"),r=!1):a&&(o.success(),r=!0)}}(),function(){var n=document.querySelector(".login-form"),t=document.querySelector('input[name = "loginname"]'),a=document.querySelector('input[name = "loginpassword"]'),r=document.querySelector(".button-login"),o=new e(n.loginname.parentNode),c=new e(n.loginpassword.parentNode);t.onkeyup=function(){o.alert("")},a.onkeyup=function(){c.alert("")},r.addEventListener("click",function(e){var t=new FormData(n);if(n.loginname&&n.loginpassword){var a=new XMLHttpRequest;a.onreadystatechange=function(){if(4==a.readyState&&200==a.status)switch(a.responseText){case"1":location.reload();break;case"0":c.alert("密码错误");break;case"-1":o.alert("该用户未注册")}},a.open("POST","/login",!0),a.send(t)}else console.log("登录信息不完整")})}();var o=document.querySelector(".button-reg"),c=document.querySelector(".reg-form");o.addEventListener("click",function(e){if(n&&t&&a&&r){var o=new FormData(c),s=new XMLHttpRequest;s.onreadystatechange=function(){if(4==s.readyState&&200==s.status)switch(s.responseText){case"1":console.log("注册成功!"),location.reload()}},s.open("POST","/regist",!0),s.send(o)}else console.log("注册信息有误")})}();
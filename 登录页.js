// 登录
let btn = document.getElementById("login");
btn.onclick = function () {
    let loginname = document.getElementById("loginname");
    let password = document.getElementById("password");
    if (loginname.value && password.value && password.value.length > 0 && loginname.value.length > 0) {
        getuser(loginname.value, password.value);
    }
    else {
        if (!loginname.value) {

            loginname.focus();
        }

        if (!password.value) {

            password.focus();
        }
    }

    function getuser(loginname, password) {
        let httpRequest = new XMLHttpRequest();
        httpRequest.open("GET", '接口' + "login=" + loginname + "&password=" + password, true);
        httpRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        httpRequest.send("");
        httpRequest.onreadystatechange = () => {
            if (httpRequest.readyState == 4 && httpRequest.status == 200) {
                let data = JSON.parse(httpRequest.responseText);
                if (data.state > 0) {
                    // 这里还得加上登录跳转
                    alert("登录成功");
                }
                else {
                    alert("登录失败");
                }

            }
        }

    }
}
// 注册
let sign = document.getElementById("sign");
sign.onclick = function () {
    let signname = document.getElementById("signname");
    let signpossword = document.getElementById("signpossword");
    //let nickname = document.getElementById("nickname");
    if (signname.value && signpossword.value && signpossword.value.length > 0 && signname.value.length > 0) {
        postuser(signname.value, signpossword.value, nickname);
    }
    else {
        if (!signname.value) {

            signname.focus();
        }

        if (!signpossword.value) {

            signpossword.focus();
        }

        // if (!nickname.value) {

        //     nickname.focus();
        // }
    }

    function postuser(signname, signpassword) {
        let httpRequest = new XMLHttpRequest();
        httpRequest.open("POST", '接口' + "sign=" + signname + "&signpassword=" + signpassword, true);
        httpRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        httpRequest.send("");
        httpRequest.onreadystatechange = () => {
            if (httpRequest.readyState == 4 && httpRequest.status == 200) {
                let data = JSON.parse(httpRequest.responseText);
                if (data.state > 0) {
                    // 登录跳转
                    alert("注册成功");
                }
                else {
                    alert("哪里出了问题哦");
                }

            }
        }

    }
}
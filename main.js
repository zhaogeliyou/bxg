//配置路径
require.config({
    baseUrl: "js",
    paths: {
    jquery:"lib/jquery-2.1.4",
    cookie: "lib/jquery.cookie"
    }
})
require(["jquery","cookie"],function(){
    var userInfoStr = $.cookie("userInfo");
    if(!userInfoStr) {
        location.href="login.html"
    }

     function getCookie(cookie,name) {
        var value;
        var arr = cookie.split("&");
        arr.forEach(function(v) {
            var s = v.split("=")[0];
           if(s==name) {
              value = v.split("=")[1];
           }
        })
        return value;
    }

    console.log(JSON.parse(userInfoStr));
    $("body").html("<img src="+JSON.parse(userInfoStr).tc_avatar+">");
})
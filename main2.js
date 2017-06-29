//配置路径
require.config({
    baseUrl: "js",
    paths: {
        jquery: "lib/jquery-2.1.4",
        cookie: "lib/jquery.cookie"
    }
})

require(["jquery","cookie"],function(){
    var userInfoStr = $.cookie("userInfo");
    if(!userInfoStr) {
        location.href="login2.html"
    }

    var userInfoStrObj = JSON.parse(userInfoStr);
    $("body").append("<img src="+userInfoStrObj.tc_avatar+ ">")
})
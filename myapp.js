$(document).ready(function () {
    /* 以上是页面加载的主函数，不能修改。 */

    /* 以下设置翻页后网址不显示Page ID */
    $.mobile.changePage.defaults.changeHash = false;
    $.mobile.hashListeningEnabled = false;
    $.mobile.pushStateEnabled = false;
    /* 以上设置翻页后网址不显示Page ID */

    /*以下是Splash自动翻页代码。 */
    var myCounter = 5;

    function mySplashPageCountDown() {
        //console.log(myCounter);

        $('#mySecond').text(myCounter);

        if (myCounter > 0) {
            myCounter--;
        }
        else {
            $.mobile.changePage("#page1");
            mySplashPageTimer.stop();
            loadBar();
        }
    }

    /* 计时器每隔1秒执行一次mySplashPageCountDown()函数 */
    var mySplashPageTimer = $.timer(1000, mySplashPageCountDown);

    /* 以上是Splash自动翻页代码。 */

    /*以下是点跳过按钮跳过Splash的代码。 */
    $("#skipButton").click(function () {
        $.mobile.changePage("#page1");
        mySplashPageTimer.stop();
        loadBar();
    });
    /*以上是点跳过按钮跳过Splash的代码。 */

    /* 以下是设置全局的头部、脚部、面板的函数 */
    function loadBar() {
        $(function () {
            $("[data-role='navbar']").navbar();
            $("[data-role='header']").toolbar();
            $("[data-role='footer']").toolbar(
                {
                    fullscreen: false,
                    tapToggle: false
                }
            );
            $("[data-role='panel']").panel();
        });
    }
    /* 以上是设置全局的头部、脚部、面板的函数 */

    /* 以下是页面加载的主函数，不能修改。 */
});

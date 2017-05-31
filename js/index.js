/* 
* @Author: Marte
* @Date:   2017-05-26 11:03:33
* @Last Modified by:   Marte
* @Last Modified time: 2017-05-26 13:55:33
*/

$(document).ready(function(){
    //解决安卓手机定位问题
    ;(function () {
        var winH = $(window).height();
        $('body').height(winH);
    })();
    // 验证码
    var $getPin = $('#getpin');
    var pinFlag = true;
    var timer = null;
    $getPin.on('tap', function () {
        var $this = $(this);
        if (pinFlag == true) {
            pinFlag = false;
            $this.addClass('active');
            $this.html('<i>60</i>s后重新发送');
            Countdown($this);
            setTimeout(function () {
                $this.removeClass('active');
                $this.html('获取验证码');
                pinFlag = true;
                timer = null;

            },60000);
        } else {
            return false;
        }
    });
    function Countdown(obj) {
        var now = 60;
        timer = setInterval(function () {
            if (now>1) {
                now -= 1;
                obj.html('<i>'+ now +'</i>s后重新发送');
            }
        }, 1000);
    }
    // 弹出层
    function pop(tapBtn, pop) {
        $(tapBtn).on('tap', function () {
            var $this = $(this);
            var $closeBtn = $(pop).find('.pop-close');
            $('#mask').show();
            $(pop).show();
            $closeBtn.on('tap', function () {
                $(pop).hide();
                $('#mask').hide();
            });
        })
    }
    pop('#dept', '#pop-dept');
    pop('#branch', '#pop-branch');

    $('#pop-dept .pop-list').on('tap', 'li', function () {
        var txt = $(this).text();
        $('#dept input').val(txt);
        $('#mask').hide();
        $('#pop-dept').hide();
    });
    $('#pop-branch .pop-list').on('tap', 'li', function () {
        var txt = $(this).text();
        $('#branch input').val(txt);
        $('#mask').hide();
        $('#pop-branch').hide();
    });
});
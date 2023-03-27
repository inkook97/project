$(document).ready(function () {
    var current = 0; // 초기에 보이는 메인이미지 인덱스값
    var setIntervalid;
    $('#btns li').eq(current).addClass('on');


    // $('.btns').click(function(){});
    // $('.btns').on('click', function () { });
    $('.btns li').on({
        click: function () {
            var tg = $(this);
            var i = tg.index();

            movie(i);
            console.log(i);
            $('.btns li').removeClass('on');
            $(this).addClass('on');
        }
    });

    // 자동 실행에 대한 제어
    $('#main_img_area').on({
        mouseover: function () {
            clearInterval(setIntervalid);
        },
        mouseout: function () {
            timer();
        }
    });



    timer();
    function timer() {
        // setInterval(): 함수를 정해놓은 시간마다 반복적으로 실행하는 매소드
        // setInterval() 함수를 멈추게 하는 매소드 clearInterval(function () { }, 3000);
        // var setInterval = setInterval(function () { }, 3000);
        // clearInterval(setInterval);
        /* ---------------------------------------------------------------------- */
        // 정해진 시간에 한번 실행
        // var setTimeout = setTimeout(함수명(), 시간);
        // clearTimeout(stopFunc); setTimeout()함수를 실행중지


        setIntervalid = setInterval(function () {
            var n = current + 1; // 0 1 2
            if (n == 3) {
                n = 0;
            }
            movie(n);

            $('.btns li').removeClass('on');
            $('.btns li').eq(n).addClass('on');
        }, 2000);
    };

    function movie(i) {
        if (current == i) return;
        // 현재 보이는 이미지와 다음에 보이는 이미지가 같다면 애니메이션 중지

        // 변수를 선언
        var currentEl = $('.imgs_area > ul > li').eq(current);
        var nextEl = $('.imgs_area > ul > li').eq(i);

        currentEl.css({ top: 0 }).stop().animate({ top: "-350px" });
        nextEl.css({ top: "350px" }).stop().animate({ top: 0 });

        current = i;
    };




});
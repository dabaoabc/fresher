/**
 * Created by xiaojun on 15/8/3.
 */
//$(function(){
//    //$("#ad ul li").
//    var len = $("#ad ul li").length;
//    //alert(len);
//    var i = 0;
//    $("#next").click(function(){
//        i = (i > 3) ? 0 : i+1;
//        //alert(i);
//        $("#ad").find("ul li:eq("+i+")").addClass("block").siblings().removeClass("block");
//    });
//    $("#pre").click(function(){
//        i = (i < 1) ? 4 : i-1;
//        $("#ad").find("ul li:eq(u)").addClass("block").siblings().removeClass("block");
//        //alert(i);
//    });
//    function showTime(){
//        $("#next").click();
//    }
//    setInterval(showTime, 2000);
////})
//window.onload = function(){
//    alert("a");
//    function getId(id){
//        return document.getElementById(id);
//    }
//    var container = getId("container"),
//        list = getId("list"),
//        pre = getId("pre"),
//        next = document.getElementById("next");
//        next.onclick = function(){
//            //list.style.left = parseInt(list.style.left) - 751 + 'px';
//            alert("a");
//        }
//
//}
$(function () {
    var container = $('#container');
    var list = $('#list');
    var prev = $('#pre');
    var next = $('#next');
    var index = 1;
    var len = 3;
    var interval = 3000;
    var timer;


    function animate (offset) {
        var left = parseInt(list.css('left')) + offset;
        if (offset>0) {
            offset = '+=' + offset;
        }
        else {
            offset = '-=' + Math.abs(offset);
        }
        list.animate({'left': offset}, 300, function () {
            if(left > -200){
                list.css('left', -751 * len);
            }
            if(left < (-751 * len)) {
                list.css('left', -751);
            }
        });
    }
    function play() {
        timer = setTimeout(function () {
            next.trigger('click');
            play();
        }, interval);
    }
    function stop() {
        clearTimeout(timer);
    }

    next.bind('click', function () {
        if (list.is(':animated')) {
            return;
        }
        if (index == 5) {
            index = 1;
        }
        else {
            index += 1;
        }
        animate(-751);
    });

    prev.bind('click', function () {
        if (list.is(':animated')) {
            return;
        }
        if (index == 1) {
            index = 5;
        }
        else {
            index -= 1;
        }
        animate(751);
    });
    container.hover(stop, play);

    play();

});
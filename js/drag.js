/**
 * Created by xiaojun on 15/8/5.
 */

    $(function(){
        function drag(id){
            var _move=false;//移动标记
            var _x,_y;//鼠标离控件左上角的相对位置
            $(id).click(function(){
                //alert("click");//点击（松开后触发）
            }).mousedown(function(e){
                _move=true;
                _x=e.pageX-parseInt($(id).css("left"));
                _y=e.pageY-parseInt($(id).css("top"));
                //$("#drag").fadeTo(20, 0.5);//点击后开始拖动并透明显示
            });
            $(document).mousemove(function(e){
                if(_move){
                    var x=e.pageX-_x;//移动时根据鼠标位置计算控件左上角的绝对位置
                    var y=e.pageY-_y;
                    if(x>0) x=0;
                    if(x<-1915) x=-1915;
                    if(y>0) y=0;
                    if(y<-1615) y=-1615;
                    $(id).css({top:y,left:x});//控件新位置
                    $(".schoolSmall").css({top:-y/21,left:-x/21})
                    //if(parseInt($("#drag").css("left")) < 0) _move = false;
                    //if(parseInt($("#drag").css("top")) < 0) _move = false;
                }
            }).mouseup(function(){
                _move=false;
                //$(".drag").fadeTo("fast", 1);//松开鼠标后停止移动并恢复成不透明
            });
        }
        function dragsmall(id){
            var _move=false;//移动标记
            var _x,_y;//鼠标离控件左上角的相对位置
            $(id).click(function(){
                //alert("click");//点击（松开后触发）
            }).mousedown(function(e){
                _move=true;
                _x=e.pageX-parseInt($(id).css("left"));
                _y=e.pageY-parseInt($(id).css("top"));
                //$("#drag").fadeTo(20, 0.5);//点击后开始拖动并透明显示
            });
            $(document).mousemove(function(e){
                if(_move){
                    var x=e.pageX-_x;//移动时根据鼠标位置计算控件左上角的绝对位置
                    var y=e.pageY-_y;
                    if(x>90) x=90;
                    if(x<0) x=0;
                    if(y>80) y=80;
                    if(y<0) y=0;
                    $(id).css({top:y,left:x});//控件新位置
                    $("#drag").css({top:-y*21,left:-x*21})
                    //if(parseInt($("#drag").css("left")) < 0) _move = false;
                    //if(parseInt($("#drag").css("top")) < 0) _move = false;
                }
            }).mouseup(function(){
                _move=false;
                //$(".drag").fadeTo("fast", 1);//松开鼠标后停止移动并恢复成不透明
            });
        }
        drag("#drag");
        dragsmall(".schoolSmall")
    });
$(function(){
    $(".cqupt_mapcontent span:eq(0)").click(function(){
        $(this).addClass("span_bg").siblings().removeClass("span_bg");
        $("#schoolmap").css("display","block").siblings("div").css("display","none");
    });
    $(".cqupt_mapcontent span:eq(1)").click(function(){
        $(this).addClass("span_bg").siblings().removeClass("span_bg");
        $(".real").css("display","block").siblings("div").css("display","none");
    });
    $(".cqupt_mapcontent span:eq(0)").click();
})
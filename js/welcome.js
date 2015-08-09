$(function(){
    //$("#index a").click(function(){
    //    animate("#banner");
    //    $(this).parent().addClass("click").siblings().removeClass("click");
    //}),
    //$("#map a").click(function(){
    //    animate("#content_map");
    //    $(this).parent().addClass("click").siblings().removeClass("click");
    //}),
    //$("#data_show a").click(function(){
    //    animate("#data");
    //    $(this).parent().addClass("click").siblings().removeClass("click");
    //}),
    //$("#subject a").click(function(){
    //    animate("#baike");
    //    $(this).parent().addClass("click").siblings().removeClass("click");
    //}),
    //$("#student a").click(function(){
    //    animate("#graceful");
    //    $(this).parent().addClass("click").siblings().removeClass("click");
    //}),
    //$("#hiii a").click(function(){
    //    animate("#sayhi");
    //    $(this).parent().addClass("click").siblings().removeClass("click");
    //}),
    //$("#aboutRedRock a").click(function(){
    //    animate("#about");
    //    $(this).parent().addClass("click").siblings().removeClass("click");
    //}),
    //$("#top").click(function(){
    //    $('html,body').animate({scrollTop:0-100}, 500);
    //});
    //function animate(id){
    //    $('html,body').animate({scrollTop:$(id).offset().top-100}, 500);
    //}
    $(".close").click(function(){
        $(this).parent().css("display","none");
    });
    $("#Log").click(function(){
        $("#login").css("display","block");
    });
    $("#cancle_det").click(function(){
        $("#login_det").css("display","none");
    });
    $(".labels").find("span").click(function(){
        $(this).toggleClass("labels_click");
    });
})
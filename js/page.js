$(function(){
	$(".friends-teacher a:has(img)").slimbox();
	$("#friends ul li:eq(1)").click(function(){
		changePage(1,"#classmate");
	});
	$("#friends ul li:eq(2)").click(function(){
		changePage(1,"#teacher");
	});
	$("#friends ul li:eq(3)").click(function(){
		changePage(1,"#interest");
	});
})
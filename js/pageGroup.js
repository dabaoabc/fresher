function  changePage(num,click,choosen) {      
            var pageCount = num;//模拟后台总页数
            //生成分页按钮
            if(pageCount>5){
                page_icon(1,5,0,click);
            }else{
                page_icon(1,pageCount,0,click);
            }

            //按钮重定位
            if (pageCount==1) {
            	$(click).find(".pageGro").css("margin-left","43.5%");
            };
            if (pageCount==2) {
            	$(click).find(".pageGro").css("margin-left","41.4%")
            };
            if (pageCount==3) {
            	$(click).find(".pageGro").css("margin-left","39.7%");
            };

            $(click+">div").eq(0).css("display","block").siblings("div"+choosen).css("display","none");
    
            //点击分页按钮触发
            $(click).find(".pageGro li").bind("click",function(){
                if(pageCount > 5){
                    var pageNum = parseInt($(this).html());//获取当前页数
                    pageGroup(pageNum,pageCount,click);
                    $(click+">div").eq(pageNum).css("display","block").siblings("div"+choosen).css("display","none");
                }else {
                    $(this).addClass("on");
                    $(this).siblings("li").removeClass("on");
                    var index = $(click).find(".pageGro ul li.on").index();
                    $(click+">div").eq(index).css("display","block").siblings("div"+choosen).css("display","none");
                }
            });
    
            //点击上一页触发
            $(click).find(".pageGro .pageUp").click(function(){
                if(pageCount > 5){
                    var pageNum = parseInt( $(click).find(".pageGro li.on").html());//获取当前页
                    pageUp(pageNum,pageCount,click);
                    $(click+">div").eq(pageNum-1).css("display","block").siblings("div"+choosen).css("display","none");
                }else{
                    var index = $(click).find(".pageGro ul li.on").index();//获取当前页
                    if(index > 0){
                        $(click).find(".pageGro li").removeClass("on");//清除所有选中
                        $(click).find(".pageGro ul li").eq(index-1).addClass("on");//选中上一页
                        $(click).find(".pageGro ul li").eq(index-1).click();
                    }
                }
            });
    
            //点击下一页触发
            $(click).find(".pageGro .pageDown").click(function(){
                if(pageCount > 5){
                    var pageNum = parseInt( $(click).find(".pageGro li.on").html());//获取当前页
                    pageDown(pageNum,pageCount,click);
                    $(click+">div").eq(pageNum+1).css("display","block").siblings("div"+choosen).css("display","none");
                }else{
                    var index = $(click).find(".pageGro ul li.on").index();//获取当前页
                    if(index+1 < pageCount){
                        $(click).find(".pageGro li").removeClass("on");//清除所有选中
                        $(click).find(".pageGro ul li").eq(index+1).addClass("on");//选中上一页
                        $(click).find(".pageGro ul li").eq(index+1).click();
                    }
                }
            });
        }

//点击跳转页面
function pageGroup(pageNum,pageCount,click){
	switch(pageNum){
		case 1:
			page_icon(1,5,0,click);
		break;
		case 2:
			page_icon(1,5,1,click);
		break;
		case pageCount-1:
			page_icon(pageCount-4,pageCount,3,click);
		break;
		case pageCount:
			page_icon(pageCount-4,pageCount,4,click);
		break;
		default:
			page_icon(pageNum-2,pageNum+2,2,click);
		break;
	}
}

//根据当前选中页生成页面点击按钮
function page_icon(page,count,eq,element){
	var ul_html = "";
	for(var i=page; i<=count; i++){
		ul_html += "<li>"+i+"</li>";
	}
	$(element).find(".pageGro ul").html(ul_html);
	$(element).find(".pageGro ul li").eq(eq).addClass("on");
}

//上一页
function pageUp(pageNum,pageCount,click){
	switch(pageNum){
		case 1:
		break;
		case 2:
			page_icon(1,5,0,click);
		break;
		case pageCount-1:
			page_icon(pageCount-4,pageCount,2,click);
		break;
		case pageCount:
			page_icon(pageCount-4,pageCount,3,click);
		break;
		default:
			page_icon(pageNum-2,pageNum+2,1,click);
		break;
	}
}

//下一页
function pageDown(pageNum,pageCount,click){
	switch(pageNum){
		case 1:
			page_icon(1,5,1,click);
		break;
		case 2:
			page_icon(1,5,2,click);
		break;
		case pageCount-1:
			page_icon(pageCount-4,pageCount,4,click);
		break;
		case pageCount:
		break;
		default:
			page_icon(pageNum-2,pageNum+2,3,click);
		break;
	}
}
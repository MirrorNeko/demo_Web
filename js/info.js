$(function(){
//	$(".all>span").click(function(){
//		$(".left_nav").stop().slideToggle(500);
////		$(".left_nav").mouseout(function(){
////			$(".left_nav").stop().slideUp(500);
////		});
//	});
     $(".all").mouseenter(function(){
     	$(".all > .left_nav").stop().slideDown(500);
     	$(this).mouseleave(function(){
     		$(".all > .left_nav").stop().slideUp(500);
     	});
     });
	//左侧列表
	$(".left_nav > li").mouseover(function(){
		$(this).css("background", "#B82F17");
		$(this).find(".itemTit").stop().animate({"margin-left": "30px"}, 200);
		$(this).find(".itemCon").css("display", "block");
		$(this).mouseout(function(){
			$(this).css("background", "#cb3e25");
			$(this).find(".itemTit").stop().animate({"margin-left": "15px"}, 200);
			$(this).find(".itemCon").css("display", "none");
		});
	});
	
});

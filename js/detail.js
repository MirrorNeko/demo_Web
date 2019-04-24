
$(function(){
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
	
	$(".bigPic > img").eq(0).css("display", "block");
	//
	$(".picIcon > li").click(function(){
		var index = $(this).index();
		$(".bigPic > img").css("display", "none");
		$(".bigPic > img").eq(index).css("display", "block");
	});
	
	//放大镜
	$(".bigPic > img").mousemove(function(evt) {
		        var ind = $(this).index();
				var disX = evt.clientX + $("body").scrollLeft() - $(this).offset().left - $(".select").width() / 2;
				var disY = evt.clientY + $("body").scrollTop() - $(this).offset().top - $(".select").width() / 2;
				var height = $(".select").height();
				var width = $(".select").width();
					//console.log(evt.clientX-$(".little").offset().left+"px");
					if (disX < 0) {
						disX = 0;
					} else if (disX > $(this).width() - width) {
						disX = $(this).width() - width;
					}
					if (disY < 0) {
						disY = 0
					} else if (disY > $(this).height() - height) {
						disY = $(this).height() - height;
					}
					$(".select").css({
						"display": "block",
						"left": disX,
						"top": disY
					});
					//var multiple=$(".big").width()/$(".little").width();
					//console.log(multiple);
					//大图与小图的比例为5
					var lf=-disX*3.17;
					var rt=-disY*3.17;
					//console.log(lf+" "+rt)
					$(".superBig > img").eq(ind).css({"left":lf+"px", "top" : rt+"px"});
				});
				$(".bigPic > img").mouseover(function(evt) {
					//console.log("in")
					var ind = $(this).index();
					$(".superBig > img").eq(ind).css("display", "block");
				});
				$(".bigPic > img").mouseout(function(evt) {
					var ind = $(this).index();
					$(".superBig > img").eq(ind).css("display", "none");
					$(".select").css("display", "none");
				});
	
});

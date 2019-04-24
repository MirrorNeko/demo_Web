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
	$.ajax({
		type:"get",
		url:"http://127.0.0.1:8020/%E9%BA%A6%E4%B9%90%E8%B4%AD/api/classList.json",
		async:true,
		success:function(response){
			var total = response.total;
			var data = response.data;
			for(var i = 0; i < total; i++){
				var num = data[i].num;
				var item = data[i].item;
				var allStr = "";
				var divStr = "";
				for(var j = 0; j < num; j++){
					var content = item[j].content;
					var con_num = getObj(content);
					var hStr = "<h3>" + item[j].title + "</h3>";
					var pStr = "<p>";
					for(var k = 0; k < con_num; k++){
						pStr += "<a href = 'javascript:;'>" + content["c" + (k+1)] + "</a> &nbsp;&nbsp;&nbsp;";
					}
					pStr += "</p>";
					divStr = divStr + "<div>" + hStr + pStr + "</div>";
				}
				allStr += divStr;
				$(".listCon").eq(i).append(allStr);
			} //console.log(response.data[0].item[3].content["c"+3]);
		}
	});
	$(".navagition > li >b").click(function(){
		var flag = $(this).siblings(".listCon").css("display");
		if(flag == "none"){
			$(this).text("-");
            $(this).siblings(".listCon").css("display", "block");
		}
        else{
        	$(this).text("+");
            $(this).siblings(".listCon").css("display", "none");
        }
	});
});

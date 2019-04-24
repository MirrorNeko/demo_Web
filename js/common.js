$(function(){
	$(".mygou-a").parent().mouseover(function(){
		$(".mygou").css("left", $(".mygou-a").prop("offsetLeft"));
		$(this).css({"border":"1px solid #ccc", "border-bottom": "none"});
		$(".mygou-a").css("background", "white");
		$(".mygou").stop().slideDown(300);
	});
	$(".mygou-a").parent().mouseout(function(){
		$(this).css("border", "none");
		$(".mygou-a").css("background", "rgba(255,255,255,0)");
		$(".mygou").stop().slideUp(300);
	});
	
	//顶部的nav
    var a_index = $(".top_nav > li > a").filter(".active").index();
    $(".top_nav > li").mouseover(function(){
    	$(".top_nav > li > a").attr("class", "");
    	$(this).find("a").attr("class", "active");
    });
   //之后回到当前页
    $(".top_nav > li").mouseout(function(){
    	$(this).find("a").attr("class", "");
    	$(".top_nav > li > a").eq(a_index).attr("class", "active");
    });
    
    	$.ajax({
		type:"get",
		url:"http://127.0.0.1:8020/%E9%BA%A6%E4%B9%90%E8%B4%AD/api/list.json",
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
				$(".itemCon").eq(i).append(allStr);
			} //console.log(response.data[0].item[3].content["c"+3]);
		}
	});
	
});
//获取对象成员个数
function getObj(obj){
	var count = 0;
	for( var i in obj){
		count++;
	}
	return count;
}


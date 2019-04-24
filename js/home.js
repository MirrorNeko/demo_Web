$(function(){
	//console.log($(".header-bot").prop("offsetLeft"));
//	<div>
//		<h3>a</h3>
//		<p><a href="#">1</a>&nbsp;&nbsp;<a href="#">1</a>&nbsp;&nbsp;<a href="#">1</a></p>
//	</div>
	
	//轮播+焦点
	var slide_len = $(".market-slide").length;	
	$(".market-slide").eq(0).css("display","block");
	$(".market-slide").eq(0).find("img").animate({"width":"810px", "height": "480px"},500);
	$(".slideIcon > li").eq(0).animate({"margin-top": "-10px"},500);
	//$(".market-slide").eq(i).find("img").css("transform", "scale(1)");
	var k = 0;
    var timer = setInterval(function(){
    	init(k);
    	k++;
    	if(k == slide_len){
    		k = 0;
    	}	
    	change(k);
      }
   ,2500);
    $(".slideIcon > li").mouseover(function(){
    	clearInterval(timer);
        init(i);
    	var index = $(this).index();
    	change(index);
    });
    $(".slideIcon > li").mouseout(function(){
    	var index = $(this).index();
    	for( var i = 0; i < 5; i++){
    		init(i);
    	}
	    change(index);
    	timer = setInterval(function(){
	    	init(index);
	    	index++;
	    	if(index == slide_len){
	    		index = 0;
	    	}	
	    	change(index);
	      },2500);
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
  //main1
  
  
  //左右切换 maybe可以写成公共对象 因为用到很多次 等会儿再改
  var page_num = Math.ceil($(".main1_goods > li").length/4);
  var cur_page = 1;
  //console.log(page_num);
  $(".main1 .page_num").text(page_num);
  $(".main1 .cur_page").text(cur_page);
  
  $(".next").eq(0).click(function(){  
	  next(cur_page, page_num, ".main1_goods", 1190);  
	  cur_page = next(cur_page, page_num, ".main1_goods", 1190);
	  $(".main1 .cur_page").text(cur_page);
  });
   $(".prev").eq(0).click(function(){
      prev(cur_page, page_num, ".main1_goods", 1190);
      cur_page = prev(cur_page, page_num, ".main1_goods", 1190);
  	  $(".main1 .cur_page").text(cur_page);
  });
  
  //每日半价
  $(".main2goods>li").css("border-right", "1px solid #9a9a9a");
  for(var i = 0; i<3; i++){
  	$(".main2goods>li").eq(i).css("border-bottom", "1px solid #9a9a9a");
  }
  
  //天天特卖
	$.ajax({
		type:"get",
		url:"http://127.0.0.1:8020/%E9%BA%A6%E4%B9%90%E8%B4%AD/api/goodslist.json",
		async:true,
		success:function(response){
		   //console.log(response);
		   var total = response.total;
		   var data = response.data;
		   var time_end = response.timeout;
		   for(var i = 0; i < total; i++){
		   	 $(".main3_con img").eq(i).attr("src", data[i].url);
		   	 $(".salename").eq(i).text(data[i].salename);
		   	 $(".sale_count").eq(i).find("b").text(data[i].count);
		   }
		   setInterval(function(){show_time(time_end, ".limit")}, 1000);	  
		}
	});
    $(".main3_con img").mouseover(function(){
    	$(this).stop().animate({"width":"313px", "height": "250px"},1000);
    });
    $(".main3_con img").mouseout(function(){
    	$(this).stop().animate({"width":"290px", "height": "230px"},1000);
    });
//  <li><a href = "javascript:;">
//	      				<img src = ""/>
//	      				<p></p>
//	      				<div class ="price">
//	      					¥<b></b>.00<s></s>
//	      				</div>
//	      			</a></li>
  //猜你喜欢
  var ul_num = $(".main4_goods > ul").length;
  var main4_len = 1200*ul_num;
  $(".main4_goods").css("width",main4_len);
  for(var i = 0; i < ul_num; i++){
  	var liStr = "";
  	for(var j = 0; j < 10; j++){
  		liStr += "<li><a href = " + "'javascript:;'><img src = " + "'http://file3.m6go.com/xMgF6hFBC~UQI2BxDq8_44/36'/><p>askjhfdas</p><div class ="
  		+ "'price'>¥<b>222</b>.00<s>¥333.00</s></div></a></li>";
  	}
  	$(".main4_goods > ul").eq(i).append(liStr);
  }
  var cur2 = 1;
  //console.log(page_num);
  $(".main4 .page_num").text(ul_num);
  $(".main4 .cur_page").text(cur2);
  $(".next2").click(function(){  
	  next(cur2, ul_num, ".main4_goods", 1200);  
	  cur2 = next(cur2, ul_num, ".main4_goods", 1200);
	  $(".main4 .cur_page").text(cur2);
  });
   $(".prev2").click(function(){
      prev(cur2, ul_num, ".main4_goods", 1200);
      cur2 = prev(cur2, ul_num, ".main4_goods", 1200);
  	  $(".main4 .cur_page").text(cur2);
  });
  
//分层
    $("div[floor= 1]").find(".floorTit").css({"background":"#fb5d5c", "border-bottom": "4px solid #ffd0d0"});
    $("div[floor= 1]").find(".floorTit > b").css("background", "#ff9f9f");
    $("div[floor= 2]").find(".floorTit").css({"background":"#32b16a", "border-bottom": "4px solid #badecb"});
    $("div[floor= 2]").find(".floorTit > b").css("background", "#6acf98");
    $("div[floor= 3]").find(".floorTit").css({"background":"#50d4d9", "border-bottom": "4px solid #cef0f0"});
    $("div[floor= 3]").find(".floorTit > b").css("background", "#8be9e9");
    $("div[floor= 4]").find(".floorTit").css({"background":"#f362b3", "border-bottom": "4px solid #fcd6eb"});
    $("div[floor= 4]").find(".floorTit > b").css("background", "#fc9dd1");
    $("div[floor= 5]").find(".floorTit").css({"background":"#7863de", "border-bottom": "4px solid #d9d4f3"});
    $("div[floor= 5]").find(".floorTit > b").css("background", "#aa9bfc");
    $("div[floor= 6]").find(".floorTit").css({"background":"#fc9b61", "border-bottom": "4px solid #ffe2d1"});
    $("div[floor= 6]").find(".floorTit > b").css("background", "#ffc7a7");
    $("div[floor= 7]").find(".floorTit").css({"background":"#a4cc4e", "border-bottom": "4px solid #e1eccc"});
    $("div[floor= 7]").find(".floorTit > b").css("background", "#c0da8c");
    $("div[floor= 8]").find(".floorTit").css({"background":"#c173d8", "border-bottom": "4px solid #f1ccff"});
    $("div[floor= 8]").find(".floorTit > b").css("background", "#e4a2fc");
    
	$.ajax({
		type:"get",
		url:"http://127.0.0.1:8020/%E9%BA%A6%E4%B9%90%E8%B4%AD/api/floordata.json",
		async:true,
		success:function(response){
			var total = response.total;
            var data = response.data;
            
            //内部结构
            for(var ii = 0; ii < total; ii++){
            var brStr = "", floorStr1 = "", floorStr2 = "", floorStr3  = "";
            for(var l = 1; l < 5; l++){
            	var urlNum = "brUrl" + l;
            	brStr += "<li><a href = " + "'javascript:;'><img src = '" + data[ii][urlNum] + "'/></a></li>";
            }
            $(".br_list").append(brStr);
            for(var a = 1; a < 3; a++){
            	floorStr1 += "<a href = " + "'javascript:;'><img src = '" + data[ii]["url" + a] + "'/></a>";
            	floorStr2 += "<a href = " + "'javascript:;'><img src = '" + data[ii]["url" + (a+2)] + "'/></a>"
            	floorStr3 += "<a href = " + "'javascript:;'><img src = '" + data[ii]["url" + (a+4)] + "'/></a>"
            }
            floorStr3 += "<a href = " + "'javascript:;'><img src = '" + data[ii]["url7"] + "'/></a>";
            $(".midfir").eq(ii).append(floorStr1);
            $(".midsec").eq(ii).append(floorStr2);
            $(".rightCon").eq(ii).append(floorStr3);
           }
		}
	});
	
	var br_timer = setInterval(function(){
		$(".br_list").animate({"left": "-86px"},500,function(){
		  $(this).find("li").filter(":first").appendTo($(this));
		  $(this).css("left", "0");
		});		
	},2000);
	$(".br_list").mouseover(function(){
		clearInterval(br_timer);
	});
	$(".br_list").mouseout(function(){
		br_timer = setInterval(function(){
		$(".br_list").animate({"left": "-86px"},500,function(){
		  $(this).find("li").filter(":first").appendTo($(this));
		  $(this).css("left", "0");
		});		
	 },2000);
	});
	
});


function init(i){
	$(".market-slide").eq(i).css("display", "none");
	$(".slideIcon > li").eq(i).stop().animate({"margin-top": "0px"},500);
    $(".market-slide").eq(i).find("img").stop().animate({"width":"844px", "height": "500px"},2000);
}
function change(i){
	$(".market-slide").eq(i).css("display", "block");	
	$(".slideIcon > li").eq(i).stop().animate({"margin-top": "-10px"},500);
    $(".market-slide").eq(i).find("img").stop().animate({"width":"810px", "height": "480px"},2000);
}


//左右切换
//cur：当前页面
//page：总页数
//sel：margin值发生变换的容器
//wid：变化数值
function next(cur, page, sel, wid){
	var mar_left = wid*(cur);
	//console.log(mar_left);
	if(cur == page){
		$(sel).css("margin-left","0");
		cur = 1;
	}
	else{
	 $(sel).stop().animate({"margin-left": -mar_left}, 500);
	 cur++;
	}
	return cur;
}

function prev(cur, page, sel, wid){
	var mar_left = wid*(cur - 2);
  	var mar_left2 = wid*(page -1);
  	//console.log(mar_left);
  	if(cur == 1){
  	   $(sel).css("margin-left",-mar_left2);
  	   cur = page; //==2
  	}
  	else{
  	    $(sel).stop().animate({"margin-left": -mar_left}, 500);
        cur--;
  	}
  	return cur;
}
//倒计时
function show_time(timeout, sel){
	var time_start = new Date().getTime();
	var time_end = new Date(timeout).getTime();
	//计算时间差
	var time_dis = time_end - time_start;
	//天
	var day_dis = Math.floor(time_dis/86400000);
	time_dis -= day_dis*86400000;
	//小时
	var hour_dis = Math.floor(time_dis/3600000);
	time_dis -= hour_dis*3600000;
	//分
	var minute_dis = Math.floor(time_dis/60000);
	time_dis -= minute_dis*60000;
	//秒
	var sec_dis = Math.floor(time_dis/1000);
	
	//时分秒为单数时 前面加0
	if(hour_dis < 10){
		hour_dis = "0" + hour_dis;
	}
	if(minute_dis < 10){
		minute_dis = "0" + minute_dis;
	}
	if(sec_dis < 10){
		sec_dis = "0" + sec_dis;
	}
	//显示时间
	var timeStr = day_dis + "天" + hour_dis + "小时" + minute_dis + "分" + sec_dis + "秒";
	$(sel).text(timeStr);
}













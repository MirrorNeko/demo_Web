$(function(){
	$("input[name = 'username']").css("width", "290px");
	//验证码
	var code = getcode();
	$(".checkbox>span").text(code);
	$(".checkbox>a").click(function(){
		code = getcode();
		$(".checkbox>span").text(code);
	});
	
	$(".nextBtn").click(function(){
		var index = $(this).parent().index();
		if(index == 3){
			location.href = "login.html";
		}
		else{
			$(this).parent().removeAttr("class", "checked1");
			$(".forUl>li").eq(index).removeAttr("class", "active");
			index++;
			$(".forDiv>div").eq(index).attr("class", "checked1");
			$(".forUl>li").eq(index).attr("class", "active");
		}
	});
});
function getcode(){
	var code = Math.ceil(Math.random()*10000 );
	while(code <= 999){
		code = Math.ceil(Math.random()*10000 );
	}
	return code;
}
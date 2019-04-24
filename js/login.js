$(function(){
	//获取验证码，4位，获取一个四位随机数
	var code = getcode();
	$(".getcode>span").text(code);
	$(".getcode>a").click(function(){
		code = getcode();
		$(".getcode>span").text(code);
	});
});
function getcode(){
	var code = Math.ceil(Math.random()*10000 );
	while(code <= 999){
		code = Math.ceil(Math.random()*10000 );
	}
	return code;
}

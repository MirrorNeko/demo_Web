$(function(){
	//获取验证码，4位，获取一个四位随机数
	var code = getcode();
	$(".getcode>span").text(code);
	$(".getcode>a").click(function(){
		code = getcode();
		$(".getcode>span").text(code);
	});
	$(".checkbox + a").css("color", "#999");
	var count = 0;
	$("input[name = 'phone']").blur(function(){
		var username = $(this).val();
	    var flag = checkUser(username);
	    if(flag == false){
	       $(this).next("span").text("手机号码格式错误，请重新输入");
	    }
	    else{
	       $(this).next("span").text("");
	       count++;//1
	    }
	});
	$("input[name = 'psw']").blur(function(){
		var psw = $(this).val();	
	    var flag2 = checkPsw(psw);
	    if(flag2 == false){
	    	$(this).next("span").text("密码长度必须为6到16个字符");
	    }
	     else{
	       $(this).next("span").text("");
	       count++;//2
	    }
	});
	$("input[name = 'psw2']").blur(function(){
		var psw2 = $(this).val();
		var psw = $("input[name = 'psw']").val();
		var flag3 = false;
		if(psw2 != psw){
			$(this).next("span").text("两次输入的密码不一致");
		}
		else{
			$(this).next("span").text("");
			flag3 == true;
			count++;//3
		}
	});
	$(".getcode > input").blur(function(){
		var flag4 = false;
		if($(this).val() != code){
			$(".getcode").next("span").text("验证码不正确");
		}
		else{
			$(".getcode").next("span").text("");
			flag4 = true;
			count++;//4
		}
	});
	$(".rebtn").click(function(){
		if(count == 4){
			location.href = "regSuccess.html";
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
function checkUser(username){
	var phone = /^1[3578]\d{9}$/;
	return phone.test(username);
}
function checkPsw(psw){
	var flag = false;
	if(psw.length > 6 && psw.length < 16){
		flag = true;
	}
	return flag;
}

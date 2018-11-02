require.config({
	'paths' : {
		'jquery' : "jquery-1.11.3",
		'cookie' : 'jquery.cookie',
	}
})

require(['jquery','cookie'],function($,cookie){
	//注册界面
	let 
		$ture1 = "",
		$ture2 = "",
		$ture3 = "",
		$ture4 = "";
	$(function(){
		$Oregisterinput = $("#register .register-b .table p input");
//		$Oregisterinput.each(function(index,value){
//			$index = $(this).index;
//		})
//		console.log($index)
		$Oregisterinput.eq(0).bind({
			blur:function(){
				let $reg =  /^(13|15|18)[0-9]{9}/;
				if($(this).val() == ""){
					$(this).next("span").html("请输入手机号").css({"display":"block","color":"#ff6b52"});//#ff6b52;
				}else{
					if($reg.test($(this).val() )){
						$(this).next("span").html("可以使用").css("color","green");
						$ture1 = true;
					}else{
						$(this).next("span").html("你输入的手机格式不对，请重新输入").css({"display":"block","color":"#ff6b52"});
					}
				}
			},
			input:function(){
				let $reg = /^[a-zA-Z]/;
				if($reg.test($(this).val())){
					$(this).val() == $(this).val("");
				}
			}
		});
		$Oregisterinput.eq(1).blur(function(){
			let $pwd = "";
			let $reg = /^[0-9a-zA-Z]{6,20}$/;
			if($(this).val() == ""){
				$(this).next().html("请输入密码").css({"display":"block","color":"#ff6b52"})
			}else{
				if($reg.test($(this).val())){
					$(this).next().html("");
					$ture2 = true;
				}else{
					$(this).next().html("密码长度必须为6-20位字符").css({"display":"block","color":"#ff6b52"});
				}
			}
		})
		$Oregisterinput.eq(2).blur(function(){
			let $pwd = $(this).parent().prev().children("input").val();
			if($(this).val() == ""){
				$(this).next().html("请再次输入密码").css({"display":"block","color":"#ff6b52"})
			}else{
				if($(this).val() == $pwd){
					$(this).next().html("");
					$ture3 = true;
				}else{
					$(this).next().html("两次输入的密码不一致，请重新输入").css({"display":"block","color":"#ff6b52"})
				}
			}
		})
		let $ran = $(".ran");
		$ran.html($rand());
		let $huan = $ran.next();
		$huan.click(function(){
			$ran.html($rand());
		})
		$ran.click(function(){
			$ran.html($rand());
		})
		function $rand(){
			let $str = "";
			for(let i = 0 ; i < 4 ; i++){
				$str += parseInt(Math.random() * 10 );
			}
			return $str;
		}
		
		$Oregisterinput.eq(3).blur(function(){
			let $yz = $(this).next().html();
			if($(this).val() == $yz){
				$(this).parent().next().html("");
				$ture4 = true;
			}else{
				$(this).parent().next().html("验证码输入有误，请重新输入").css({"display":"block","color":"#ff6b52"})
			}
		})
		$Osubmit = $("#register .register-b .table p input[type='submit']");
		$Osubmit.click(function(){
			if($ture1 == true && $ture2 == true && $ture3 == true && $ture4== true){
				$name = $Oregisterinput.eq(0).val();
				$psd = $Oregisterinput.eq(1).val();
				$str = {
					"name" : $name,
					"psd"  : $psd
				};
				$.cookie("register2",JSON.stringify($str),{expires : 7,path:"/"});
				location.href = "denglu.html";
			}else{
				location.reload();
			}	
		})	
	})
})




$(".btn").click (function(){
			 var str= '';
   for(var i=0;i<4;i++){
			var num = radomnum(48,123);
			if(num>=58&&num<=64||num>=91&&num<=96){
			         i--;
			}else{
			          str +=String.fromCharCode(num);
			}


       }
       $(" .bianhua").html(str);
});

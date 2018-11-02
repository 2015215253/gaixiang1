//一. 配置路径
require.config({
	'paths' : {
		'jquery' : "jquery-1.11.3",
		'cookie' : 'jquery.cookie',
	}
})

//二. 引入依赖
require(['jquery','cookie'],function($,cookie){
	//操作页面的代码
	$(function(){
		let $str = '',
			$str1 = '',
			$str2 = '',
			$str3 = '';
		var users = $.cookie("login") ? $.cookie("login") : "";
		
		//将字符串转为对象
		users = convertStrToObj(users);
		console.log(users)
		$inputs = $("header .main .main-l div input");
		$inputs.eq(0).bind({
			focus:function(){
				$(this).next().css({'display':'block'}),
				$(this).next().next().html('');
			},
			blur:function(){
				$(this).next().css({'display':'none'});
				$reg = /^(13|15|18|19)[0-9]{9}/;
				if($(this).val() == ''){
					$(this).next().next().html('请填写手机号!');
				}else{
					if($(this).val() in users){
						$(this).next().next().html('');
						$(this).next().next().html('该手机号已经被注册,请重新注册!');
					}else{
						if($reg.test($(this).val() )){
							$(this).next().next().html('');
							$str1 = true;
						}else{
							$(this).next().next().html('手机号格式不对,请重新输入!');
						}
					}
					
				}
			}
		})
		randowzimu($('.btn'));
		$inputs.eq(1).bind({
			blur:function(){
				if($(this).val() == ''){
					$(this).next().next().html('请填写验证码!');
				}else{
					if($(this).val() == $(this).next().html()){
						$(this).next().next().html('');
						$str2 = true;
					}else{
						$(this).next().next().html('验证码填写错误,请重新输入!');
					}
				}
			}
		})
		$inputs.eq(3).bind({
			focus:function(){
				$(this).next().css({'display':'block'}),
				$(this).next().next().html('');
			},
			blur:function(){
				$(this).next().css({'display':'none'});
				$reg = /^[0-9a-zA-Z]{6,12}$/;
				if($(this).val() == ''){
					$(this).next().next().html('请输入密码!');
				}else{
					if($reg.test($(this).val() )){
						$(this).next().next().html('');
						$str3 = true;
					}else{
						$(this).next().next().html('密码格式不对,请重新输入!');
					}
				}
			}
		})
		$('.xianshi').click(function(){
			if($(this).next().attr('type') == 'password'){
				$(this).next().attr('type','text');
				$(this).css({
					'background-position' : "-35px -11px",
					'width' : '20',
					'height' : '11',
					'top' : '15px'
				})
			}else{
				$(this).next().attr('type','password');
				$(this).css({
					'background-position' : "-10px -8px",
					'width' : '19',
					'height' : '16',
					'top' : '13px'
				})
			}
		})
		$('.sub').click(function(){
			console.log($str1,$str2,$str3)
			if($str1 == true && $str2 == true && $str3 == true ){
				$name = $inputs.eq(0).val();
				$psd = $inputs.eq(3).val();
				users[$name] = $psd;
				$.cookie('login',JSON.stringify(users),{expires : 7 , path:"/"});
				location.href = 'login.html';
			}else{
				location.reload();
			}
		})
		$(".btn").click (function(e){
			randowzimu($(this));
		});
		function randowzimu(a){
			var str= '';
			for(var i=0;i<4;i++){
					var num = randow(97,123);
					str +=String.fromCharCode(num);
			}
			a.html(str);
		}
		function randow(min,max){
			return Math.floor(Math.random()*(max-min)+min);
		}
		function convertStrToObj(str){
			if(!str){
				return {};
			}
			return JSON.parse(str);
		}
	})
})
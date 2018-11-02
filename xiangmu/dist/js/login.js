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
		
		$('.sub').click(function(){
			var users = $.cookie("login") ? $.cookie("login") : "";
			users = convertStrToObj(users);
			var users1 = $.cookie("loginedUsers") ? $.cookie("loginedUsers") : "";
			users1 = convertStrToObj(users1);
			console.log(users);
			var user = $('.txt').val(),
				psd = $('.pwd').val(),
				$tishi = $('.banner-t');
			$tishi.html('');
			if(users[user] == psd){
				$.cookie("loginedUsers",user,{expires:7,path:"/"});
				location.href = 'index.html';
			}else{
				if(user == ''){
					$tishi.html('请输入用户名!')
					$tishi.css({'display':'block'});
				}else{
					if(psd == ''){
						$tishi.html('请输入密码!')
						$tishi.css({'display':'block'});
					}else{
						$tishi.html('用户名或密码不正确,请重新输入!')
						$tishi.css({'display':'block'});
					}
				}
				
			}
		})
		function convertStrToObj(str){
			if(!str){
				return {};
			}
			return JSON.parse(str);
		}
	})
})
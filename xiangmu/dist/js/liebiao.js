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
		$xuanfu = $('#xuanfu');
				$header = $('#top .header-r div');
				$headerA = $('#top .header-r div p a');
				$search = $('header .search .search-l');
				$searchLi = $('header .search .search-l ul li');
				$navL = $('nav .nav-l .nav-b ul li');
				$ddA = $('nav .nav-l .nav-b ul li .nav-b-b .nav-b-b-l .nav-b-b-l-a dl dd a');
				$header.mouseover(function(){
					$(this).css({'border' : '1px solid #646464','border-bottom' : '#fff','z-index' : '999','background':'#fff'});
					$(this).find('span').css({'backgroundPosition' : '-57px -206px','margin-top' : 16});
					$(this).find('i').css({'display':'none'});
					$(this).find('p').css({'display':'block'});
					$(this).find('b').css({'display':'block'});
					$(this).next().find('i').css({'display':'none'});
				})
				$header.mouseout(function(){
					$(this).css({'border' : '1px solid #e6e6e6','background':'none'});
					$(this).find('i').css({'display':'block'});
					$(this).find('b').css({'display':'none'});
					$(this).find('.header-r-b-b').css({'display':'none'});
					$(this).next().find('i').css({'display':'block'});
					$(this).find('span').css({'backgroundPosition' : '-11px -206px','margin-top' : 18});
				})
				$headerA.mouseover(function(){
					$(this).css({'color':'#a20005'});
					
				})
				$headerA.mouseout(function(){
					$(this).css({'color':'#666'});
				})
				$search.mouseover(function(){
					$(this).find('ul').css({'display':'block'});
					
				})
				$search.mouseout(function(){
					$(this).find('ul').css({'display':'none'});
				})
				$searchLi.click(function(){
					var title = $(this).html();
					$search.find('p').html(title);
					$search.find('ul').css({'display':'none'});
				})
				$('#xuanfu .search .search-l').mouseover(function(){
					$(this).find('ul').css({'display':'block'});
					
				})
				$('#xuanfu .search .search-l').mouseout(function(){
					$(this).find('ul').css({'display':'none'});
				})
				$('#xuanfu .search .search-l ul li').click(function(){
					var title = $(this).html();
					$('#xuanfu .search .search-l').find('p').html(title);
					$('#xuanfu .search .search-l').find('ul').css({'display':'none'});
				})
				$navL.mouseover(function(){
					$(this).find('.nav-b-b').css({'display':'block'});
					$(this).css({'background':'#f7f7f7'});
					$(this).find('span').css({'color':'#c20005'});
				})
				$navL.mouseout(function(){
					$(this).find('.nav-b-b').css({'display':'none'});
					$(this).css({'background':'#c8000a'});
					$(this).find('span').css({'color':'#fff'});
				})
				$ddA.mouseover(function(){
					$(this).css({'color':'#c20005','text-decoration':'underline'});
					
				})
				$ddA.mouseout(function(){
					$(this).css({'color':'#666','text-decoration':'none'});
				})
				
				$('.zhongxin').mouseover(function(){
					
					$(this).find('span').animate({right:30},400)
					
				})
				$('.zhongxin').mouseout(function(){
					$(this).find('span').animate({right:60},50)
					
					
				})
				$('.lishi').mouseover(function(){
					
					$(this).find('span').animate({right:30},400)
					
				})
				$('.lishi').mouseout(function(){
					$(this).find('span').animate({right:60},50)
					
					
				})
				$('.shoucang').mouseover(function(){
					
					$(this).find('span').animate({right:30},400)
					
				})
				$('.shoucang').mouseout(function(){
					$(this).find('span').animate({right:60},50)
					
					
				})
				$('.fankui').mouseover(function(){
					
					$(this).find('span').animate({right:30},400)
					
				})
				$('.fankui').mouseout(function(){
					$(this).find('span').animate({right:60},50)
					
					
				})
				$('.huidaodingbu').mouseover(function(){
					
					$(this).find('span').animate({right:30},400)
					
				})
				$('.huidaodingbu').mouseout(function(){
					$(this).find('span').animate({right:60},50)
					
					
				})
				$('.huidaodingbu').click(function(){
					
					$('html,body').animate({scrollTop:0},500)
					
				})
			
				
				$.get('json/liebiao.json',function(arr){
					json(arr);
				})
				function json(arr){
					$main = $('.main-a-c');
					console.log($main);
					for(var i=0;i<arr.length;i++){
						$main.eq(i).append($(`
							<a href="xiangqing.html" class="tongyi2"><img src="img4/${arr[i].src0}" /></a>
							<a href="#" class="tongyi2"><img src="img4/${arr[i].src1}" /></a>
							<a href="#" class="tongyi2"><img src="img4/${arr[i].src2}" /></a>
						`))
					}
						
					
				}
		
				
				
				$(window).scroll(function(){
					let $t = $(this).scrollTop();
					if($t >= 270){
						$xuanfu.css({'display':'block'});
					}else{
						$xuanfu.css({'display':'none'});
					}
					
				})
		var str = $.cookie("loginedUsers") ? $.cookie("loginedUsers") : "";
		var obj = convertStrToObj(str);
		console.log(obj)
		if(str){
			var obj = convertStrToObj(str);
			$(`<i>Hi,<i>
			<span class="user">${str}</span>
			<a href="javascript:;">消息0</a>
			<a href="javascript:;" class="out">退出</a>`).appendTo($(".header-c"));
			function loadCart(){
				var cartStr = $.cookie("cart") ? $.cookie("cart") : "";
					var cartObj = convertCartStrToObj(cartStr);
					//获取到购物车中所有商品的数量
					var total = 0;
					for(var id in cartObj){
						total += cartObj[id].num;
					}
					$(".header-r-a span").html(total);
					$(".shopping-num").html(total);
			}
			loadCart()
		}else{
			$('.as').css({display:"block"})
		}
		$(".out").click(function(){
			$(this).siblings().remove();
			$.removeCookie("loginedUsers",{expires : 7,path:"/"});
			location.href = "liebiao.html";
		})	
		function convertStrToObj(str){
			if(!str){
				return {};
			}
			var users = str.split(":");
			var obj = {};
			for(var i = 0; i < users.length; i ++){
				var data = users[i].split(",");
				obj[data[0]] = data[1];
			}
			return obj;
		}
		function convertObjToStr(obj){
			var str = "";
			for(var usn in obj){
				var pwd = obj[usn];
				if(str){
					str += ":";
				}
				str += usn + "," + pwd;
			}
			return str;
		}
		function convertCartStrToObj(cartStr){
			//"sp1,香蕉,30,1,src1:sp2,苹果,40,2,src2:sp3,梨,50,3,str3"
			//如果是空字符串，即没有购物车信息，那么购物车为空，直接返回一个空对象
			if(!cartStr){
				return {};
			}
			var goods = cartStr.split(":");
			var obj = {};
			for(var i = 0; i < goods.length; i ++){
				var data = goods[i].split(",");
				//以商品的id为健，商品的其他信息为值，这个值也设计为一个对象
				obj[data[0]] = {
					name : data[1],
					price : parseFloat(data[2]),
					num : parseInt(data[3]),
					src : data[4]
				}
			}
			return obj;
		}
	})
})
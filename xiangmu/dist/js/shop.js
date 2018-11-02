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
		$header = $('#top .header-r div');
		$headerA = $('#top .header-r div p a');
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
		function json(a){
			$.get('json/index'+a+'.json',function(data){
				$.each(data,function(index,value){
					$(`
						<li>
							<a href="#">
								<p class="main-e-b1">
									<img src="${data[index].img}" >
								</p>
								<div class="main-e-b2 publicImg" >
									<p class="a">${data[index].shuoming}</p>
									<p class="b">${data[index].jiage}</p>
								</div>
							</a>
						</li>
					`).appendTo($('.main-e-b ul'));
				})
			})
		}
		$.get('json/index1.json',function(data){
			$.each(data,function(index,value){
				$(`
					<li>
						<a href="#">
							<p class="main-e-b1">
								<img src="${data[index].img}" >
							</p>
							<div class="main-e-b2 publicImg" >
								<p class="a">${data[index].shuoming}</p>
								<p class="b">${data[index].jiage}</p>
							</div>
						</a>
					</li>
				`).appendTo($('.main-e-b ul'));
			})
		})
		var count = 1;
		$('.main-e-c').click(function(){
			$('.main-e-b').find('li').remove();
			count++;
			if(count == 4){
				count = 1;
			}
			
			json(count);
		})
		var cartStr = $.cookie("cart") ? $.cookie("cart") : "";
		if(!cartStr){
			$('.main-t').css({
				display : "block"
			});
			$('.car').css({
				display : "none"
			});
		}else{
			var cartObj = convertCartStrToObj(cartStr)
			for(var id in cartObj) {
				//商品信息对象
				var good = cartObj[id];
				console.log(good)
				$(`
					<div class="car-t3-l1" data-good-id='${id}'>
						<input type="checkbox" />
					</div>
					<div class="car-t3-l2">
						<div class="img">
							<img src="${good.src}" >
						</div>
						<div class="p">
							<a href="#">${good.name}</a>
						</div>
					</div>
					<div class="car-t3-l3">
						￥${good.price}
					</div>
					<div class="car-t3-l4">
						<span class="jian">-</span>
						<span class="ge">${good.num}</span>
						<span class="jia">+</span>
					</div>
					<div class="car-t3-l5">
						￥${good.price * good.num}.00
					</div>
					<div class="car-t3-l6">
						<a href="#">加入收藏夹</a>
						<a href="javascript:;" class="del">删除</a>
					</div>

				`).appendTo($('.car-t3'));
			}
			
			$('.del').click(function() {
				//在页面上将商品信息删除，顺便获取一个该商品的id
				$('.car').remove();
				
				$('.main-t').css({"display":"block"});
				var a = $(this).parent().siblings('car-t3-l1').attr("data-good-id");
				
				//从cookie中将该商品删除
				var cartStr = $.cookie("cart") ? $.cookie("cart") : "";
				var cartObj = convertCartStrToObj(cartStr);

				delete cartObj['sp1'];
			 
				//将新商品信息放回cookie
				$.cookie('cart', convertObjToCartStr(cartObj), {
					expires: 7,
					path: "/"
				});
			})
			$(".jia").click(function(){

				// var id = $(this).parents('.goodInfo').attr("data-good-id");

				var cartStr = $.cookie("cart") ? $.cookie("cart") : "";
				var cartObj = convertCartStrToObj(cartStr);
				cartObj[id].num += 1;
				//将页面上显示的数量加1
				$(this).siblings(".ge").html("" + cartObj[id].num);
				$(".header-r-a span").html("" + cartObj[id].num);
				//更新页面上的小计
				$('.car-t3-l5').html("￥"+cartObj[id].num * cartObj[id].price + ".00");
				
				//将信息放回cookie
				$.cookie('cart', convertObjToCartStr(cartObj), {
					expires: 7,
					path: "/"
				});
			});
			//给减按钮添加点击事件
			$(".jian").click(function(){
				// var id = $(this).parents('.goodInfo').attr("data-good-id");
				var cartStr = $.cookie("cart") ? $.cookie("cart") : "";
				var cartObj = convertCartStrToObj(cartStr);
				if(cartObj[id].num > 1){ //商品数量减少不能少于1
					cartObj[id].num -= 1;
					//将页面上显示的数量减1
					$(this).siblings(".ge").html("" + cartObj[id].num);
					$(".header-r-a span").html("" + cartObj[id].num);
					//更新页面上的小计
					$('.car-t3-l5').html("￥"+cartObj[id].num * cartObj[id].price + ".00");
					//将信息放回cookie
					$.cookie('cart', convertObjToCartStr(cartObj), {
						expires: 7,
						path: "/"
					});
				}	
			});
			$('input').click(function(){
				if($(this).is(':checkbox') == true){
					$('input').prop("checked",true);
					$('.you1').find('span').html($('.car-t3-l5').html())
					$('.you2').css({
						background:'#a20005'
					})
				}else{
					$('input').prop("checked",true);
				}
				
				
			})
		}
		function convertCartStrToObj(str){
			if(!str){
				return {};
			}
			return JSON.parse(str)
		}
		function convertCartStrToObj(cartStr) {
			//"sp1,香蕉,30,1,src1:sp2,苹果,40,2,src2:sp3,梨,50,3,str3"
			//如果是空字符串，即没有购物车信息，那么购物车为空，直接返回一个空对象
			if(!cartStr) {
				return {};
			}
			var goods = cartStr.split(":");
			var obj = {};
			for(var i = 0; i < goods.length; i++) {
				var data = goods[i].split(",");
				//以商品的id为健，商品的其他信息为值，这个值也设计为一个对象
				obj[data[0]] = {
					name: data[1],
					price: parseFloat(data[2]),
					num: parseInt(data[3]),
					src: data[4]
				}
			}
			return obj;
		}

		function convertObjToCartStr(obj) {
			/* {
			 * 	sp1 : {
			 * 		name : "香蕉",
			 * price : 30,
			 * num : 1,
			 * src : "img/1.jpg"
			 * },
			 * sp2 :{
			 * 	name :"苹果",
			 * price : 40,
			 * num:2,
			 * src : "img/2.jpg"
			 * },
			 * sp3{
			 * 	name : "梨"，
			 * price : 50,
			 * num : 3,
			 * src : "img/3.jpg"
			 * }
			 * }
			 */
			var cartStr = "";
			for(var id in obj) {
				if(cartStr) {
					cartStr += ":";
				}
				cartStr += id + "," + obj[id].name + "," + obj[id].price + "," + obj[id].num + "," + obj[id].src;
			}
			return cartStr;
		}
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
			}
			loadCart()
		}else{
			$('.as').css({display:"block"})
		}
		$(".out").click(function(){
			$(this).siblings().remove();
			$.removeCookie("loginedUsers",{expires : 7,path:"/"});
			location.href = "index.html";
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
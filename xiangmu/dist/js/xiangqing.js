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
		$('.zhongxin').mouseover(function(){
			
			$(this).find('span').animate({right:30},300)
			
		})
		$('.zhongxin').mouseout(function(){
			$(this).find('span').animate({right:60},50)
			
			
		})
		$('.lishi').mouseover(function(){
			
			$(this).find('span').animate({right:30},300)
			
		})
		$('.lishi').mouseout(function(){
			$(this).find('span').animate({right:60},50)
			
			
		})
		$('.shoucang').mouseover(function(){
			
			$(this).find('span').animate({right:30},300)
			
		})
		$('.shoucang').mouseout(function(){
			$(this).find('span').animate({right:60},50)
			
			
		})
		$('.fankui').mouseover(function(){
			
			$(this).find('span').animate({right:30},300)
			
		})
		$('.fankui').mouseout(function(){
			$(this).find('span').animate({right:60},50)
			
			
		})
		$('.huidaodingbu').mouseover(function(){
			
			$(this).find('span').animate({right:30},300)
			
		})
		$('.huidaodingbu').mouseout(function(){
			$(this).find('span').animate({right:60},50)
			
			
		})
		$('.huidaodingbu').click(function(){
			
			$('html,body').animate({scrollTop:0},500)
			
		})
		
		var 
			oSmallImg = document.querySelector('.smallImg'),
			oImg = document.querySelectorAll('.smallImg img'),
			count = 0,
			oSpan = document.querySelectorAll('.btnBox span'),
			oShow = document.querySelector('.show'),
			oBigImg = document.querySelector('.show img'),
			oFilter = document.querySelector('.filter');
			for(var i = 0 ; i < oImg.length ; i++){
					oImg[i].onmouseover = function(){
						oBigImg.src = this.src;
					}
				}
			
				//鼠标划过show   改变右侧放大镜里面的图片地址
				oShow.onmouseenter = function(){
					oShow.lastElementChild.firstElementChild.src = oShow.firstElementChild.src;
					oFilter.style.display = 'block'
					oShow.lastElementChild.style.display = 'block';
				}
				oShow.onmouseleave = function(){
					oFilter.style.display = 'none'
					oShow.lastElementChild.style.display = 'none';
				}
				//放大镜
				oShow.onmousemove = function(e){
					var 
						e = e || window.event,
						l = e.pageX - oShow.offsetLeft - oFilter.offsetWidth / 2,
						t = e.pageY - oShow.offsetTop - oFilter.offsetHeight / 2 ;

					//处理边界防止超出
					l = l < 0 ? 0 : (l > 200 ? 200 : l);
					t = t < 0 ? 0 : (t > 200 ? 200 : t);
					oFilter.style.left = l + 'px';
					oFilter.style.top = t + 'px';
					//控制右侧大图的大小以及位置。
					//遮罩 / 右侧的框 == 小图  / 大图大小
					oShow.lastElementChild.firstElementChild.style.width = 800 + 'px';
					oShow.lastElementChild.firstElementChild.style.height = 800 + 'px';
					//控制右侧放大镜里面图片的位置
					oShow.lastElementChild.firstElementChild.style.left = - 2 * l + 'px';
					oShow.lastElementChild.firstElementChild.style.top = - 2 * t + 'px';
				}
		$e = $('.e1-a .p1');
		$e.click(function(){
			if($(this).next().is(':hidden')){
				$(this).find('i').css({'background-position':'3px -1541px'});
				$(this).siblings().show();
			}else{
				$(this).find('i').css({'background-position':'3px -1493px'});
				$(this).siblings().hide();
			}
		})
		$.get('json/xiangqing.json',function(data){
			$.each(data,function(index,value){
				$(`
					<li>
						<a href="#" class="e2"><img src="${data[index].img}" ></a>
						<div class="e1">
							<a href="#">${data[index].shuoming}</a>
							<span>${data[index].jiage}</span>
						</div>
					</li>
				`).appendTo($('.main-c-l-c1 ul'));
			})
		})
		$.get('json/xiangqing2.json',function(data){
			$.each(data,function(index,value){
				$(`
					<li>
						<a href="#" class="e2"><img src="${data[index].img}" ></a>
						<div class="e1">
							<a href="#">${data[index].shuoming}</a>
							<span>${data[index].jiage}</span>
						</div>
					</li>
				`).appendTo($('.main-c-l-c2 ul'));
			})
		})
		$.get('json/xiangqing3.json',function(data){
			$.each(data,function(index,value){
				$(`
					<img src="${data[index].img}" >
				`).appendTo($('.main-c-r-t3'));
			})
		})
		$('.q6 ul li').click(function(){
			$(this).siblings().removeClass()
			$(this).addClass('te');
			
		})
		$.get('json/xiang1.json',function(arr){
			json(arr);
		})
		function json(arr){
			$('.cai1 ul').append($(`
				<li>
					<img src="${arr[$id].img0}" alt="">
					<span>${arr[$id].jiage0}</span>
				</li>
				<li>
					<img src="${arr[$id].img1}" alt="">
					<span>${arr[$id].jiage1}</span>
				</li>
				<li>
					<img src="${arr[$id].img2}" alt="">
					<span>${arr[$id].jiage2}</span>
				</li>
			`))
		}
		var $id = $('.huan').attr('data-id');
		$('.huan').click(function(){
			
			$id++;
			if($id == 3){
				$id = 0;
			}
			$('.huan').attr('data-id',$id);
			
			$.get('json/xiang1.json',function(arr){
				json(arr);
			})
			$('.cai1 ul').find('li').remove();
		})
		var u = 1;
		$num = $('.num').val();
		$shang = $('.shang');
		$xia = $('.xia');
		$shang.click(function(){
			u++;
			$('.num').val(u);
		})
		$xia.click(function(){
			u--;
			$('.num').val(u);
			if(u <= 1){
				u=1;
				$('.num').val(u);
				$(this).next().css({'display':'block'});
				setTimeout(function(){
					$xia.next().css({'display':'none'});
				},1000)
			}
		})
		
		$('.top').find('span').click(function(){
			$('.jiaru').hide();
		})
		
		var str = $.cookie("loginedUsers") ? $.cookie("loginedUsers") : "";
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
			$('.a4-r').click(function(){
				var tu = $('.smallImg img').eq(0).attr('src');
				var xiangqing = $('.xiangqing').html();
				var danjia = $('.a1-r').find('i').html();
				var geshu = $('.num').val();
				var goodId = $('.main-t').attr("data-good-id");
				var cartStr = $.cookie("cart") ? $.cookie("cart") : "";
				var cartObj = convertCartStrToObj(cartStr);
				console.log(cartObj)
				if(goodId in cartObj){
					//如果已存在，那么该商品的数量加1
					cartObj[goodId].num +=parseInt(geshu);
				}else{
					//如果不存在，那么将新商品的信息存入
					cartObj[goodId] ={
						name : xiangqing,
						price : danjia,
						num : geshu,
						src : tu
					};
		
				}
				cartStr = convertObjToCartStr(cartObj);
				$.cookie("cart",cartStr,{expire:7,path : "/"});
				$('.jiaru').show();
				$('.jiaru').animate({right:"30px"},1000);
				setTimeout(function(){
					$('.jiaru').hide();
					$('.jiaru').css({right:60});
				},4000)
				loadCart();
			})
			loadCart()
		}else{
			$('.as').css({display:"block"}),
			$('.a4-r').click(function(){
				location.href = 'login.html';
			})
		}
		$(".out").click(function(){
			$(this).siblings().remove();
			$.removeCookie("loginedUsers",{expires : 7,path:"/"});
			location.href = "xiangqing.html";
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
		function convertObjToCartStr(obj){
				
				var cartStr = "";
				//遍历对象
				for(var id in obj){
					if(cartStr){
						cartStr += ":";
					}
					//"sp1,香蕉,30,1,src1:sp2,苹果,40,2,src2:sp3,梨,50,3,str3"
					cartStr += id + "," + obj[id].name + "," + obj[id].price + "," + obj[id].num + "," + obj[id].src;
				}
				return cartStr;
		}
	})
})



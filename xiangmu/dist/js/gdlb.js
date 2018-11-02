/*更新如下：
1.解决了快速点击切换过快。现在连击切换有延迟。
2.解决了小圆点和左右按钮现在可以不要。而不会出现的bug
3.

*/

//1个是父级名。调用方式如下



//这是函数
function imgscrool(obj){
	
	var moving = false;		
	var width = $(obj+" .lunbo .img img").width();
	var i=0;
	var clone=$(obj+" .lunbo .img li").first().clone();
	$(obj+" .lunbo .img").append(clone);	
	var size=$(obj+" .lunbo .img li").size();	
	for(var j=0;j<size-1;j++){
		$(obj+" .lunbo .num").append("<li></li>");
	}
	$(obj+" .lunbo .num li").first().addClass("on");
	
	/*鼠标划入圆点*/
	if ($(obj+" .lunbo .num li")) {

	$(obj+" .lunbo .num li").click(function(){
		var index=$(this).index();
		i=index;
		$(obj+" .lunbo .img").stop().animate({opacity:1},1000)	
		$(this).addClass("on").siblings().removeClass("on")		
	})
	};
//处理轮播初始宽度问题	
	var a2= $(obj+" .lunbo img").width();
	var a3= $(obj+" .img li").length
	$(obj+" .lunbo .img").width(a2*a3+'px');
		
	/*自动轮播*/
	var t=setInterval(function(){
		i++;
		move();
	},2000)
		
	/*对lunbo定时器的操作*/
	$(obj+" .lunbo").hover(function(){
		clearInterval(t);
	},function(){
		t=setInterval(function(){
			i++;
			move();
		},2000)
	})
	

	
	function move(){
		
		if(i==size){
			$(obj+" .lunbo  .img").css({left:0})			
			i=1;
		}
		
		// 修改轮播每屏宽度
		if(i==-1){
			$(obj+" .lunbo .img").css({left:-(size-1)*width})
			i=size-2;
		}	
		$(obj+" .lunbo .img").stop(true).delay(200).animate({left:-i*width},1000,function(){
			moving = false;
		})
		
		if(i==size-1){
			$(obj+" .lunbo .num li").eq(0).addClass("on").siblings().removeClass("on")	
		}else{		
			$(obj+" .lunbo .num li").eq(i).addClass("on").siblings().removeClass("on")	
		}
	}	
}	
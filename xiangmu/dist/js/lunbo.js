var oHuan = document.querySelector('.huan'),
		oUl = document.querySelector('.huo');
		ajax.get('json/json.json',function(data){	
			var arr = JSON.parse(data);
			var count = null;
			oHuan.onclick = function(){	
				count++;
				if (count > 4) {
					count = 0;
				}
				
				var str = '';
				for (var j = 0,len = arr.length;j < len;j ++) {
					str += `<li>
								<a href="#" class="tu"><img src="images/${arr[count]['img' + j]}" title="${arr[count]['titleC'+j]}"/></a>
								<div class="lib">
									<a href="#" title="${arr[count]['titleC'+j]}" class="zz">${arr[count]['titleC'+j]}</a>
									<span title="编辑推荐"></span>
								</div>
							</li>`;
				}
				oUl.innerHTML = str;
			}	
		})	

[
	{
		"img0" : "41.jpg",
		"0" : "婴儿推送",
		"img1" : "42.jpg",
		"titleC1" : "婴送",
		"img2" : "43.jpg",
		"titleC2" : "婴儿",
		"img3" : "44.jpg",
		"titleC3" : "婴",
		"img4" : "45.jpg",
		"titleC4" : "婴儿推覆盖送"
		
	},{
		"img0" : "56.jpg",
		"titleC0" : "婴送",
		"img1" : "57.jpg",
		"titleC1" : "婴儿送",
		"img2" : "58.jpg",
		"titleC2" : "婴儿推送",
		"img3" : "59.jpg",
		"titleC3" : "送",
		"img4" : "60.jpg",
		"titleC4" : "推送"
		
	},{
		"img0" : "61.jpg",
		"titleC0" : "婴送",
		"img1" : "62.jpg",
		"titleC1" : "婴儿",
		"img2" : "63.jpg",
		"titleC2" : "婴儿推送",
		"img3" : "64.jpg",
		"titleC3" : "婴送",
		"img4" : "65.jpg",
		"titleC4" : "婴发过火送"
		
	},{
		"img0" : "66.jpg",
		"titleC0" : "的双方各",
		"img1" : "67.jpg",
		"titleC1" : "方式",
		"img2" : "68.jpg",
		"titleC2" : "规范化",
		"img3" : "69.jpg",
		"titleC3" : "他",
		"img4" : "70.jpg",
		"titleC4" : "个"
		
	},{
		"img0" : "71.jpg",
		"titleC0" : "让它",
		"img1" : "72.jpg",
		"titleC1" : "太容易",
		"img2" : "73.jpg",
		"titleC2" : "恶徒",
		"img3" : "74.jpg",
		"titleC3" : "而",
		"img4" : "75.jpg",
		"titleC4" : "物体移动"
		
	}
]


	var arr = [
		{"img":"images/util/bejson.png","title":"Json格式化转Bean","desc":"支持JSON格式化,JSON转Java类,树形展示等"},
		{"img":"images/util/bejson.png","title":"Easy Mock API","desc":"帮助Android开发者模拟访问的接口~Server没上线？快来试试我们的线上模拟平台吧~"},
		{"img":"images/util/bejson.png","title":"MD5,SHA等数字摘要","desc":"支持MD5,SHA1,SHA224,SHA256,SHA384,SHA512在线转化"},
		{"img":"images/util/bejson.png","title":"Base64转化","desc":"支持字符串、图文、文件等base64在线计算"},
		{"img":"images/util/bejson.png","title":"二维码生成","desc":"支持二维码在线生成，支持个性化二维码"},
		{"img":"images/util/bejson.png","title":"取色器","desc":"支持在线取色，颜色转化"},
		{"img":"images/util/bejson.png","title":"iconfont你值得拥有","desc":"图标查找"},
		{"img":"images/util/bejson.png","title":"tinypng压缩图片","desc":"图片压缩"},
		{"img":"images/util/bejson.png","title":"进制转化","desc":"支持常见进制转换，各种进制互转2转32以内，32以内转32以内"},
		{"img":"images/util/bejson.png","title":"短链接","desc":"支持长连接转化为短链接"},
		{"img":"images/util/bejson.png","title":"正则","desc":"正则表达式"},
		{"img":"images/util/bejson.png","title":"URL按序解析","desc":"有一长串复杂的URL？输入解析一下，一目了然~"},
		{"img":"images/util/bejson.png","title":"下载Studio 3.0.0","desc":"搭建环境，下载Android Studo、SDK、NDK；版本分布；屏幕尺寸和分布；"},
	];

	// <div class="child-con shadow">
 //                   <a href="#">
 //                       <img src="images/util/bejson.png" alt="">
 //                   </a>
 //                   <div class="child-desc">
 //                       <h2>Json格式转Bean</h2>
 //                       <p>
 //                           啊袈裟加欧式机按事件军军军军军军军军军军阿萨斯所所所所所所所所所所所所所所所所所所所
 //                       </p>
 //                   </div> 

 //                </div>

 	var utilCon = document.getElementById("util-ul");
 	for (var i = 0; i < arr.length; i++) {
 		var divCon = document.createElement("div");
 		divCon.className='child-con'+' '+'shadow';

 		var aimg = document.createElement("a");	
 		var imag = document.createElement("img");
 		imag.src = arr[i].img;	
 		aimg.appendChild(imag);
 		divCon.appendChild(aimg);

 		var divChild = document.createElement("div");	
 		divChild.className = "child-desc";
 		var h2 = document.createElement("h2");
 		h2.innerText = arr[i].title;
 		divChild.appendChild(h2);
 		var p = document.createElement("p");
 		p.innerText = arr[i].desc;
 		divChild.appendChild(p);
 		divCon.appendChild(divChild);

 		if(i%3==1){
 			divCon.style.marginLeft = "30px";
 			divCon.style.marginRight = "30px";
 		}else{
 			divCon.style.marginLeft = "0px";
 			divCon.style.marginRight = "0px";
 		}
 		if(i>2){
 			divCon.style.marginTop = "20px";
 		}else {
 			divCon.style.marginTop = "0px";
 		}
 		utilCon.appendChild(divCon);
 	}
 	



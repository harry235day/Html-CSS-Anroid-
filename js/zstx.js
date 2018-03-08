
	var arr1 = [ 
		"开发环境","基础知识","四大组件","常用控件","用户交互","网络访问","图片加载",
		"数据存储","动画效果","自定义控件","多媒体技术","5.+高新技术","热门专题","硬件模块",
		"JNI","常用SDK","framework","项目必备","推荐网站","延伸技术","注解 & 反射 & AOP",
		"Kotlin","Java常见源码分析","干货资源","完整开源项目","导航主Tab","开源项目主Tab",
		"原创文章"
	]; 
	var arr2 = [
		"Android Studio相关","gradle","官方发布"
	];
	var fristClass =  document.getElementById("frist-list");
	var sencondClass =  document.getElementById("sencond-list");

	for (var i = 0; i < arr1.length; i++) {
		var a = document.createElement("a");
		a.innerText = arr1[i];
		if(i==0){
			a.className = "class-tab-a";
		}else{
			a.className = "";	
		}
		fristClass.appendChild(a);

		a.onclick = function(){
			var lastCurrent = fristClass.getElementsByClassName("class-tab-a")[0];
			lastCurrent.className ="";
			this.className = "class-tab-a";
		}
	}

	for (var i = 0; i < arr2.length; i++) {
		var a = document.createElement("a");
		a.innerText = arr2[i];
		if(i==0){
			a.className = "class-tab-a";
		}else{
			a.className = "";	
		}
		sencondClass.appendChild(a);

		a.onclick = function(){
			var lastCurrent = sencondClass.getElementsByClassName("class-tab-a")[0];
			lastCurrent.className ="";
			this.className = "class-tab-a";
		}
	}
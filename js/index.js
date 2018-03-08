// window.onload = function(){
	//内容列表
	for (var i = 0; i < 10; i++) {
	    var container = document.getElementById("main-content");
	    if(container==null){
	    	break;
	    }
	    var mainContent = document.createElement("div");
	    mainContent.className = 'content-list';

	    var collectA = document.createElement("a");
	    collectA.className = 'collect-a';
	    mainContent.appendChild(collectA);
	    var contenDetail = document.createElement("div");
	    contenDetail.className = 'conten-detail';
	    mainContent.appendChild(contenDetail);

	    var h1 = document.createElement("h1");
	    h1.innerText = "标题  " + i;
	    contenDetail.appendChild(h1);
	    var pt = document.createElement("p");

	    var span1 = document.createElement("span");
	    span1.innerText = "作者：" + i;
	    pt.appendChild(span1);

	    var a1 = document.createElement("a");
	    a1.innerText = 'abcd ' + i;
	    pt.appendChild(a1);

	    var span2 = document.createElement("span");
	    span2.innerText = '分类：';
	    pt.appendChild(span2);

	    var a2 = document.createElement("a");
	    a2.innerText = 'gradle ' + i;
	    pt.appendChild(a2);

	    var span3 = document.createElement("span");
	    span3.innerText = '时间：' + i + "天前";
	    pt.appendChild(span3);

	    contenDetail.appendChild(pt);

	    container.appendChild(mainContent);
	}
	var jsonutil = [
	    "bejson", "MockApi", "md5&sha", "base64", "二维码", "取色器", "iconfont",
	    "tinyng", "进制转化", "短连接", "正则", "studio 3.0.0"
	];
	//常用工具
	for (var i = 0; i < jsonutil.length; i++) {
	    var usUtil = document.getElementById("us-util");
	    var ac = document.createElement("a");
	    ac.innerText = jsonutil[i];
	    if(null!=usUtil){
	    	usUtil.appendChild(ac);
	    }
	    
	}

	//常用链接
	var jsonurl = [
	    { "text": "国内大牛博客集合", "color": "#3367D6" }, { "text": "国外大牛博客集合", "color": "#ff0000" } ,{ "text": "鸿洋的博客", "color": "#ff0000" },
	    { "text": "郭霖的博客", "color": "#d57c0a" }, { "text": "今天最火的开源项目", "color": "#128412" },
	    { "text": "stackoverflow", "color": "#3367D6" }, { "text": "鸿洋公众号文章聚合", "color": "#ff0000" },
	    { "text": "干货集中营", "color": "#d57c0a" }, { "text": "掘金", "color": "#128412" },
	    { "text": "开发者头条", "color": "#3367D6" }, { "text": "segmentfault", "color": "#ff0000" },
	    { "text": "Android开源项目解析", "color": "#d57c0a" }, { "text": "androiddevtools", "color": "#128412" },
	    { "text": "Android开发热门专题", "color": "#3367D6" }, { "text": "Android面试相关", "color": "#ff0000" },
	    { "text": "极客导航", "color": "#d57c0a" }, { "text": "谷歌开发者中文博客", "color": "#128412" },
	    { "text": "Git在线可视化学习", "color": "#3367D6" }, { "text": "在线查看Android源码", "color": "#ff0000" },
	    { "text": "md在线编辑器", "color": "#d57c0a" }, { "text": "无版权素材网站", "color": "#128412" },
	    { "text": "素材设计", "color": "#3367D6" }, { "text": "互联网相关统计", "color": "#ff0000" }
	];

	for (var i = 0; i < jsonurl.length; i++) {
	    var usUrl = document.getElementById("us-url");
	    var ac = document.createElement("a");
	    ac.innerText = jsonurl[i].text;
	    ac.style.color = jsonurl[i].color;
	    if(null!=usUrl){
	    	usUrl.appendChild(ac);
	    }
	    
	}

	//大家都在搜索
	var jsonSearch = [
		"面试","studio3","动画","自定义View","性能优化 速度","gradle","Camera 相机","代码混淆 安全",
		"逆向 加固"
	];

	for (var i = 0; i < jsonSearch.length; i++) {
	    var usSearch = document.getElementById("us-serarch");
	    var ac = document.createElement("a");
	    ac.innerText = jsonSearch[i];
	    if(null!=usSearch){
		    usSearch.appendChild(ac);
	    }
	}

	//关闭lg 框 

	document.getElementById("close").onclick = function(){
		document.getElementById("login-dialog").style.display = "none";

	};
	document.getElementById("login").onclick = function(){
		document.getElementById("login-dialog").style.display = "block";
		document.getElementById("h1-title").innerText="登录";
		document.getElementsByName("lg-pwd")[1].style.display='none';
	};
	document.getElementById("regist").onclick = function(){
		document.getElementById("login-dialog").style.display = "block";
		document.getElementById("h1-title").innerText="注册";
		document.getElementById("confim-pwd").style.display="block";
		
	};

	function setDisplay(){
		document.getElementById("sucess-info").style.display = 'none';
		document.getElementById("login-dialog").style.display='none';
		document.getElementsByName("lg-name")[0].value = "";
		document.getElementsByName("lg-pwd")[0].value = '';
		document.getElementsByName("lg-pwd")[1].value = '';
		erroIndo.style.display = 'none';
		erroIndo.innerText="";

	}
	document.getElementById("lg-submit").onclick = function(){
		// debugger;
		var title = document.getElementById("h1-title");
		var usename = document.getElementsByName("lg-name")[0].value;
		var pwd1 = document.getElementsByName("lg-pwd")[0].value;
		var pwd2 = document.getElementsByName("lg-pwd")[1].value;
		var erroIndo = document.getElementById("erro-info");
		
		erroIndo.style.display = 'none';
		erroIndo.innerText="";
		
		if(usename===""){
			erroIndo.style.display = 'block';
			erroIndo.innerText="用户名不能为空!";
			return;
		}
		if(pwd1===""){
			erroIndo.style.display = 'block';
			erroIndo.innerText="密码不能为空!";
			return;
		}
		if(title==="注册"){
			if(pwd2===""){
				erroIndo.style.display = 'block';
				erroIndo.innerText="确认密码不能为空!";
				return;
			}
			if(pwd1!=pwd2){
				erroIndo.style.display = 'block';
				erroIndo.innerText="两次密码不一致!";
				return;
			}
		}
		
		document.getElementById("sucess-info").style.display = 'block';
		if(title==="注册"){
			document.getElementById("sucess-info").innerText ="注册成功！"
		}else {
			document.getElementById("sucess-info").innerText ="登录成功！"
		}

		
		setTimeout(setDisplay, 1100);
		

	};


	



	
// }
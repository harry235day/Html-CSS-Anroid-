	
	// window.onload = function(){
	
		
	// }

		window.onscroll = function() {
			var falg = checkouloadFlag();
			if(falg){
				loadlist();
				load();
			}
			
		}

	//是否加载更多

	function checkouloadFlag () {
		var container = document.getElementById("main-content");
		var arr = getChildElement(container,"content-list");
		var lastChild = arr[arr.length-1];
		//距离顶部的高度
		var lastChildHeight = lastChild.offsetTop;
		//滑动 距离顶部的高度
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop ;
		//拿到浏览器的高度
		var clientHeight = document.documentElement.clientHeight || document.body.clientHeight ;
		// console.log(lastChildHeight+"---"+scrollTop+'---'+clientHeight);

		if(lastChildHeight<scrollTop+clientHeight){
			return true;
		}
	}


	//拿到所有的列表中的子控件
	function getChildElement(parent,content){
		var arry = [];
		var allcontent = parent.getElementsByClassName(content);
		for (var i = 0; i < allcontent.length; i++) {
			arry.push(allcontent[i]);
		}
		return arry;
		// console.log(arry.length);
	}


	function loadlist() {
		for (var i = 0; i < 10; i++) {
	    var container = document.getElementById("main-content");
	    if(container==null){
	    	return;
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
	}

	function load(){
		// $.ajax({
		// 	url: 'http://www.wanandroid.com/article/list/'+0+'/json',
		// 	type: 'get',
		// 	dataType:'jsonp',
		// 	 jsonp:'cb',
		// 	 cache:"false",
		// 	 jsonpCallback:"getMessage", //这里定义了jsonp的回调函数 
		// 	sucess:function(result){
		// 		debugger;
		// 		console.log(result.toString());
		// 	}
		// });
		$.ajax({
                     url: "http://www.wanandroid.com/article/list/1/json",
                     type: "get",
                     dataType: "jsonp", //指定服务器返回的数据类型
                     success: function (data) {
                     	console.log(data);
                     	debugger;
                      
                    }

                    });

	}
	function getMessage(jsonp){  
				debugger;
                alert("message:"+jsonp);  
            }
	
	

	var data = [
			{"img":"images/project1.png","title":"完整开源项目","desc":"啊啊飒奥所所撒所撒所所撒撒撒撒所撒奥所","date":"2018-2-13","author":"zll","operate":"点击安装"},
			{"img":"images/project1.png","title":"完整开源项目","desc":"啊啊飒奥所所撒所撒所所撒撒撒撒所撒奥所","date":"2018-2-13","author":"zll","operate":"点击安装"},
			{"img":"images/project1.png","title":"完整开源项目","desc":"啊啊飒奥所所撒所撒所所撒撒撒撒所撒奥所","date":"2018-2-13","author":"zll","operate":"点击安装"},
			{"img":"images/project1.png","title":"完整开源项目","desc":"啊啊飒奥所所撒所撒所所撒撒撒撒所撒奥所","date":"2018-2-13","author":"zll","operate":"点击安装"},
			{"img":"images/project1.png","title":"完整开源项目","desc":"啊啊飒奥所所撒所撒所所撒撒撒撒所撒奥所","date":"2018-2-13","author":"zll","operate":"点击安装"}
		];

   var tabs = [{"title":"完整项目","id":0},{"title":"表格控件","id":1},{"title":"下拉刷新","id":2},{"title":"富文本编辑器","id":3},
               {"title":"RV列表动效","id":4},{"title":"系统源码分析","id":5},{"title":"资源整合","id":6}];


	// <ul id="project-ul" class="project-ul" >
 //                 <li>
 //                     <div class="project-li-con">
 //                        <div class="p-img"></div>
 //                        <div class="p-con">
 //                            <h3><a href="#" >Mingziaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</a></h3>
 //                            <div class="desc">
 //                                <p>啊搜集啊搜啊搜哦阿萨斯三所所所所阿萨斯三所所所所所所</p>
 //                            </div>
 //                            <p class="p-bottom">
 //                                <span>aa</span>
 //                                <span>&nbsp;&nbsp;bb</span>
 //                                <span><a href="#">&nbsp;&nbsp;cc</a></span>
 //                                <span class="collect"></span>
 //                            </p>
 //                        </div>
 //                     </div>
 //                 </li>
                
 //             </ul>
      //文章节选
         var projectUlCon = document.getElementById("project-ul");
         

         for (var i = 0 ; i < data.length; i++) {
         	
         	var liCon = document.createElement("li");	
         	if(i%2===0){
         		liCon.style.marginLeft="0%";
         	}else {
         		liCon.style.marginLeft="1%";
         	}
         	if(i>1){
         		liCon.style.marginTop="1%";
         	}
         	var divCon = document.createElement("div");
         	divCon.className="project-li-con";
         	var divImg = document.createElement("div");	
         	divImg.style.display ="inline-block";
         	divImg.className="p-img";
         	divImg.style.backgroundImage ="url("+data[i].img+")";
			divImg.style.backgroundPosition = 'center center';
			divImg.style.backgroundRepeat = 'no-repeat';
         	divCon.appendChild(divImg);

         	var divDesc = document.createElement("div");	
         	divDesc.className="p-con";
         	var h3t = document.createElement("h3");
         	var at = document.createElement("a");
         	at.innerText = data[i].title;
         	h3t.appendChild(at)	
         	divDesc.appendChild(h3t);
         	var divp = document.createElement("div");	
         	divp.className='desc';
         	var pt = document.createElement("p");
         	pt.innerText =data[i].desc;
         	divp.appendChild(pt);
         	divDesc.appendChild(divp);	
         	var pBottom = document.createElement("p");
         	pBottom.className ='p-bottom';

         	var spandate = document.createElement("span");
         	var spanauthor = document.createElement("span");
         	var spanopte = document.createElement("span");
         	var spancollect = document.createElement("span");

         	spandate.innerText = data[i].date;
         	spanauthor.innerText = data[i].author;
         	var att = document.createElement("a");	
         	att.innerText = data[i].operate;
         	att.style.color="#02247b";
         	spanopte.appendChild(att);
         	spancollect.className="collect";
         	pBottom.appendChild(spandate);
         	pBottom.appendChild(spanauthor);
         	pBottom.appendChild(spanopte);
         	pBottom.appendChild(spancollect);
         	divDesc.appendChild(pBottom);
         	divCon.appendChild(divDesc);	
         	liCon.appendChild(divCon);
         	projectUlCon.appendChild(liCon);
         }

          // <li><a href="#" class="a-active">222</a></li>   

          //tab栏

      var pTab = document.getElementById("p-tab");
      for (var i = 0; i < tabs.length; i++) {
         var liC = document.createElement("li");
         var ac = document.createElement("a");
         ac.href="#"+tabs[i].id;
         if(i==0){
            ac.className="a-active";
         }else{
            ac.className="";
         }
         ac.innerText=tabs[i].title;
         liC.appendChild(ac);
         pTab.appendChild(liC);
         ac.onclick = function(){
            var lastclassName = pTab.getElementsByClassName("a-active")[0];
            lastclassName.className = "";
            this.className="a-active";
         }
      }
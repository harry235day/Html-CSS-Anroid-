var navList = [
    "常用网站", "个人博客", "公司博客", "开发社区", "常用工具", "在线学习", "开放平台", "互联网资讯",
    "求职招聘", "应用加固", "三方支付", "推送平台", "三方分享", "地图平台", "直播SDK",
    "IM即时通讯", "Bug管理", "后端云", "WebView内核", "创意&素材", "互联网统计", "快速开发"
];

var contentList = [
    ["Google开发者", "Github", "stackoverflow", "掘金", "CSDN", "简书", "开发技术周报", "开发者头条", "segmentfault", "androiddevtools", "Google中文Blog",
        "干货集中营", "CodeKK", "小专栏", "国内大牛", "国外大牛", "Android源码", "Material", "Design", "中文版", "leetcode"
    ],

    ["罗升阳", "邓凡平", "郭霖", "鸿洋", "AigeStudio", "亓斌", "徐医生", "阮一峰", "MrSimp1e", "兰亭风雨", "胡凯", "技术小黑屋", "任玉刚", "张涛",
        "Weishu", "gityuan", "GcsSloop", "stormzhang", "尼古拉斯.赵四", "hencoder", "叫我旺仔"
    ],

    ["美团点评", "悦跑圈技术团队", "腾讯DevClub"],

    ["掘金", "开源中国", "eoe", "Android社区", "ApkBus", "中国谷歌开发者社区", "CSDN", "v2ex", "51cto", "Android论坛"],

    ["JSON格式化", "md5&sha", "base64", "二维码", "取色器", "进制转化", "iconfont", "tinypng", "在线翻译"],

    ["慕课网", "网易云课程", "极客学院", "腾讯课堂", "麦子学院", "人工智能", "牛客网", "老罗视频教程", "mars视频", "gitchat免费区"],

    ["DevStore", "bmob后端云", "fir.im", "融云", "环信", "讯飞开放平台", "Face++", "七牛云", "蒲公英", "bugly", "百度云推送", "聚合数据", "小米推送",
        "极光推送", "涂图", "腾讯信鸽", "UMeng"
    ],

    ["ReadHub", "创业邦", "36kr", "品玩", "少数派", "泡面小镇"],

    ["智联", "拉钩", "100offer", "内推网", "Boss直聘"],

    ["360加固", "网易云易盾", "爱加密"],

    ["微信", "支付宝"],

    ["小米推送", "极光推送", "华为推送", "百度云推送", "友盟"],

    ["Share SDK", "友盟分享"],

    ["高德地图", "百度地图", "腾讯地图"],

    ["七牛直播云", "腾讯直播LVB", "百度音视频LSS"],

    ["环信", "百川云旺", "融云"],

    ["腾讯Bugly"],

    ["bmob后端云", "LeanCloud"],

    ["腾讯x5"],

    ["暴走漫画制作器", "素材设计", "无版权素材站", "iconfont", "iconstore", "Material Design设计模板与素材", "awesome-design"],

    ["猎豹大数据", "百度移动统计", "友盟数据报告"],

    ["QMUI Android", "通用IM UI组件"]

];

	var iamgeList = [
		"baidu_logo.png","bing_logo.png","github_logo.png","google_logo.png","so_logo.png","sogou_logo.png",
		"weixinhao_logo.png","weixinwenzhang_logo.png"
	];

var ul = document.getElementById("nav-ul");

for (var i = 0; i < navList.length; i++) {
    var li = document.createElement("li");
    var a = document.createElement("a");
    a.innerText = navList[i];
    a.href = "#" + i;
    li.appendChild(a);
    ul.appendChild(li);
}



var navContent = document.getElementById("nav-content");

for (var i = 0; i < contentList.length; i++) {
    var contentlist = document.createElement("div");
    contentlist.className = "nav-list";
    var h1 = document.createElement("h1");
    h1.innerText = navList[i];
    h1.id = i + "";
    contentlist.appendChild(h1);
    var ul = document.createElement("ul");
    for (var j = 0; j < contentList[i].length; j++) {
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.innerText = contentList[i][j];
        li.appendChild(a);
        ul.appendChild(li);
    }
    contentlist.appendChild(ul);
    navContent.appendChild(contentlist);

}


var flag;

var navTypeImage = document.getElementsByClassName("nav-type-t")[0];
//设置搜索类型图片
var imageCon = document.getElementsByClassName("nav-type-s")[0];
for (var i = 0; i < iamgeList.length; i++) {
	var li = document.createElement("li");
	var a = document.createElement("a");
	a.style.backgroundImage ="url(images/navicon/"+iamgeList[i]+")";
	a.style.backgroundPosition = 'center center';
	a.style.backgroundRepeat = 'no-repeat';
	li.appendChild(a);
	imageCon.appendChild(li);
	a.onclick=function(){
		var url = this.style.backgroundImage;
		// navTypeImage.style.backgroundImage ="url(images/navicon/"+iamgeList[index]+")";
		navTypeImage.style.backgroundImage = url;
		navTypeImage.style.backgroundPosition = 'center center';
		navTypeImage.style.backgroundRepeat = 'no-repeat';
		imageCon.style.display = "none";
		up();

	}
}







var ivType = document.getElementsByClassName("iv")[0];

function select_type() {
    if (flag) {
    	up();
    } else {
    	down();
    }
}


function up(){
		imageCon.style.display="none";
        flag = false;
        ivType.style.border = "none";
        ivType.style.borderRight = " 5px solid transparent";
        ivType.style.borderTop = " 5px solid #adadad";
        ivType.style.borderLeft = " 5px solid transparent";
        ivType.style.marginBottom = '10px';
}

function down(){
		imageCon.style.display="block";
        flag = false;
        ivType.style.border = "none";
        ivType.style.borderRight = " 5px solid transparent";
        ivType.style.borderBottom = " 5px solid #adadad";
        ivType.style.borderLeft = " 5px solid transparent";
        ivType.style.marginBottom = '10px';
}


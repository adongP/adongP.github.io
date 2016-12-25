/*window.onhashchange = function(){
	// var hash = location.hash;//获取改变后的hash值

	// $(hash).show();
	// $(hash).siblings().hide();
	//监听hash值的改变
	var hash = location.hash;//获取改变后的hash值
	routeController.init(hash)
}
routeController.init(location.hash);
	// if(!location.hash){
	// 	location.href="#home";
	// }else{
	// 	var hash = location.hash;//获取改变后的hash值
	// 	$(hash).show();
	// 	$(hash).siblings().hide();
	// }
*/

//onhashchange存在兼容性问题，解决方法用director.js插件
var config = {
	/*'home':function(){
		routeController.init("#home")
	},
	'rank':function(){
		routeController.init("#rank")
	},
	'citylist':function(){
		routeController.init("#citylist")
	},
	'form':function(){
		routeCntroller.init("#form")
	}*/
	//以上精确匹配 太繁琐  用一下方法 模糊匹配
	// gyf:精确匹配， /:gyf ===》模糊匹配 匹配#后面的结果
	'/:gyfname':function(id){
		routeController.init(id)
	}
}
var t =new Router(config);
t.init('home');
window.onhashchange = function(){
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
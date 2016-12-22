window.onhashchange = function(){
	var hash = location.hash;//获取改变后的hash值

	$(hash).show();
	$(hash).siblings().hide();
}
	if(!location.hash){
		location.href="#home";
	}else{
		var hash = location.hash;//获取改变后的hash值
		$(hash).show();
		$(hash).siblings().hide();
	}
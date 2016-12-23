//路由

	var routeController=(function(){
			//组合这些模块
		var pevModule;//当前一个模块
		var curModule;//当前模块
		//创建一个hash值与模块的映射关系表
		var HashModuleMap = {
		'home':homeObj,
		'rank':rankObj,
		'citylist':citylistObj,
		'form':formObj
	}


	function initMethod(hashName){
		//hashName 改变的hash值 
		hashName = hashName||'#home';
		hashName = hashName.slice(1);
		//如果第一次进入首页，当前模块不存在 当前模块 = 首页对象
		prevModule = curModule;
		curModule = HashModuleMap[hashName];

		if(prevModule){
			prevModule.leave(); //homeObj.leave()
		}
		curModule.enter();//首页离开，排名页展示
	}
	return{
		init:initMethod
	}
	})();



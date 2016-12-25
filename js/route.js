

var routeController=(function(){
		//路由
			//组合这些模块
		var prevModule;//当前一个模块
		var curModule;//当前模块
		//创建一个hash值与模块的映射关系表
		var HashModuleMap = {
			'home':homeObj,
			'rank':rankObj,
			'form':formObj,
			'citylist':citylistObj
			
		}
		var initMap = {

		}

		function initMethod(hashName){
			//hashName 改变的hash值 
			// hashName = hashName||'#home';
			// hashName = hashName.slice(1);
				var module = HashModuleMap[hashName] || HashModuleMap['home'];
			//如果第一次进入首页，当前模块不存在 当前模块 = 首页对象
			prevModule = curModule;
			curModule = module ;

			if(prevModule) {
			prevModule.leave();//homeObj.leave();
			}
			curModule.enter(); //首页离开，排名页展示

			if(!initMap[hashName]){

				curModule.init();
				initMap[hashName] = true;
			}
		}
		return {
			init:initMethod
		}
			
})();



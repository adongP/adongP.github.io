var formObj = Object.create(homeObj);
// formObj.name = "表单页";

// formObj.dom = "#formObj";
//$.extent 可以将两个不同的对象合并成一个 如果属性相同，后面的会覆盖前面的

formObj = $.extend(formObj,{
	name:'表单页',
	dom:$('#form'),
	list:$('.flist'),
	init:function(){
		console.log('我进行了初始化')
		this.bindEvent();
	},
	bindEvent:function(){
		var me = this;
		$("#elm").click(function(){
			me.elmSearch();
		});
		$("#bsearch").click(function(){
			me.baiduSearch();
		});
		$("#msearch").click(function(){
			me.mSearch();
		});
	},
	mSearch:function(){
		/*var me = this;
		//提前将想后端传入的回调函数名称进行声明：
		function nice(obj){
			console.log('获取后端的数据',obj);
			var str = '';
			var list = obj.pois;
			for(var i = 0; i<list.length; i++){
			 	str += '<li>' + list[i].address +"</li>"
			 }
			  me.list.html(str);
		}
		window.nice = nice;
		//动态加载script标签
		var script = document.createElement('script');
		script.src ="https://restapi.amap.com/v3/place/text?s=rsv3&children=&key=3f3868abdb36336114bde5ab6eecdb68&types=%E5%95%86%E5%8A%A1%E4%BD%8F%E5%AE%85%7C%E5%AD%A6%E6%A0%A1%E4%BF%A1%E6%81%AF%7C%E7%94%9F%E6%B4%BB%E6%9C%8D%E5%8A%A1%7C%E5%85%AC%E5%8F%B8%E4%BC%81%E4%B8%9A%7C%E9%A4%90%E9%A5%AE%E6%9C%8D%E5%8A%A1%7C%E8%B4%AD%E7%89%A9%E6%9C%8D%E5%8A%A1%7C%E4%BD%8F%E5%AE%BF%E6%9C%8D%E5%8A%A1%7C%E4%BA%A4%E9%80%9A%E8%AE%BE%E6%96%BD%E6%9C%8D%E5%8A%A1%7C%E5%A8%B1%E4%B9%90%E5%9C%BA%E6%89%80%7C%E5%8C%BB%E9%99%A2%E7%B1%BB%E5%9E%8B%7C%E9%93%B6%E8%A1%8C%E7%B1%BB%E5%9E%8B%7C%E9%A3%8E%E6%99%AF%E5%90%8D%E8%83%9C%7C%E7%A7%91%E6%95%99%E6%96%87%E5%8C%96%E6%9C%8D%E5%8A%A1%7C%E6%B1%BD%E8%BD%A6%E6%9C%8D%E5%8A%A1&offset=10&city=%E4%B8%8A%E6%B5%B7&page=1&language=zh_cn&callback=nice&platform=JS&logversion=2.0&sdkversion=1.3&appname=http%3A%2F%2Fi.waimai.meituan.com%2Fshanghai%3Fcity_id%3D310100&csid=702ED579-5C7E-4B40-91D8-5D3C0A1922C0&keywords=t" + $('#city_name').val(),
		document.body.appendChild(script);	*/
		var me = this;
		$.ajax({
			url:'https://restapi.amap.com/v3/place/text',
			
			data:{
				s:'rsv3',
				children:'',
				key:'3f3868abdb36336114bde5ab6eecdb68',
				types:'商务住宅|学校信息|生活服务|公司企业|餐饮服务|购物服务|住宿服务|交通设施服务|娱乐场所|医院类型|银行类型|风景名胜|科教文化服务|汽车服务',
				offset:10,
				city:'上海',
				page:1,
				language:'zh_cn',
				platform:'JS',
				logversion:'2.0',
				sdkversion:'1.3',
				appname:'http://i.waimai.meituan.com/shanghai?city_id=310100',
				csid:'D49180A7-2779-483F-AF3A-B9F3F0550D9D',
				keywords:$("#city_name").val()
			},
			dataType: "json",
			callback:'nice',
			success:function(obj){
					console.log('获取后端的数据', obj);
					
			}

		})
	},
	baiduSearch:function(){
		var me = this;
		$.ajax({
			url:'/waimai',
			type:'get',
			dataType: "json",
			data:{
				qt:'poisug',
				wd:$("#city_name").val(),
				cb:'suggestion_1482583520864',
				cid:'289',
				b:'',
				type:0,
				newmap:1,
				ie:'utf-8',
				
			},
			success:function(res){
				var str = '';
				var list = res.s;
				console.log(res);
				for(var i = 0; i<list.length; i++){
				 	str += '<li>' + list[i] +"</li>"
				 }
				  me.list.html(str);
			},
			error:function(){
				console.log("失败");
			}
		})
	},
	elmSearch:function(){
		var me = this;
		$.ajax({
			url:'/v1/pois',
			data:{
				city_id:1,
				keyword:$("#city_name").val(),
				type:'search'
			},
			type:'get',
			success:function(res){
				 var str = "";
				console.log('成功拿到数据',res);
				 for(var i = 0; i<res.length; i++){
				 	str += '<li>' +res[i].address;+"</li>"
				 }
				 me.list.html(str);
			}
		})
	}
})

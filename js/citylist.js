var citylistObj = Object.create(homeObj);
// citylistObj.name = "城市选择页";
// citylistObj.dom = "#citylist";
// $.extend 可以将2个不同的对象合并成一个，如果属性相同，后一个会覆盖前一个
citylistObj = $.extend(citylistObj,{
	name:"城市选择页",
	dom:$("#citylist"),
	init:function(){
		this.renderHotCity();
		this.renderGroupCity();
	},
	bindEvent:function(){
		
	},
	renderHotCity:function(){
		$.ajax({
			url:'/v1/cities?type=hot',
			type:'get',
			success:function(res){
				
				var list = $('#hotcity');
				var str = '';
				for(var i=0; i<res.length; i++){
					str +="<li>"+ res[i].name +"</li>"
				}
				list.html(str);
				
			},
			error:function(){
				console.log('失败');
			}
		})
	},
	renderAlList:function(data){
		var list = $('.al-list');
		var str = '';
		for(var i=0; i<data.length; i++){
			str +="<li>"+ data[i] +"</li>"
		}
		list.html(str);
	},
	renderGroupCity:function(){
		var me = this;
		$.ajax({
			url:'v1/cities?type=group',
			type:'get',
			success:function(res){
				console.log(res);
				var allist = [];//城市列表
				for(var key in res){
					allist.push(key)
				}
				 allist.sort();
				 me.renderAlList(allist); 
				console.log(allist);
			},
			error:function(){
				console.log('失败');
			}
		})
	}
})
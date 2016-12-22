var rankObj = Object.create(homeObj);
// rankObj.name = "排名页";
// rankObj.dom="#rank";
//$.extend 可以将2个不同对象合并成一个，如果属性相同，后一个会覆盖前一个
rankObj = $.extend(rankObj,{
	name:'排名页',
	dom:$('#citylist')
})
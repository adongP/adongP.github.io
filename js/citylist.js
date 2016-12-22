var citylistObj = Object.create(homeObj);
// citylistObj.name = "城市选择页";
// citylistObj.dom = "#citylist";
// $.extend 可以将2个不同的对象合并成一个，如果属性相同，后一个会覆盖前一个
citylistObj = $.extend(citylistObj,{
	name:"城市选择页",
	dom:$("#citylist")
})
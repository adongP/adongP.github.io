var homeObj = {
	name:'首页',
	dom:$("#home"),

	init:function(){
		this.bindEvent();
	},
	bindEvent:function(){
		var me = this;
		this.dom.click(function(){
			console.log(me.name,'被点击了');
		})
		
	},
	enter:function(){
		console.log('进入');
		this.dom.show();
	},
	leave:function(){
		this.dom.hide();
	}
}

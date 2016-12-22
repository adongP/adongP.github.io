var homeObj = {
	name:'首页',
	dom:$("#home"),
	init:function(){
		this.bindEvent();
	},
	bindEvent:function(){
		this.dom.addEventListener('click',function(){
			console.log(this.name,'被点击了');
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

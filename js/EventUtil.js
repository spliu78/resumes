//跨浏览器事件对象
var EventUtil = {
	//添加事件
	addHandler: function(element, type, handler){
		if (element.addEventListener){
			element.addEventListener(type, handler, false);
		} else if(element.attachEvent){
			element.attachEvent("on" + type , handler);
		} else {
			element["on" + type] = handler;
		}
	},
	//获取事件
	getEvent: function(event){
		return event ? event : window.event;
	},
	//获取事件目标
	getTarget: function(event){
		return event.target || event.srcElement;
	},
	//获取字符编码
	getCharCode: function(event){
		if (typeof event.charCode == "number"){
			return event.charCode;
		} else {
			return event.keyCode;
		}
	},
	//获取剪贴板内容
	getClipboardText: function(event){
		var clipboardData = (event.clipboardData || window.clipboardData);
		return clipboardData.getData("text");
	},
	//取消事件
	removeHandler: function(element, type, handler){
 		if (element.removeEventListener){
			element.removeEventListener(type, handler, false);
		} else if(element.detachEvent){
			element.detachEvent("on" + type, handler);
		} else {
			element["on" + type] = null;
		}
	},
	//设置剪贴板内容
	setClipboardText: function(event,value){
		if(event.clipboardData){
			return event.clipboardData.setData("text/plain",value);//for Safari & Chrome ect
		} else if(window.clipboardData){
			return window.clipboardData.setData("text",value);//for IE
		} else {
			return null;
		}
	},
	//取消进一步捕获或者冒泡
	stopPropagation: function(event){
		if (event.stopPropagation){
			event.stopPropagation();
		} else {
			event.cancelBubble = true;
		}
	},
	//取消事件默认行为
	preventDefault: function(event){
		if (event.preventDefault){
			event.preventDefault();
		} else{
			event.returnValue = false;
		}
	}
};
// var _ = EventUtil;
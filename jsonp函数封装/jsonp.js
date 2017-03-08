function jsonp(json){
	var opt = {
		//接口
		url:json.url || '',
		//发给后端数据
		data:json.data||{},
		//请求成功
		success:json.success || function(){},
		//cb||callback
		callback:json.callback || 'callback'
	}
	var arr = [];
	//创建一个随机的函数名。
	var fnName = 'miaov'+Math.random();
	fnName = fnName.replace('0.','')+'_'+ (+new Date());
	//方便全局拿到把fnName挂到window
	window[fnName] = function(data){
		opt.success(data);
	};
	opt.data[opt.callback] = fnName;
	for(var attr in opt.data){
		arr.push(attr +'='+ encodeURI(opt.data[attr]));
	}
	opt.data = arr.join('&');
	//动态创建script标签
	var oS = document.createElement('script');
	//赋值接口
	oS.src = opt.url + '?' + opt.data;
	//插入后删掉
	document.getElementsByTagName('head')[0].appendChild(oS);
	document.getElementsByTagName('head')[0].removeChild(oS);
}
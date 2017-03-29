function getTag(name,obj){
	obj = obj || document;
	var t = name.charAt(0);
	var tag = name.substring(1);
	if(t == '#'){
		return document.getElementById(tag);
	}else if(t == '.'){
		var arr = [];
		var eles = obj.getElementsByTagName('*');
		for(var i=0;i<eles.length;i++){
			var s = eles[i].className.split(' ');
			console.log(s)
			for(var j=0;j<s.length;j++){
				if(s[j] == tag){
					arr.push(eles[i]);
				}
			}
		}
		return arr;
	}else{
		return obj.getElementsByTagName(name);
	}
}
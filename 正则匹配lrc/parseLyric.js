function parseLyric(lrc){
	var lyrics = lrc.split('\n');
	var lrcArr = [];
	for (var i=0; i<lyrics.length; i++) {
		var lrcObj = {};
		lrcObj.id = i;
		var lyric = lyrics[i];
		var timeReg = /\[\d*:\d*((\.|\:)\d*)*\]/g;
		var timeArr = lyric.match(timeReg);
		if (!timeArr) {
			continue;
		}
		lrcObj.clause = lyric.replace(timeReg,'');
		for (var k=0; k<timeArr.length; k++) {
			var t = timeArr[k];
			var m = Number(String(t.match(/\[\d*/i)).slice(1)),
				s = Number(String(t.match(/\:\d*/i)).slice(1));
				lrcObj.time = m * 60 + s;
			}
			lrcArr.push(lrcObj);
		}
		return lrcArr;
}
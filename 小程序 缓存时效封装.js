//设置缓存-----------put(k, v, t)
//k为key，v为具体内容（支持字符串、json、数组、boolean等等），t为可选参数表示有效时间（单位：秒）如存储k为123过期时间1秒，
//则调用put('k', '123', 1)方法；若永久存储调用put('k', '123') 永久保存json：put('k', {"a":"1"})，数组、boolean等同理。

function put(k, v, t) {
	wx.setStorageSync(k, v)
	var seconds = parseInt(t);
	if(seconds > 0) {
		var timestamp = Date.parse(new Date());
		timestamp = timestamp / 1000 + seconds;
		wx.setStorageSync(k + dtime, timestamp + "")
	} else {
		wx.removeStorageSync(k + dtime)
	}
}

//读取缓存-----get(k, def)-------def(自定义读取失败的默认值)
//k为key，def为可选参数，表示无缓存数据时返回值（支持字符串、json、数组、boolean等等）
//如读取k缓存，则调用get('k')；若想要无缓存时，返回默认值则get('k','默认值')，支持各个数据类型。

function get(k, def) {
	var deadtime = parseInt(wx.getStorageSync(k + dtime))
	if(deadtime) {
		if(parseInt(deadtime) < Date.parse(new Date()) / 1000) {
			if(def) {
				return def;
			} else {
				return;
			}
		}
	}
	var res = wx.getStorageSync(k);
	if(res) {
		return res;
	} else {
		return def;
	}
}
/*remove(k) 移除某个keyclear() 清空所有key*/
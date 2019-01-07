$.ajaxSetup({
	complete: function(xhr, status) {
		var sessionStatus = xhr.getResponseHeader('sessionstatus');
		if(sessionStatus == 'timeout') {
			var top = getTopWinow();
			var yes = confirm('由于您长时间没有操作, session已过期, 请重新登录.');
			if(yes) {
				top.location.href = '/skynk/index.html';
			}
		}
	}
});

// 获取当前窗口顶层对象
function getTopWinow() {
	var p = window;
	while(p != p.parent) {
		p = p.parent;
	}
	return p;
}
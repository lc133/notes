// ie8下不支持parent.document.getElementsByClassName("**");
$(window.parent.document).find(selector);
$("#父窗口元素ID",window.parent.document);
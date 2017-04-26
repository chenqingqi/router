/**
 * 定义路由功能
 */
window.onpopstate = function(e)
{
	var event  = document.createEvent('HTMLEvents');
	event.initEvent('routerchange',false,true);  
	event.data = location.href.slice(location.href.indexOf('#')+1,location.href.length);
	this.dispatchEvent(event);
}




/**
 * 此代码为轮播代码，利用jquery制作
 */



var cArr=["p3","p2","p1"];
var index=0;
//上一张
function previmg(){
	cArr.unshift(cArr[2]);
	cArr.pop();
	//i是元素的索引，从0开始
	//e为当前处理的元素
	//each循环，当前处理的元素移除所有的class，然后添加数组索引i的class
	$("#content1 li").each(function(i,e){
		$(e).removeClass().addClass(cArr[i]);
	})
	index--;
	if (index<0) {
		index=2;
	}
}
//下一张
function nextimg(){
	cArr.push(cArr[0]);
	cArr.shift();
	$("#content1 li").each(function(i,e){
		$(e).removeClass().addClass(cArr[i]);
	})
	index++;
	if (index>2) {
		index=0;
	}
}
//点击class为p2的元素触发上一张照片的函数
$(document).on("click",".p1",function(){
	previmg();
	return false;//返回一个false值，让a标签不跳转
});
//点击class为p4的元素触发下一张照片的函数
$(document).on("click",".p3",function(){
	nextimg();
	return false;
});
//			鼠标移入box时清除定时器
$(".box").mouseover(function(){
	clearInterval(timer);
});
//			鼠标移出box时开始定时器
$(".box").mouseleave(function(){
	timer=setInterval(nextimg,4000);
});
//			进入页面自动开始定时器
timer=setInterval(nextimg,4000);
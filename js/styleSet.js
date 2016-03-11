/**
 * Created by truemenhale on 16/3/10.
 */
$(function(){
	//题板高度
	var Board = $('.questionBoard');
	Board.css('height', $(window).height()*0.55);
	//题数居中
	var Qnum = $('.QNum');
	Qnum.css('left',$(window).width()*0.42);
	//分版居中
	var scoreBoard = $('.Scoretips');
	scoreBoard.css('left',$(window).width()*0.05);
	//下一轮按钮居中
	var nextBtn = $('.nextBtn');
	nextBtn.css('left',$(window).width()*0.25);
	//分数显示
	var sUl = $('.scoreShow');
	var asNum = sUl.find('li');
	sUl.css('left',$(window).width()*0.225);
	asNum.css('margin-left',$(window).width()*0.0765);
	asNum.eq(0).css('margin-left',0);
	//游戏结束
	var overBoard = $('.gameOver');

	overBoard.css('left',$(window).width()*0.225);
});
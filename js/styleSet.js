/**
 * Created by truemenhale on 16/3/10.
 */
$(function(){
	//题板高度
	var Board = $('.questionBoard');
	Board.css('height', $(window).height()*0.55);
	//题数居中
	var Qnum = $('.QNum');
	var this_W = Qnum.width();
	Qnum.css('left',($(window).width()-this_W)/2);
	//分版居中
	var scoreBoard = $('.Scoretips');
	var W_this = scoreBoard.width();
	console.log(W_this);
	scoreBoard.css('left',$(window).width()*0.05);
});
/**
 * Created by truemenhale on 16/3/10.
 */
$(function(){
	//页面交互
	var toGamePage = $('.beginBtn');
	toGamePage.on('tap',function(){
		$.mobile.changePage('#GamePage',{
			transition:'flow'
		});
	});
	//提交答案
	var aS = $('.Qselecter').find('li');
	var nextBtn = $('.nextBtn');
	var scoreBoard = $('.Scoretips');
	aS.on('tap',function(){
		scoreBoard.removeClass('bounceOut');
		scoreBoard.css('display','block');
		scoreBoard.addClass('bounceIn');
	});
	nextBtn.on('tap',function(){
		scoreBoard.removeClass('bounceIn');
		scoreBoard.addClass('bounceOut');
		setTimeout(function(){
			scoreBoard.css('display','none');
		},500);
	})
});
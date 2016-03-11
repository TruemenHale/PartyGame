/**
 * Created by truemenhale on 16/3/10.
 */
$(function(){
	//页面交互
	var toGamePage = $('.beginBtn');
	toGamePage.on('tap',function(){
		QuestionLoading();
		//$.mobile.loading('show');
	});
	//提交答案
	var aS = $('.Qselecter').find('li');
	var nextBtn = $('.nextBtn');
	var scoreBoard = $('.Scoretips');
	var numH = $('.num');
	var oMask = $('.mask');
	var scoreShow = $('.scoreNum');
	var timeShow = $('.time');
	var rightNum = $('.rightQ');
	aS.on('tap',function(){
		if($(this).attr('right') == "1"){
			score = 100+score;
			$('.right').html("积分:"+score);
			rightQ++;
		}
		NumQ+=1;
		if(NumQ == 5){
			NumQ = 0;
			stateNum++;
			if(stateNum == 3){
				scoreA.push(score);
				rightA.push(rightQ);
				gameOver(nextBtn);
			}
			flag = state[stateNum];
			oMask.css('display','block');
			scoreShow.html(score);
			rightNum.html(rightQ);
			scoreBoard.removeClass('bounceOut');
			scoreBoard.css('display','block');
			scoreBoard.addClass('bounceIn');
		}
		numH.html(NumQ+1);
		switch (flag){
			case "first":
				ChangeQuestion(_data.first[NumQ]);
				break;
			case "second":
				ChangeQuestion(_data.second[NumQ]);
				break;
			default:
				ChangeQuestion(_data.third[NumQ]);
		}
	});
	nextBtn.on('tap',function(){
		oMask.css('display','none');
		scoreBoard.removeClass('bounceIn');
		scoreBoard.addClass('bounceOut');
		setTimeout(function(){
			scoreBoard.css('display','none');
		},500);
		$('.right').html("积分:"+0);
		scoreA.push(score);
		rightA.push(rightQ);
		rightQ = 0;
		score = 0;
	})
});
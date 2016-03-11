/**
 * Created by truemenhale on 16/3/11.
 */
var flag = "first";
var score = 0;
var scoreA = [];
var rightQ = 0;
var NumQ = 0;
var stateNum = 0;
var state = ['first','second','third'];
var rightA = [];
function QuestionLoading(){
    _data = getQuestion();
    ChangeQuestion(_data.first[0]);
    $.mobile.changePage('#GamePage',{
        transition:'flow'
    });
}
function ChangeQuestion(obj){
    var Qwords = $('.Qwords');
    var aLi = $('.Qselecter').find('li');
    for(var i=0; i<3; i++){
        aLi.eq(i).attr('right',0);
        aLi.eq(i).html(obj[i+1]);
    }
    aLi.eq(parseInt(obj.correct)-1).attr('right',1);
    Qwords.html("&nbsp;&nbsp;"+obj.question);
}
function gameOver(nextBtn){
    nextBtn.off('tap');
    nextBtn.on('tap',function(){
        $.mobile.changePage('https://www.baidu.com/');
    });
    var score = eval(scoreA.join('+'));
    console.log(score);
    $('.nextBtn').html('查看总排名');
    $('.gameOver').css('display','block');
    $('.gameOver').find('.overScore').html(score);
    $('.scoreShow').css('display','none');
}

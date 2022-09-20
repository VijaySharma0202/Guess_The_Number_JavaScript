let score=20;
let Hscore=0;
let Ran=Math.floor(Math.random()*20) + 1;
document.querySelector('.check').addEventListener('click',
function mains(){
    let inp = Number(document.querySelector('.guess').value);
    if(!inp){
        document.querySelector('.message').innerHTML="No number";
    }
    else if(inp>Ran){
        if(score>0){
        document.querySelector('.message').innerHTML="You Guessed Higher Number";
        score--;
        document.querySelector('.score').innerHTML=score;}
        else{document.querySelector('.message').innerHTML="Game Over";
    }
    }
    else if(inp<Ran){
        if(score>0){
        document.querySelector('.message').innerHTML="You Guessed Lower Number";
        score--;
        document.querySelector('.score').innerHTML=score;}
        else{document.querySelector('.message').innerHTML="Game Over";
    }
    }
    else{
        document.querySelector('.message').innerHTML="You Guessed Right Number";
        document.querySelector('.number').innerHTML=Ran;
        if(Hscore<score){
            Hscore=score;
            document.querySelector('.highscore').innerHTML=score;
        }
        document.querySelector('body').style.backgroundColor= 'green';
    }
});
document.querySelector('.again').addEventListener('click',function again(){
    let Ran=Math.floor(Math.random()*20) + 1;
    score=20;
    document.querySelector('.message').textContent='Start guessing...';
    document.querySelector('.number').textContent='?';
    document.querySelector('body').style.backgroundColor= '#222';
    document.querySelector('.guess').value='';
    document.querySelector('.score').innerHTML=score;

});

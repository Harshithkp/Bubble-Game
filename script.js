var hitttt=0;
function makebubble(){
    var clutter="";
    for(var i=1;i<=60;i++){
    var an=Math.floor(Math.random()*10);
    clutter+=`<div class="bubble">${an}</div>`;

}
document.querySelector("#pbtm").innerHTML = clutter;
}
var Timer=10;
function runtimer(){
    setInterval(function(){
        if(Timer>0){
        Timer--;
        document.querySelector("#timervalue").textContent=Timer;
        }else{
            clearInterval(Timer);
            document.querySelector("#pbtm").textContent="ಮುಚ್ಕೊಂಡು ಹೋಗು ನಿನ್ ಹತ್ರ ಆಗಲ್ಲ";
        }
    },1000)
}
function hitter(){
  hitttt  =Math.floor(Math.random()*10);
    document.querySelector("#hitterval").textContent=hitttt;

}
var score=0;
function increaseScore(){
    score+=10;
    document.querySelector("#scoreval").textContent=score;
}
document.querySelector("#pbtm").addEventListener("click", function(dets){
    var clickedNum = Number(dets.target.textContent);  
    console.log(clickedNum);  
    
    if(clickedNum === hitttt){  
        increaseScore();
        makebubble();
        hitter();
    }
});


hitter();
runtimer();
makebubble();

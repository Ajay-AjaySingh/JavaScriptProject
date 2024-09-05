const timeInput=document.getElementById("timeInput");

const startButton=document.getElementById("startButton");

let timer=document.getElementById("timer");

startButton.addEventListener("click",function(){
    let timeCountdown=parseInt(timeInput.value);
    timer.textContent=timeCountdown;
    if(isNaN(timeCountdown) || timeCountdown<=0){
        alert("Enter Valid Number of Seconds");
        return;
    }

    let countDownInterval=setInterval(function(){
        timeCountdown--;
        timer.textContent=timeCountdown;

        if(timeCountdown<=0){
            clearInterval(countDownInterval);
            timer.textContent="Time\s up!";
        }
    },1000);
    timeInput.value='';
});
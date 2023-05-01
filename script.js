// Defining our constants
const daysE1=document.getElementById('days');
const hoursE1=document.getElementById('hours');
const minutesE1=document.getElementById('minutes');
const secondsE1=document.getElementById('seconds');

// Here you give your birthday 
const birthday= "6 mar 2024";

function countdown(){
    const birthdayDate= new Date(birthday);
    const currentDate= new Date();
    const diff= birthdayDate-currentDate;
    const tolalSeconds= Math.floor(diff/1000);
    const days= Math.floor(tolalSeconds/3600/24);
    const hours= Math.floor(tolalSeconds/3600)%24;
    const minutes=Math.floor(tolalSeconds/60)%60;
    const seconds= Math.floor(tolalSeconds%60);
    daysE1.innerHTML=days;
    hoursE1.innerHTML=formatTime(hours);
    minutesE1.innerHTML=formatTime(minutes);
    secondsE1.innerHTML=formatTime(seconds);
}

function formatTime(time){
    return time<10? `0${time}`:time
}
//intial call
countdown();
setInterval(countdown, 1000 ); 
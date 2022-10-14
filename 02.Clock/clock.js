const secondsHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');


function setDate() {
  const now = new Date();

    const seconds = now.getSeconds();                               // getSeconds() is a method of Date.prototype accessed thru now
    const secondsDegrees = ((seconds / 60) * 360) + 90;             // +90 to copensate for the transform property offset done in css .hand
    secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360 ) + ((seconds/60)*6) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hours = now.getHours();
    console.log(hours);
    const hoursDegrees = ((hours / 12) * 360 )  + ((mins/60)*30) +90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

 }

setInterval(setDate , 1000)                                         // call the function every second

setDate();

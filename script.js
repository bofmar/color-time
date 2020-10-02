const clock = document.querySelector("time");
const body = document.querySelector("body");

function getTime(){
    const now = new Date;

    let seconds = now.getSeconds();
    let minutes = now.getMinutes();
    let hours = now.getHours();

    if(seconds.toString().length === 1){
        seconds = "0" + now.getSeconds();
    }
    if(minutes.toString().length === 1){
        minutes = "0" + now.getMinutes();
    }

    clock.textContent = `${hours}:${minutes}:${seconds}`;
    changeColor(hours,minutes,seconds);
}

function changeColor(hours,minutes,seconds){
    const timeString = `#${hours}${minutes}${seconds}`;
    console.log(timeString);

    body.style.backgroundColor = timeString;
}

setInterval(getTime,1000);
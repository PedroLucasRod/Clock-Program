function updateClock(){
    const now = new Date();
    let hours = now.getHours();
    const meridiem = hours >=12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, 0);
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);
    const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;
    document.getElementById("clock").textContent = timeString;
}

updateClock();
setInterval(updateClock, 1000);

const display = document.getElementById("display");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start(){
    if(!isRunning){
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;
    }
    
    
}

function stop(){
    if(isRunning){
        clearInterval(timer);
        elapsedTime = Date.now - startTime;
        isRunning = false;
    }

}

function reset(){
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    display.textContent = "00:00:00:00";
}

function update(){
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hoursSW = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutesSW = Math.floor(elapsedTime / (1000 * 60) % 60);
    let secondsSW = Math.floor(elapsedTime / 1000 % 60);
    let milisecondsSW = Math.floor(elapsedTime % 1000 / 10);

    hoursSW = String(hoursSW).padStart(2, "0");
    minutesSW = String(minutesSW).padStart(2, "0");
    secondsSW = String(secondsSW).padStart(2, "0");
    milisecondsSW = String(milisecondsSW).padStart(2, "0");

    display.textContent= `${hoursSW}:${minutesSW}:${secondsSW}:${milisecondsSW}`;
}

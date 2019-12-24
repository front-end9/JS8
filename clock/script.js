const root = document.getElementById('root');
const arrowSec = document.getElementById('arrowSec');
const arrowMin = document.getElementById('arrowMin');

setInterval(() => {
    let time = new Date();
    let sec = time.getSeconds();
    let angleSec = sec * (360 / 60);
    let min = time.getMinutes();
    let angleMin = min * (360 / 60);
    arrowSec.style.transform = `rotateZ(${angleSec}deg)`;
    arrowMin.style.transform = `rotateZ(${angleMin}deg)`;
}, 1000);
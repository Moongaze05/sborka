import { renderTime, time } from './common.js';
import { audioPlay } from './audio.js';

let minsValue = document.getElementById('mins');

let start = document.getElementById('start');
let stop = document.getElementById('stop');
// let audio = new Audio('audio.wav')

start.addEventListener('click', function(event) {
    event.preventDefault();
    let allTime = +minsValue.value * 60;
    startTimer(allTime);
});


function startTimer(allTime) {
    let timer = setInterval(function() {
        let secs = allTime % 60;
        let hours = allTime / 60 / 60 % 60;
        let mins = allTime / 60 % 60;
        if (allTime < 0) {
            clearInterval(timer);
            // audio.play();
            audioPlay();
        } else {
            renderTime(hours, mins, secs);
        }
        --allTime;
        stop.addEventListener('click', function() {
            clearInterval(timer);
            time.innerHTML = `Осталось: 0:0:0`
        });
    }, 1000)
}
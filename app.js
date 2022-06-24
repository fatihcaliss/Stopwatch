const min = document.getElementById("min");
const sec = document.getElementById("sec");
const salise = document.getElementById("salise");
const play = document.getElementById("play");
const stop = document.getElementById("stop");
let interval;

play.addEventListener("click", () => {
    if (play.innerText == "Play") {
        play.innerText = "Pause";
        interval = setInterval(stopwatch, 10)
    }else {
        clearInterval(interval);
        play.innerText = "Play";
    }
}
);

stop.addEventListener("click", () => {
    clearInterval(interval);
    salise.innerText = "00";
    sec.innerText = "00";
    min.innerText = "00";
    play.innerText = "Play";

});

function stopwatch() {
    salise.innerText++;
    if (salise.innerText == 100) {
        salise.innerText = "00";
        sec.innerText++;
        if(sec.innerText < 10){
            sec.innerText = "0" + sec.innerText;
        }
        if (sec.innerText == 60) {
            sec.innerText = "00";
            min.innerText++;
            if(min.innerText < 10){
                min.innerText = "0" + min.innerText;
            }
        }
    }
}

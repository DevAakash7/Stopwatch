window.onload = function () {

    let mili = 0;
    let seconds = 0;
    let minutes = 0;
    let hours = 0;

    let ms = document.getElementById("mili");
    let s = document.getElementById("seconds");
    let m = document.getElementById("minutes");
    let h = document.getElementById("hours");


    let  buttonStart = document.getElementById("button-start");
    let  buttonStop = document.getElementById("button-stop");
    let  buttonReset = document.getElementById("button-reset");

    let Interval;

    buttonStart.onclick = function () {
        clearInterval(Interval);
        Interval = setInterval(timerEngine, 10);
    }

    buttonStop.onclick = function () {
        clearInterval(Interval);
    }

    buttonReset.onclick = function () {
        clearInterval(Interval);
        mili = 0;
        seconds = 0;
        ms.innerHTML = "00";
        s.innerHTML = "00";
        m.innerHTML = "00";
        h.innerHTML = "00";
    }    

    function timerEngine () {
        mili++;

        if (mili == 100) {
            seconds++;
            mili = 0;
        }

        if (seconds == 60) {
            minutes++;
            seconds = 0;
        }

        if (minutes == 60) {
            hours++;
            minutes = 0;
        }

        // condition for values update

        h.innerHTML = hours < 10 ? "0" + hours : hours;
        m.innerHTML = minutes < 10 ? "0" + minutes : minutes;
        s.innerHTML = seconds < 10 ? "0" + seconds : seconds;
        ms.innerHTML = mili < 10 ? "0" + mili : mili;

        /*if (hours < 10) {
            h.innerHTML = "0" + hours;
        }
        else {
            h.innerHTML = hours;
        }

        if (minutes < 10) {
            m.innerHTML = "0" + minutes;
        }
        else {
            m.innerHTML = minutes;
        }

        if (seconds < 10) {
            s.innerHTML = "0" + seconds;
        }
        else {
            s.innerHTML = seconds;
        }

        if (mili < 10) {
            ms.innerHTML = "0" + mili;
        }
        else{
            ms.innerHTML = mili;
        }*/
    }

}
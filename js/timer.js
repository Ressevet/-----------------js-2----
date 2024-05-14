function startTimer(idValue, value, time) {
    var counter = 0;
    var timerElement = document.getElementById(IdValue);
    var interval = setInterval(function() {
        newCounter = (counter++) + "k+";

        timerElement.textContent = newCounter;

        if (newCounter === value + "k+") {
            clearInterval(interval);
        }
    }, time);
}

window.onload = function() {
    startTimer(IdValue ='valueNFT', value =37, time = 30)
    startTimer(IdValue ='valueDesigners', value =20, time = 60)
    startTimer(IdValue ='valueAuctions', value =99, time = 13)
}
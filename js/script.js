function revealMessage1() {
    document.getElementById("hiddenMessage1").style.display = 'block';
}

function countDown() {
    var currentVal = document.getElementById("countDownButton").innerHTML;
    var newVal = 0;
    if (currentVal > 0) {
        newVal = currentVal -1;
    }
    document.getElementById("countDownButton").innerHTML = newVal;
}
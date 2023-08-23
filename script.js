var timer = 30;
var hitRn=0;
var score=0;



function increaseScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function getNewHit() {
    hitRn = Math.floor(Math.random() * 10)
    document.querySelector("#hitval").textContent = hitRn;
}

function makeBubble() {
    clutter = ""
    for (var i = 1; i < 430; i++) {
        var rn = Math.floor(Math.random() * 10)
        clutter += `<div class="bubble">${rn}</div>`
    }
    document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer() {
    var timerint = setInterval(function () {
        if (timer > 0) { timer--; }
        else {
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1>Your Score is ${score}...</h1> <br> <h1>Game Over!!</h1>`
        }

        document.querySelector("#timerval").textContent = timer;
    }, 1000)
}
document.querySelector("#pbtm").addEventListener("click", function (detail) {
    var clickednum = Number(detail.target.textContent)
    if (clickednum === hitRn) {
        increaseScore()
        makeBubble()
        getNewHit()

    }

})
runTimer();
makeBubble();
getNewHit();

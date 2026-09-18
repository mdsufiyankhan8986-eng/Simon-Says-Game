let gameSeq = []
let userSeq = []

let btns = ["yellow", "red", "purple", "green"];

let started = true;
let level = 0; // game not satrted
let h2 = document.querySelector("h2"); //text change krne ke liye
document.addEventListener("keydown", function () {
    if (started === true) {
        console.log("game started");
        started = false;
        levelUp()
    }
});   /// first step 


function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}


function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;// level 1,level2....so on

    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function checkAns(idx) {
    // console.log("curr level: ",level);
    //    let idx=level-1;
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000)
        }
    } else {
        h2.innerHTML = `Game over! Your score was <b>${level}</b> <br>Press any key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();

    }

}

function btnPress() {
    let btn = this;
    // console.log(this);
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length - 1);
}


let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}
function reset() {
    started = true;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
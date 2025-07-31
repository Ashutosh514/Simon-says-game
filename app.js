let gameseq = [];
let userseq = [];
let started = false;
let level = 0;
let btns = ["red","yellow","green","purple"];
let h3 = document.querySelector("h3");
document.addEventListener("keypress",function () {
    if(started == false){
       console.log("game started");
        started = true;
         levelUp();
    }
})

function levelUp() {
    userseq = [];
    level++;
    h3.innerText = `level: ${level}`

    let randIdx = Math.floor(Math.random () * 3);
    let randCol = btns[randIdx];
    let randbtn = document.querySelector(`.${randCol}`);
    gameseq.push(randCol);
    flash(randbtn);
}

function flash(btn) {
    btn.classList.add("flashbtn");
    setTimeout ( function () {
        btn.classList.remove("flashbtn");
    }, 250);
}

function userflash(btn) {
    btn.classList.add("flash");
    setTimeout ( function () {
        btn.classList.remove("flash");
    }, 250);
}

function checkAns(idx){
if (userseq[idx] === gameseq[idx]) {
    if (userseq.length == gameseq.length) {
    setTimeout(levelUp,1000);
    }
}
else{
     h3.innerHTML = `Game Over! Your score was <b>${level}</b> <br>Press any key to restart`;
     document.querySelector("body").style.backgroundColor="red";
     setTimeout(function (){
        document.querySelector("body").style.backgroundColor="white";
     },150);
     reset();
}
}

function btnPress(){
console.log(this);
let btn = this;
userflash(btn);

userCol = btn.getAttribute("id");
userseq.push(userCol);
checkAns(userseq.length - 1);
}

   let allBtns = document.querySelectorAll(".btn");
    for(btn of allBtns){
        btn.addEventListener("click",btnPress);
    }
    
    function reset(){
        started =false;
        gameseq = [];
        userseq = [];
        level = 0;
    }
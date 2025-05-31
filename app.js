let gameSeq=[];
let userSeq=[];
let colors=["red","green","yellow","purple"];
let h3=document.querySelector("h3");
let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.classList.add("disable-div");
}

let started=false;
let level=0;
let currLevel=0;



document.addEventListener("keypress",()=>{
    if(started==false){
        started=true;
        console.log("Game started");
        for(btn of allBtns){
            btn.classList.remove("disable-div");
            btn.classList.add("pointer");
        }
        
        levelUp();
    }
    
})

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(()=>{
        btn.classList.remove("flash");
    },200);
}

function levelUp(){
    userSeq=[];
    level++;
    
    h3.innerText=`Level ${level}`;
    
    let randIdnx= Math.floor(Math.random()*4);
    
    let randClr=colors[randIdnx];
    gameSeq.push(randClr);
    console.log(gameSeq);
    let randBtn=document.querySelector(`.${randClr}`);
    btnFlash(randBtn);
}

function checkAns(indx){
    if(gameSeq[indx] === userSeq[indx]){
        if(gameSeq.length == userSeq.length){
            setTimeout(levelUp,500);
        }
    }else{
        /* h3.innerText=`Game Over Press any Key to Restart`; */
        let body=document.querySelector("body");
        backFlash(body);
        reset()
    }
}

function btnPress(){
    let btn = this;
    btnFlash(btn);
    let x= btn.getAttribute("id");
    userSeq.push(x);
    console.log(`UserSeq-${userSeq}`);
    checkAns(userSeq.length-1);

}

for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    
    h3.innerHTML=`GAME OVER! Your Score was <b>${level}</b>.<br> Press any Key to Restart <br>`;
    if (currLevel<level){
            currLevel=level;
        };
    h3.append(` Top score was ${currLevel}`);
    level=0;
}

function backFlash(btn){
    btn.classList.add("back-flash");
    setTimeout(()=>{
        btn.classList.remove("back-flash");
    },190);
}
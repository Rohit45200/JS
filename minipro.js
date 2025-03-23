// ....................................................
// Simon game:-(mini project)

let gemeseq = [];
let userseq = [];

let started = false;
let level = 0;

let h3 = document.querySelector("h3");
document.addEventListener("click", function(){
    if(started == false){
        console.log("game is started");
        started = true;

        levelup();
    }
    
});

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },1000);
}

function levelup(){
    level++;
    h3.innerText = `Level ${level}`;

    // Random btn choose
    btnflash();
}




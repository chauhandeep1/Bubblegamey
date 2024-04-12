// ===================================== EventBubbling ============================================= //
// jispe click karoge wo element par event raise hoga, aur event listener na milne par event element ke parent par listener dhundega, waha bhi naa milne par parent ke parent ke parent par listener dhundega

var timer = 60;
var scored = 0;
var hithp = 0;

function IncreseScore() {
    scored += 10;
    document.querySelector("#scoreid").innerHTML = scored;
}

function HitBubble() {
    hithp = Math.floor(Math.random()*10);
    document.querySelector("#hitid").innerHTML = hithp;
}

function MakeBubble() {
var aadd = "";

for(var i = 1; i<=102; i++) {
    var rm = Math.floor(Math.random()*10)
    aadd += `<div class="bubble">${rm}</div>`;
}

document.querySelector("#platedp").innerHTML = aadd;
}

function RunTime() {
    var atimer = setInterval(function() {
       if(timer>0){
        timer--;
        document.querySelector("#timerid").innerHTML = timer;
       }
       else{
        clearInterval(atimer);
        document.querySelector("#platedp").innerHTML = `<h1>Game Over</h1>`;
       }
    },1000)
}

document.querySelector("#platedp").addEventListener("click", function(para) {
    var clickednum = Number(para.target.textContent); 
    if(clickednum === hithp) {
        IncreseScore();
        MakeBubble();
        HitBubble();
    }
})


RunTime();

MakeBubble();

HitBubble();
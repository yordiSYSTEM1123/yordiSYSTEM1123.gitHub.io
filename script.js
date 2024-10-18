const btnRandom = document.querySelector("#random-btn")

function moverAleatoriamente(btn){
    btn.style.fontWeight = "bolder";
    btn.style.position = "absolute";
    btn.style.top = Math.floor(Math.random()*50-10) + "%" ;
    btn.style.left = Math.floor(Math.random()*50+10) + "%" ;
}
    btnRandom.addEventListener("mouseenter", function (e){
        moverAleatoriamente(e.target)
    })

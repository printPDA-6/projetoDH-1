var btnPesq = document.querySelector("button#search");
btnPesq.addEventListener("click",pesqclick);
btnPesq.addEventListener("mousemove",pesqout);

function pesqclick(){
    btnPesq.style.background = "#c1e0e0"
}

function pesqout() {
    btnPesq.style.background =""
}
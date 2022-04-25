var btnPesq = document.querySelector("button#search");
var icoInput = document.querySelector("i#ico-input")

btnPesq.addEventListener("click",pesqclick);
btnPesq.addEventListener("mousemove",pesqout);

function pesqclick(){
    icoInput.style.color = "gold"
    btnPesq.style = "background-image: radial-gradient(circle at -18.3% 68.3%, #0055ff 0, #004bfc 12.5%, #4840f3 25%, #7030e8 37.5%, #8c19dc 50%, #a200cf 62.5%, #b300c1 75%, #c100b2 87.5%, #cd00a3 100%);"
}

function pesqout() {
    btnPesq.style.background =""
    icoInput.style.color = ""
}
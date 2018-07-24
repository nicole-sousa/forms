
let entradas = document.querySelectorAll("input");
let botao = document.querySelector("button");
let paragrafos = document.querySelectorAll("p")

botao.onclick = mostraAviso;

function mostraAviso(){
    let controle = 0;
    for(let i = 0; i < entradas.length; i++){
        if(entradas[i].value == "" || entradas[i].value == null){
            alert("Preencha o campo : " + paragrafos[i].innerHTML);
            controle++;
        }
    }
    if(controle == 0){
        for(let i = 0; i < entradas.length; i++){
            alert(paragrafos[i].innerHTML + " : " + entradas[i].value);
        }
    }
}




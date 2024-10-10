const opcoesPreco = document.querySelector("#opcoesPreco");
const opcoesQuartos = document.querySelector("#opcoesQuartos");
const body = document.querySelector("body");
const header = document.querySelector("#header");
const DivFantasma = document.querySelector(".divFantasma")

let aux1 = 0;
let aux2 = 0;

opcoesPreco.classList.add("desativado");
opcoesQuartos.classList.add("desativado")

window.addEventListener("scroll", () => {
    if(window.scrollY > 90){
        header.classList.add("positionFlutuante");
        DivFantasma.style.display = "block";
        DivFantasma.style.position = "relative"; 
    }else if(window.scrollY < 90){
        header.classList.remove("positionFlutuante");
        DivFantasma.style.display = "none";
        DivFantasma.style.position = "absolute"; 
    }
})

// window.scrollY = 100 

function aparecerMenuPreco(){
    if(aux1 == 0){
        opcoesPreco.classList.remove("desativado");
        aux1 = 1;
    }else if(aux1 == 1){
        opcoesPreco.classList.add("desativado");
        aux1 = 0;
    }
   
}

function aparecerMenuQuartos(){
    if(aux2 == 0){
        opcoesQuartos.classList.remove("desativado");
        aux2 = 1;
    }else if(aux2 == 1){
        opcoesQuartos.classList.add("desativado");
        aux2 = 0;
    }
}


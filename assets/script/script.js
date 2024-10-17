const opcoesPreco = document.querySelector("#opcoesPreco");
const opcoesQuartos = document.querySelector("#opcoesQuartos");
const body = document.querySelector("body");
const header = document.querySelector("#header");
const DivFantasma = document.querySelector(".divFantasma")

const capa1 = document.querySelector("#capa1")
const capa2 = document.querySelector("#capa2")
const capa3 = document.querySelector("#capa3")

const descriptionPromo = document.querySelectorAll(".descriptionPromo")

const item1 = document.querySelector("#item1")
const item2 = document.querySelector("#item2")
const item3 = document.querySelector("#item3")

let aux1 = 0;
let aux2 = 0;

capa1.classList.add("opacity")
capa2.classList.add("opacity")
capa3.classList.add("opacity")



item1.addEventListener("mouseover", () => {
    capa1.classList.remove("opacity")
    descriptionPromo[0].classList.add("opacity")
})
item2.addEventListener("mouseover", () => {
    capa2.classList.remove("opacity")
    descriptionPromo[1].classList.add("opacity")
})
item3.addEventListener("mouseover", () => {
    capa3.classList.remove("opacity")
    descriptionPromo[2].classList.add("opacity")
})

item1.addEventListener("mouseout", () => {
    capa1.classList.add("opacity")
    descriptionPromo[0].classList.remove("opacity")
})
item2.addEventListener("mouseout", () => {
    capa2.classList.add("opacity")
    descriptionPromo[1].classList.remove("opacity")
})
item3.addEventListener("mouseout", () => {
    capa3.classList.add("opacity")
    descriptionPromo[2].classList.remove("opacity")
})

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


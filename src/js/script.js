/*===================== MENU AMBURGUER =====================  */

const nav__all = document.querySelector(".nav__all")

const menu__hamburguer = document.querySelector(".menu__hamburguer")

menu__hamburguer.addEventListener("click", () =>{
    nav__all.classList.toggle("active")
})

/*=====================  EFEITO DE ESCREVER ===================== */

const kayky__nome = document.querySelector(".kayky__nome")

function MaquinaDeEscrever(nome){
    const nomeArray = nome.innerHTML.split("")
    nome.innerHTML = ""
    nomeArray.forEach((letra, numero) =>{
        setTimeout(() =>{
            nome.innerHTML += letra
        }, 75 * numero)
    })
}

MaquinaDeEscrever(kayky__nome)

/*=====================  EFEITO DE APARECER ===================== */

const observadoALL = document.querySelectorAll(".observado")

const oberavador = new IntersectionObserver( (elementoALL) =>{
    elementoALL.forEach((elemento) =>{
        if(elemento.isIntersecting){
            elemento.target.classList.add("aparecer")
        }
    })
})

observadoALL.forEach(item => oberavador.observe(item))
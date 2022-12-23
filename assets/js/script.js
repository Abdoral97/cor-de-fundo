const bAzul = document.getElementById("azul")
const bVermelho = document.getElementById("vermelho")
const bLaranja = document.getElementById("laranja")
const bVerde = document.getElementById("verde")
const bRosa = document.getElementById("rosa")
const bCinza = document.getElementById("cinza")
const bAmarelo = document.getElementById("amarelo")
const body = document.querySelector("body")
const bAleatorio = document.getElementById("aleatorio")
let nAnt = 0

bAzul.style.border = "1px solid #69AFD5"


bAzul.addEventListener("click", function () {
    body.style.backgroundColor = "darkblue"
    bVermelho.style.border = ""
    bLaranja.style.border = ""
    bVerde.style.border = ""
    bRosa.style.border = ""
    bCinza.style.border = ""
    bAmarelo.style.border = ""
    bAzul.style.border = "1px solid #69AFD5"
    nAnt = 0
})
bVermelho.addEventListener("click", function () {
    body.style.backgroundColor = "darkred"
    bVermelho.style.border = "1px solid #69AFD5"
    bLaranja.style.border = ""
    bVerde.style.border = ""
    bRosa.style.border = ""
    bCinza.style.border = ""
    bAmarelo.style.border = ""
    bAzul.style.border = ""
    nAnt = 1
})
bLaranja.addEventListener("click", function () {
    body.style.backgroundColor = "darkorange"
    bVermelho.style.border = ""
    bLaranja.style.border = "1px solid #69AFD5"
    bVerde.style.border = ""
    bRosa.style.border = ""
    bCinza.style.border = ""
    bAmarelo.style.border = ""
    bAzul.style.border = ""
    nAnt = 2
})
bVerde.addEventListener("click", function () {
    body.style.backgroundColor = "darkgreen"
    bVermelho.style.border = ""
    bLaranja.style.border = ""
    bVerde.style.border = "1px solid #69AFD5"
    bRosa.style.border = ""
    bCinza.style.border = ""
    bAmarelo.style.border = ""
    bAzul.style.border = ""
    nAnt = 3
})
bRosa.addEventListener("click", function () {
    body.style.backgroundColor = "darkmagenta"
    bVermelho.style.border = ""
    bLaranja.style.border = ""
    bVerde.style.border = ""
    bRosa.style.border = "1px solid #69AFD5"
    bCinza.style.border = ""
    bAmarelo.style.border = ""
    bAzul.style.border = ""
    nAnt = 4
})
bCinza.addEventListener("click", function () {
    body.style.backgroundColor = "gray"
    bVermelho.style.border = ""
    bLaranja.style.border = ""
    bVerde.style.border = ""
    bRosa.style.border = ""
    bCinza.style.border = "1px solid #69AFD5"
    bAmarelo.style.border = ""
    bAzul.style.border = ""
    nAnt = 5
})
bAmarelo.addEventListener("click", function () {
    body.style.backgroundColor = "#caca03"
    bVermelho.style.border = ""
    bLaranja.style.border = ""
    bVerde.style.border = ""
    bRosa.style.border = ""
    bCinza.style.border = ""
    bAmarelo.style.border = "1px solid #69AFD5"
    bAzul.style.border = ""
    nAnt = 6
})

bAleatorio.addEventListener("click", function () {

    let ale = Math.round(Math.random() * 6)
    if (nAnt === ale) {
        while (nAnt === ale) {
            ale = Math.round(Math.random() * 6)
        }
    }
    nAnt = ale;



    if (ale === 0) {
        body.style.backgroundColor = "darkblue"
        bVermelho.style.border = ""
        bLaranja.style.border = ""
        bVerde.style.border = ""
        bRosa.style.border = ""
        bCinza.style.border = ""
        bAmarelo.style.border = ""
        bAzul.style.border = "1px solid #69AFD5"
    } else if (ale === 1) {
        body.style.backgroundColor = "darkred"
        bVermelho.style.border = "1px solid #69AFD5"
        bLaranja.style.border = ""
        bVerde.style.border = ""
        bRosa.style.border = ""
        bCinza.style.border = ""
        bAmarelo.style.border = ""
        bAzul.style.border = ""
    } else if (ale === 2) {
        body.style.backgroundColor = "darkorange"
        bVermelho.style.border = ""
        bLaranja.style.border = "1px solid #69AFD5"
        bVerde.style.border = ""
        bRosa.style.border = ""
        bCinza.style.border = ""
        bAmarelo.style.border = ""
        bAzul.style.border = ""
    } else if (ale === 3) {
        body.style.backgroundColor = "darkgreen"
        bVermelho.style.border = ""
        bLaranja.style.border = ""
        bVerde.style.border = "1px solid #69AFD5"
        bRosa.style.border = ""
        bCinza.style.border = ""
        bAmarelo.style.border = ""
        bAzul.style.border = ""
    } else if (ale === 4) {
        body.style.backgroundColor = "darkmagenta"
        bVermelho.style.border = ""
        bLaranja.style.border = ""
        bVerde.style.border = ""
        bRosa.style.border = "1px solid #69AFD5"
        bCinza.style.border = ""
        bAmarelo.style.border = ""
        bAzul.style.border = ""
    } else if (ale === 5) {
        body.style.backgroundColor = "gray"
        bVermelho.style.border = ""
        bLaranja.style.border = ""
        bVerde.style.border = ""
        bRosa.style.border = ""
        bCinza.style.border = "1px solid #69AFD5"
        bAmarelo.style.border = ""
        bAzul.style.border = ""
    } else if (ale === 6) {
        body.style.backgroundColor = "#caca03"
        bVermelho.style.border = ""
        bLaranja.style.border = ""
        bVerde.style.border = ""
        bRosa.style.border = ""
        bCinza.style.border = ""
        bAmarelo.style.border = "1px solid #69AFD5"
        bAzul.style.border = ""

    }


    console.log(ale)

})




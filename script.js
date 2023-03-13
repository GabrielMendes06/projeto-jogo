let saldo = 0
let imagem = document.querySelector('#imagem')
let ganhos = document.querySelector('#ganhos')
let carteira = document.querySelector('#saldo')
let dinheiros = document.querySelector("#dinheiros")
let valorCarteira = document.querySelector("#valorCarteira")
let ganhoClique = 1
let valorPorClique = document.querySelector("#ganhoClique")
let ganhoSegundo = 0
let ganhoporSegundo = document.querySelector("#ganhoSegundo")

//Relação de ganho por segundo
ganhoporSegundo.innerHTML = `${ganhoSegundo}`
valorPorClique.innerHTML = `${ganhoClique}`
setInterval(function ganharSegundo() {
    if(ganhoSegundo > 0) {
        saldo = saldo + ganhoSegundo
        valorCarteira.innerHTML = `${Math.round(saldo)}`
    }
}, 1000)

//Eventos
dinheiros.addEventListener("click", function() {
    saldo += ganhoClique
    console.log(saldo)
    valorCarteira.innerHTML = `${Math.round(saldo)}`
    valorPorClique.innerHTML = `${ganhoClique}`
})

imagem.addEventListener("mouseover", function() {
    imagem.style.height = '225px'
    imagem.style.width = '225px'
    imagem.style.cursor = 'pointer'
})

imagem.addEventListener("mouseout", function() {
    imagem.style.height = '200px'
    imagem.style.width = '200px'
})

//Variáveis Minerador
let qntMin = 0
let possuiMin = document.querySelector("#possuiMinerador")
possuiMin.innerHTML = `${qntMin}`
let precoMin = 10
let valMin = document.querySelector("#precoMinerador")
valMin.innerHTML = `${precoMin}`

function comprarMinerador() {        
    if(saldo >= precoMin) {
        saldo = saldo-precoMin
        ganhoClique++
        precoMin = precoMin*1.7
        valMin.innerHTML = `${Math.round(precoMin)}`
        valorCarteira.innerHTML = `${Math.round(saldo)}`
        qntMin++
        possuiMin.innerHTML = `${qntMin}`
        ganhoporSegundo.innerHTML = `${ganhoSegundo}`
        valorPorClique.innerHTML = `${ganhoClique}`
    } else {
        return
    }
}

//Variáveis Robô
let qntRobo = 0
let possuiRobo = document.querySelector("#possuiRobo")
possuiRobo.innerHTML = `${qntRobo}`
let precoRobo = 150
let valRobo = document.querySelector("#precoRobo")
valRobo.innerHTML = `${precoRobo}`

function comprarRobo() {
    if(saldo >= precoRobo) {
        saldo = saldo-precoRobo
        ganhoClique++
        precoRobo = precoRobo*1.8
        valRobo.innerHTML = `${Math.round(precoRobo)}`
        valorCarteira.innerHTML = `${Math.round(saldo)}`
        qntRobo++
        possuiRobo.innerHTML = `${qntRobo}`
        ganhoSegundo++
        ganhoporSegundo.innerHTML = `${ganhoSegundo}`
        valorPorClique.innerHTML = `${ganhoClique}`
    } else {
        return
    }
}

//Variáveis Lojinhas
let qntLojinhas = 0
let possuiLojinhas = document.querySelector("#possuiLojinhas")
possuiLojinhas.innerHTML = `${qntLojinhas}`
let precoLojinhas = 1000
let valLojinhas = document.querySelector("#precoLojinhas")
valLojinhas.innerHTML = `${precoLojinhas}`

function comprarLojinhas() {
    if(saldo >= precoLojinhas) {
        saldo = saldo-precoLojinhas
        ganhoClique = ganhoClique + 2
        precoLojinhas = precoLojinhas*1.8
        valLojinhas.innerHTML = `${Math.round(precoLojinhas)}`
        valorCarteira.innerHTML = `${Math.round(saldo)}`
        qntLojinhas++
        possuiLojinhas.innerHTML = `${qntLojinhas}`
        ganhoSegundo = ganhoSegundo + 5
        ganhoporSegundo.innerHTML = `${ganhoSegundo}`
        valorPorClique.innerHTML = `${ganhoClique}`
    } else {
        return
    }
}

//Variáveis Tecnologia
let qntTecnologia = 0
let possuiTecnologia = document.querySelector("#possuiTecnologia")
possuiTecnologia.innerHTML = `${qntTecnologia}`
let precoTecnologia = 2000
let valTecnologia = document.querySelector("#precoTecnologia")
valTecnologia.innerHTML = `${precoTecnologia}`

function comprarTecnologia() {
    if(saldo >= precoTecnologia) {
        saldo = saldo-precoTecnologia
        ganhoClique = ganhoClique + 5
        precoTecnologia = precoTecnologia*1.7
        valTecnologia.innerHTML = `${Math.round(precoTecnologia)}`
        valorCarteira.innerHTML = `${Math.round(saldo)}`
        qntTecnologia++
        possuiTecnologia.innerHTML = `${qntTecnologia}`
        ganhoSegundo = ganhoSegundo + 10
        ganhoporSegundo.innerHTML = `${ganhoSegundo}`
        valorPorClique.innerHTML = `${ganhoClique}`
    } else {
        return
    }
}

//Variáveis Industria
let qntIndustria = 0
let possuiIndustria = document.querySelector("#possuiIndustria")
possuiIndustria.innerHTML = `${qntIndustria}`
let precoIndustria = 5000
let valIndustria = document.querySelector("#precoIndustria")
valIndustria.innerHTML = `${precoIndustria}`

function comprarIndustria() {
    if(saldo >= precoIndustria) {
        saldo = saldo-precoIndustria
        ganhoClique = ganhoClique + 10
        precoIndustria = precoIndustria*1.7
        valIndustria.innerHTML = `${Math.round(precoIndustria)}`
        valorCarteira.innerHTML = `${Math.round(saldo)}`
        qntIndustria++
        possuiIndustria.innerHTML = `${qntIndustria}`
        ganhoSegundo = ganhoSegundo + 30
        ganhoporSegundo.innerHTML = `${ganhoSegundo}`
        valorPorClique.innerHTML = `${ganhoClique}`
    } else {
        return
    }
}

//Variáveis Banco
let qntBanco = 0
let possuiBanco = document.querySelector("#possuiBanco")
possuiBanco.innerHTML = `${qntBanco}`
let precoBanco = 10000
let valBanco = document.querySelector("#precoBanco")
valBanco.innerHTML = `${precoBanco}`

function comprarBanco() {
    if(saldo >= precoBanco) {
        saldo = saldo-precoBanco
        ganhoClique = ganhoClique + 20
        precoBanco = precoBanco*1.7
        valBanco.innerHTML = `${Math.round(precoBanco)}`
        valorCarteira.innerHTML = `${Math.round(saldo)}`
        qntBanco++
        possuiBanco.innerHTML = `${qntBanco}`
        ganhoSegundo = ganhoSegundo + 50
        ganhoporSegundo.innerHTML = `${ganhoSegundo}`
        valorPorClique.innerHTML = `${ganhoClique}`
    } else {
        return
    }
}
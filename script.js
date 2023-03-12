let saldo = 0
let imagem = document.querySelector('#imagem')
let ganhos = document.querySelector('#ganhos')
let carteira = document.querySelector('#saldo')
let dinheiros = document.querySelector("#dinheiros")
let valorCarteira = document.querySelector("#valorCarteira")
let ganhoClique = 1
let valorPorClique = document.querySelector("#ganhoClique")

dinheiros.addEventListener("click", function() {
    saldo += ganhoClique
    console.log(saldo)
    valorCarteira.innerHTML = `${saldo}`
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

let upgrades = [
    {preco: 100, possui: 0, id:"#upgrade1"}, 
    {preco: 500, possui: 0, id:"#upgrade2"}, 
    {preco: 1000, possui: 0, id:"#upgrade3"}, 
    {preco: 5000, possui: 0, id:"#upgrade4"},
    {preco: 10000, possui: 0, id:"#upgrade5"},
    {preco: 50000, possui: 0, id:"#upgrade6"}
]

function atualizarLoja() {
    let precoMineiro = document.querySelector("#precoMineiro")
    let precoRobo = document.querySelector("#precoRobo")
    let precoLojinhas = document.querySelector("#precoRobo")
    let precoTecnologias = document.querySelector("#precoTecnologias")
    let precoIndustrias = document.querySelector("#precoIndustrias")
    let precoBanco = document.querySelector("#precoBanco")
}

function buscarUpgrade(id) {
    upgrades.find(id => upgrades)
}

import getUrl from "../modules/getUrl.js"
let btnMarvel = document.getElementById("btnCategory1")
let btnDC = document.getElementById("btnCategory2")
let listarCard = document.getElementById("listarCard")

btnMarvel.addEventListener('click', ()=>{
    getUrl('https://ejercicioheroes.herokuapp.com/marvel')
})

btnDC.addEventListener('click', ()=>{
    getUrl('https://ejercicioheroes.herokuapp.com/dc')
})
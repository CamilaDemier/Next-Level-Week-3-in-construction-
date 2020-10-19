let options = {
    dragging: false,
    touchZoom:false,
    doubleClickZoom: false,
    scrolWheelZoom: false,
    zoomControl:false,
} //incluir essa variável dentro do L.map

//create map
let map = L.map('mapid',options).setView([-23.4644493,-46.5325227], 15); /*let ou const, let da pra alterar ao longo do código, let não*/
//[latitude, longitude], zoom

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

//crate icon
let icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor:[29,68],
    popupAnchor:[170,2]
})

//create and add marker
L.marker([-23.4644493,-46.5325227], {icon}) //Aqui, a variável e o valor tem o mesmo nome, então não precisa de {icon: icon} 
.addTo(map)

/* Image galery*/

function selectImage(event){
    let button = event.currentTarget
    //1)
    let buttons = document.querySelectorAll(".images button")

    //2)
    buttons.forEach(removeActiveClass) 
    //substituir o buttons.forEach(removeActiveClass) por buttons.forEach((button)=>{    DEFINIÇÕES DA FUNÇÃO    }) que é uma função arrow.
    //forEach permite adicionar uma funcionalidade para cada button
    function removeActiveClass(button){
        button.classList.remove("active") //esse button não é o mesmo do let button (?)
    }

    //4)
    button.classList.add("active")

    //3)
    let image = button.children[0]
    let imageContainer = document.querySelector(".orphanage-details > img")
    
    console.log(button.children)

    imageContainer.src = image.src

    /*logica:
    1) remover todas as classes .active
    2) selecionar a imagem clicada
    3) atualizar o container de image
    4) adicionar a classe .active para o botão clicado
    */




    //console.log() console é um objeto, com a funcionalidade log, usar para ver se a função ta funcionando 
}
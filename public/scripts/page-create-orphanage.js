//create map
let map = L.map('mapid').setView([-23.4644493,-46.5325227], 15); /*let ou const, let da pra alterar ao longo do código, let não*/
//[latitude, longitude], zoom

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

//crate icon
let icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor:[29,68],
})

let marker; //criando variável vazia a ser modificada dentro da função

//create and add marker
map.on('click', (event)=>{
        //usar o console.log(event) pra ver como o click se comporta - ele indentifica latlng, etc
        const lat = event.latlng.lat;
        const lng = event.latlng.lng;

        document.querySelector('[name=lat]').value = lat;

        document.querySelector('[name=lng]').value = lng;

        //remove icon
        marker && map.removeLayer(marker) //&& significa verdadeiro, se for verdadeiro continua a ler a linha, senão, passa pra próxima linha

        marker = L.marker([lat,lng],{icon})
        .addTo(map)
}) //on - quando o map ouvir o click, ele vai colocar o event dentro do map

//add new photo field
function addPhotoField(){
    //pegar container de fotos #images
    const container = document.querySelector('#images')
    
    //pegar o container para duplicar .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload')
    
    //realizar o clone da ultima imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length-1].cloneNode(true)

    //verificar se o campo está vazio - para não permitir que se adc um field se o atual estiver vazio
    if (newFieldContainer.children[0].value !== ''){
        //limpar o texto de dentro do campo
    newFieldContainer.children[0].value = ''

    //adicionar o clone ao container de #images
    container.appendChild(newFieldContainer)    
    } 
 /*outra opção para a parte final (o return quebra a função)
 if(newFieldContainer.children[0].value == ''){
     return
 }*/
    
}

function deleteField(event){
    //console.log(event.currentTarget)
    const span = event.currentTarget
    const fieldsContainer = document.querySelectorAll('.new-upload')
    //console.log(fieldsContainer.length)
    if(fieldsContainer.length < 2){
        //limpar o calor do campo
        span.parentNode.children[0].value=""
        return
    }

    //deletar o corpo inteiro
    span.parentNode.remove()
    

}

//seleção do sim e não
function toggleSelect(event){ //toogle = alternância
    //retirar .active dos botões
    document.querySelectorAll('.button-select button')
    .forEach(function(button){
        button.classList.remove('active')
    })
    
    //colocar a .active no botão clicado
    const button = event.currentTarget
    button.classList.add('active')
    
    //atualizar o input hidden com o calor selecionado 
    const input = document.querySelector('[name="open_on_weekends"]')
    input.value = button.dataset.value //atribuindo à constante input o valor da data do button
}
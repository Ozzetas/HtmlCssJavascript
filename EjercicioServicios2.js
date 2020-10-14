//Usando un boton vamos a mostrar en un area una foto aleatoria
var btn_photo = document.getElementById("btn_photo")
btn_photo.addEventListener("click", (e) =>{
    var htmlImage = document.createElement("img")
    htmlImage.src = getImageFromService()
    document.body.appendChild(htmlImage)
})
function getImageFromService(){
    var request = new XMLHttpRequest()
    var responseUrl = ""
    request.open("GET", "https://jsonplaceholder.typicode.com/photos")
    request.send()
    request.onload = () => {
        if(request.status == 200){
            var photoList = JSON.parse(request.response)
            var randomIdPhoto = Math.floor(Math.random() * 5 + 1)
            for(let i = 0; i < photoList.length; i++){
                if(photoList[i].id == randomIdPhoto){
                    responseUrl = photoList[i].url
                    break
                }
            }
        }
    }
    return responseUrl
}
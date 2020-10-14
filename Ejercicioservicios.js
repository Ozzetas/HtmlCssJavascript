//- llamada a web service que muestre la lista de las personas con nombre, apellido y telefono
var request = new XMLHttpRequest()
request.open("GET", "https://jsonplaceholder.typicode.com/users")
request.send()
request.onload = () => {
    consol
    if(request.status == 200){
        var personas = JSON.parse(request.response)
        var ulListaPersonas = document.getElementById("listaPersonas")
        for(let i = 0; i < personas.length; i++){
            var listAdd = document.createElement("li")
            ulListaPersonas.appendChild(listAdd)
            var name = personas[i].name
            var phone = personas[i].phone
            listAdd.textContent = "Nombre: " + name + ", Telefono: " + phone
        }
    } else{
        document.write("Error: " + request.status)
    }
}
var rol = prompt("Cual es su rol?").toLowerCase()
if(rol == "admin" || rol == "recursos"){
    var clave = prompt("Cual  es su clave numerica?")
    if(clave == "1234"){
        var usuario = prompt("Cual es su nombre de usuario?")
        var encabezado = document.getElementById("encabezado")
        encabezado.innerHTML = "Hola " + usuario + " bienvenida a nuestra aplicacion"
    } else {
        window.location.replace("PaginaError.html")
    }

} else {
    window.location.replace("PaginaError.html")
}

var empleados = []

function agregar(){
    info1 = document.getElementById("fName").value
    info2 = document.getElementById("lName").value
    info3 = document.getElementById("yOld").value
    empleados.push({nombre: info1, apellido: info2, Edad: info3})

    document.getElementById("fName").value = ""
    document.getElementById("lName").value = ""
    document.getElementById("yOld").value = ""

    ciclo()
}

function ciclo(){
    var mensaje = "<tr><th>Nombre</th><th>Apellido</th><th>Edad</th></tr>"
    for (let i = 0; i < empleados.length; i++) {
        mensaje += "<tr><th>" + empleados[i].nombre + "</th><th>" + empleados[i].apellido + "</th><th>" + empleados[i].Edad + "</th></tr>"
    }
    document.getElementById("caja").innerHTML = mensaje
}
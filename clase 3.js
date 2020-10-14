/*lista de super en donde un prompt aparezca hasta que uno ingrese la palabra fin,
 todo lo demás que se ingrese será mostrado en la la pagina con un LIST */
var list = document.getElementById("list")

do {
    var element = prompt("Ingrese un elemento para agregar a la lista: ")
    var item = document.createElement("li")
    list.appendChild(item)
    item.textContent = element
} while (element != "fin")

/* crear un form en donde obtengamos nombre, apellido y 
fecha de nacimiento de una persona y tengamos dos botones un login y un register, el create almacena esos datos en un local storage el login valida si esos datos ya estan almacenados, si lo estan saluda a la persona, si no estan pide que registre en la pagina
utilicemos funciones para validar los campos
*/

/* var person = {
    “name": "Maxi",
    "lastName": "Tompson",
    “bd”: 12may
}
- 3 formas de crear
    - objetos declarativos o literales
        var persona = {
            nombre: 'mario',
            edad: 24,

            saludar: function(){
                console.log('hola')
            }
        }

    - objetos construidos
        function Persona (nombre, edad){
            this.nombre = nombre,
            this.edad = edad,

            this.saludar = function(){
                console.log('hola');
            }
        }
        var pers = new Persona('mario', 24)
        var pers2 = new Persona('mo', 29)


    - usando new Object
        var persona = new Object({
            nombre: 'mario',
            edad: 30,
            saludar: function(){
                console.log('hola')
            }
        })
*/

var nameHTML = document.getElementById("name")
var lastNameHTML = document.getElementById("lastName")
var birthdayHTML = document.getElementById("birthday")
var person = {
    "name": nameHTML,
    "lastName": lastNameHTML,
    "birthday": birthdayHTML
}


const esLetra = (caracter) => {
    let ascii = caracter.toUpperCase().charCodeAt(0)
    let isLetter = false
    if (ascii > 64 && ascii < 91) {
        isLetter = true
    } return isLetter
}
//Ejemplo
//const caracteres = ["A", "B", "0", "M", " ", "Y", "-", "L", "a", "b"]
nameHTML.value.forEach(letra => {
    if(esLetra(letra) == false){

    }
})


function saveData() {
    localStorage.setItem(nameHTML.value + birthdayHTML.value, person)
}
function validateData() {
    var saveData = localStorage.getItem(nameHTML.value + birthdayHTML.value)
    if(saveData == ) {

    }
}


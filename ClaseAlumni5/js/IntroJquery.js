// var mensaje = $('p').html("mi parrafo que ahora tiene <em> italica </em>")
//alert(mensaje)

$("h1").text("Mi primer trabajito con JQuery");
var texto = $("p").text();
alert(texto);
$("p").html("Nuevo mensaje con <em>italica</em>")

$("#aparecer").click(aparecer)
$("#desaparecer").click(desaparecer)

function aparecer(){
    $("div").show()
}

function desaparecer(){
    $("div").hide()
}
let attempt = 3;
function validate() {
var usuar = document.getElementById("usuar").value;
var password = document.getElementById("password").value;
if (usuar == "usuario" && password == "12345") {
alert("Ingreso exitosamente");
window.location = "Inicio.html";
return false;
}
if (usuar == "cliente" && password == "acceso") {
alert("Ingreso exitosamente");
window.location = "Inicio.html";
return false;
} else {
attempt--;
}
alert(" Te queda " + attempt + " intentos mas ")
if (attempt <= 0) {
alert('Espera 5 segundos para seguir intentando');
document.getElementById("usuar").setAttribute('disabled','disabled');
document.getElementById("password").setAttribute('disabled','disabled');
document.getElementById("sumbit").setAttribute('disabled','disabled');
setTimeout(function(){
document.getElementById("usuar").removeAttribute('disabled');
document.getElementById("password").removeAttribute('disabled');
document.getElementById("sumbit").removeAttribute('disabled');
},5000);
attempt=3;
}
}


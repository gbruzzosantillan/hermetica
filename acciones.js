
var nombre = document.getElementById('nombre');
var email = document.getElementById('email');
var mensaje = document.getElementById('mensaje');
var error = document.getElementById('mostarerror');
error.style.color = 'white';

function enviarForm(){
    // var mensajesError = [];

    // if(nombre.value === null || nombre.value === '') {
    //     mensajesError.push('Ingresa tu nombre');
    // }
    // if(email.value === null || email.value === '') {
    //     mensajesError.push('Ingresa tu Correo Electronico');
    // }
    // if(mensaje.value === null || mensaje.value === '') {
    //     mensajesError.push('Ingresa tu Mensaje');
    // }
    // error.innerHTML = mensajesError.join(', ');
    return false;
}

var form = document.getElementById('formulario');
    form.addEventListener('submit', function(evt){
      evt.preventDefault();  
      var mensajesError = [];

    if(nombre.value === null || nombre.value === '') {
        mensajesError.push('Ingresa tu nombre');
        
    }
    if(email.value === null || email.value === '') {
        mensajesError.push('Ingresa tu Correo Electronico');
    }
    if(mensaje.value === null || mensaje.value === '') {
        mensajesError.push('Ingresa tu Mensaje');
    }
    error.innerHTML = mensajesError.join(', ');
    });
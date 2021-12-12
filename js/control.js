var form = document.querySelector('form');
var fnombre = document.getElementById('usuario');
var fclave = document.getElementById('clave');
var fboton = document.getElementById('boton');
var error = document.getElementById('error')

form.onsubmit = function(e){
    if(fnombre.value ==="" || fclave.value ===""){
        e.preventDefault();
        error.textContent = '*Completa ambos campos';
    }else{
        var regex = /\w+@\w+\.+[a-z]/;
        if ( regex.test(fnombre.value) ){
            error.textContent = 'Formulario enviado correctamente';
        }else{
            e.preventDefault();
            error.textContent = '*Correo incorrecto';
        }
    }
}
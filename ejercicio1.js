var formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event){
    event.preventDefault();
    limpiarErrores()
    
    let nombre = document.getElementById("nombre").value;
    let asunto = document.getElementById("asunto").value;
    let mensaje = document.getElementById("mensaje").value;
    
    let resultado = validar(nombre, asunto, mensaje)

    if(resultado == true){
        exito();
    }    
   
});

function exito(){

    document.querySelector(".resultado").innerHTML = "Mensaje enviado con exito!!!";
    
    
    
}

function limpiarErrores(){
    
    document.querySelector(".errorNombre").innerHTML = "";
    document.querySelector(".errorAsunto").innerHTML = "";
    document.querySelector(".errorMensaje").innerHTML = "";
}



function validar(nombre, asunto, mensaje){

    let validacion = true;
    let validacionNombre = /[a-zA-Z]/gim;

    if(validacionNombre.test(nombre) == false){
        document.querySelector(".errorNombre").innerHTML = "El nombre es requerido"
        validacion = false;
    }

    let validacionAsunto = /[a-zA-Z]/gim;
    
    if(validacionAsunto.test(asunto) == false){
        document.querySelector(".errorAsunto").innerHTML = "El asunto es requerido"
        validacion = false;
    }

    let validacionMensaje = /[a-zA-Z]/gim;

    if(validacionMensaje.test(mensaje) == false){
        document.querySelector(".errorMensaje").innerHTML = "El Mensaje es requerido"
        validacion = false;
    }

    return validacion;
}
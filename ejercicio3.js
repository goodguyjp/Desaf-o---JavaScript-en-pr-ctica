
// agrego variables a los botones de suma y resta
var btnsumar = document.getElementById("btn-sumar");
var btnresta = document.getElementById("btn-restar");

// agrego el evento "Click" a la variable "boton sumar"
btnsumar.addEventListener('click', function(){

    let n1 = document.getElementById("valor1").value;
    let n2 = document.getElementById("valor2").value;

    let resultadosuma = parseInt(n1) + parseInt(n2);
    alert("El resultado de la suma es: " + resultadosuma);
});

// agrego el evento "Click" a la variable "boton restar"
btnresta.addEventListener('click', function(){
    let n1 = document.getElementById("valor1").value;
    let n2 = document.getElementById("valor2").value;

    let resultadoresta = parseInt(n1) - parseInt(n2);    

    if (resultadoresta > 0) {
        alert("El resultado de la resta es: " + resultadoresta);

     //Si el resultado es negativo da como resultado "0"   
    } else(resultadoresta < 0);{
        alert("0");

    }
});



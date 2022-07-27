// agrego las variables btn para cada boton
var btn1 = document.getElementById("btn-1");
var btn2 = document.getElementById("btn-2");
var btn3 = document.getElementById("btn-3");
var btn4 = document.getElementById("btn-4");
var btn5 = document.getElementById("btn-5");
var btn6 = document.getElementById("btn-6");

var caja = document.getElementById("caja");

//se agrega la funcion addEvent para darle a cada funcion "Click" a cada bloque segun como se vio en clases

btn1.addEventListener('click', function(){

    caja.style.backgroundColor = btn1.style.backgroundColor;
});

btn2.addEventListener('click', function(){

    caja.style.backgroundColor = btn2.style.backgroundColor;
})
btn3.addEventListener('click', function(){

    caja.style.backgroundColor = btn3.style.backgroundColor;
})
btn4.addEventListener('click', function(){

    caja.style.backgroundColor = btn4.style.backgroundColor;
})
btn5.addEventListener('click', function(){

    caja.style.backgroundColor = btn5.style.backgroundColor;
})
btn6.addEventListener('click', function(){

    caja.style.backgroundColor = btn6.style.backgroundColor;
})


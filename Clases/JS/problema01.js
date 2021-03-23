/*
* vamos a crear una funcion que se encargue de comparar
* la entrada para saber si son numeros*/

function validarn(e) {
    var teclado = (document.all)?e.keyCode:e.wich;
    if (teclado == '8')return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

function interes() {
    var valor = document.formulario.cantidad.value;
    var result = parseInt(valor);
    var interes = result*0.02;
    var total = result*interes;

    document.formulario.sueldoti.value = "$"+total;
}

function borrar() {
    document.formulario.sueldoti.value="";
    document.formulario.cantidad.value="";
}
function xdxd() {
    let number1 = parseFloat(document.formulario.cant1.value);
    let number2 = parseFloat(document.formulario.cant2.value);
    let number3 = parseFloat(document.formulario.cant3.value);
    if (number1>number2 && number1>number3){
        document.formulario.mayor.value = number1;
    }else if (number2>number2 && number2>number3){
        document.formulario.mayor.value = number2;
    }else {
        document.formulario.mayor.value = number3;
    }
}

function borrar() {
    document.formulario.mayor.value = "";
    document.formulario.cant1.value = "";
    document.formulario.cant2.value = "";
    document.formulario.cant3.value = "";
}
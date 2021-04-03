function des() {
    let valor1 = parseFloat(document.formulario.cantidad1.value);
    let valor2 = parseFloat(document.formulario.cantidad2.value);
    if (valor1 === valor2) {
        document.formulario.resultado.value = valor1*valor2;
    } else if (valor1>valor2){
        document.formulario.resultado.value = valor1-valor2;
    } else {
        document.formulario.resultado.value = valor1+valor2;
    }
}

function borrar() {
    document.formulario.resultado.value = "";
    document.formulario.cantidad1.value = "";
    document.formulario.cantidad2.value = "";
}
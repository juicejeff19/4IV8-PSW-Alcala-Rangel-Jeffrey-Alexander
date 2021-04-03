function interes() {
    let valor = document.formulario.cantidad.value;
    if (valor <= 0) {
        document.formulario.sueldoti.value = "Ojo a la comedia"
    } else {
        let result = parseInt(valor);
        let interes = result * 0.02;
        let total = result + interes;
        document.formulario.sueldoti.value = "$" + total;
    }
}

function borrar() {
    document.formulario.sueldoti.value = "";
    document.formulario.cantidad.value = "";
}
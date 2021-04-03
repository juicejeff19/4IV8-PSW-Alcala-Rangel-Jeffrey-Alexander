function desc() {
    let monto = parseFloat(document.formulario.total1.value);
    let total = monto - monto * 0.15;
    if (monto < 0 || document.formulario.total1.value.length == 0) {
        document.formulario.totalcondesc.value = "Ojo a la comedia";
    } else {

        document.formulario.totalcondesc.value = total;
    }
}

function borrar() {
    document.formulario.total1.value = "";
    document.formulario.totalcondesc.value = "";
}

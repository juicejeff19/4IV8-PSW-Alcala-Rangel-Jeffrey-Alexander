function hours() {
    let pago = parseFloat(document.formulario.porhora.value);
    let horas = parseFloat(document.formulario.horas.value);
    if (horas<=40){
        document.formulario.pagototal.value = pago*horas;
    }else if (horas>40 && horas<=48){
        document.formulario.pagototal.value = ((pago*(horas-40)*2)+(40*pago));
    }else if (horas>48){
        document.formulario.pagototal.value = (40*pago+((8*pago)*2)+(((horas-48)*pago)*3));
    }
}

function borrar() {
    document.formulario.pagototal.value = "";
    document.formulario.porhora.value = "";
    document.formulario.horas.value = "";
}
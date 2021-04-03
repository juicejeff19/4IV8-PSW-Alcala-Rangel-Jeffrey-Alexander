function cal() {
    let parciales = parseFloat(document.formulario.parciales.value);
    let examen = parseFloat(document.formulario.examen.value);
    let trabajo = parseFloat(document.formulario.tFinal.value);
    if (document.formulario.parciales.value.length == 0 || document.formulario.examen.value.length==0 ||
        document.formulario.tFinal.value.length==0){
        document.formulario.calificacionFinal.value = "Ojo a la comedia"
    }else if (parciales<0 || examen<0 || trabajo<0){
        document.formulario.calificacionFinal.value = "Ojo a la comedia"
    }else if(parciales>30 || examen>10 || trabajo>10){
        document.formulario.calificacionFinal.value = "Ojo a la comedia"
    }else{
        calificacion = ((parciales/3)*0.55)+(examen*0.30)+(trabajo*0.15);
        document.formulario.calificacionFinal.value = calificacion;
    }
}

function borrar() {
    document.formulario.parciales.value = "";
    document.formulario.examen.value = "";
    document.formulario.tFinal.value = "";
    document.formulario.calificacionFinal.value = "";
}
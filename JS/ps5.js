function porcentajes() {
    let hombres = parseFloat(document.formulario.hombres.value);
    let mujeres = parseFloat(document.formulario.mujeres.value);
    let total = hombres+mujeres;
    let porHombres = (hombres*100)/total;
    let porMujeres = (mujeres*100)/total;
    document.formulario.porcentajeHombres.value = porHombres+"%";
    document.formulario.porcentajeMujeres.value = porMujeres+"%";
}

function borrar() {
    document.formulario.porcentajeHombres.value = "";
    document.formulario.porcentajeMujeres.value = "";
    document.formulario.hombres.value = "";
    document.formulario.mujeres.value = "";
}
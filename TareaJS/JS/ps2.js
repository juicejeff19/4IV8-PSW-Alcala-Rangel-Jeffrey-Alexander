function calcular() {
    let sueldo = parseFloat(document.formulario.suelBase.value);
    let venta1 = parseFloat(document.formulario.primVent.value);
    let venta2 = parseFloat(document.formulario.segVent.value);
    let venta3 = parseFloat(document.formulario.terVent.value);
    if (sueldo < 0 || venta1 < 0 || venta2 < 0 || venta3 < 0) {
        document.formulario.sueldoper.value = "Ojo a la comedia";
    }else{
        if (document.formulario.suelBase.value.length==0 || document.formulario.primVent.value.length==0 ||
            document.formulario.segVent.value.length==0 || document.formulario.terVent.value.length==0){
            document.formulario.sueldoper.value = "Ojo a la comedia";
        }else {
             let sueldotot;
             sueldotot = sueldo+(venta1*0.10)+(venta2*0.10)+(venta3*0.10);

            document.formulario.sueldoper.value = sueldotot;
        }
    }
}

function borrar() {
    document.formulario.suelBase.value = "";
    document.formulario.primVent.value = "";
    document.formulario.segVent.value = "";
    document.formulario.terVent.value = "";
    document.formulario.sueldoper.value = "";
}
function utilidades() {
    let salary = parseFloat(document.formulario.salario.value);
    let years = parseFloat(document.formulario.añosTrabajando.value);
    if (years<1){
        document.formulario.utilidades1.value = salary*0.5;
    }else if (years>=1 && years<2){
        document.formulario.utilidades1.value = salary*0.7;
    }else if (years>=2 && years<5){
        document.formulario.utilidades1.value = salary*0.10;
    }else if (years>=5 && years<10){
        document.formulario.utilidades1.value = salary*0.15;
    }else if (years>=10){
        document.formulario.utilidades1.value = salary*0.20;
    }else if (years<0 || salary<0){
        document.formulario.utilidades1.value = "Ojo a la comedia";
    }
}

function borrar() {
    document.formulario.utilidades1.value = "";
    document.formulario.salario.value = "";
    document.formulario.añosTrabajando.value = "";
}
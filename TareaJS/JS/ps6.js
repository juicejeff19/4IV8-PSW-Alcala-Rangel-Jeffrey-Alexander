function calcEdad() {
    let años = document.formulario.años.value;
    if (años > 130) {
        document.formulario.edad.value = "Ojo a la comedia";
    } else {
        document.formulario.edad.value = años + " años";
    }
}

function borrar() {
    document.formulario.años.value = "";
    document.formulario.edad.value = "";
}
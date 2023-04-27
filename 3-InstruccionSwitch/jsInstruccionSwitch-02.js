function mostrar() {
    let mes
    mes = (document.getElementById("txtMes").value)

    switch (mes) {
        case "Julio":
        case "Agosto":
            alert("abrigate que hace frio");
            break;
        case "Septiembre":
        case "Octubre":
        case "Noviembre":
        case "Diciembre":
            alert("hace calor");
            break;
        default:
            alert("falta para el invierno")


    }

}
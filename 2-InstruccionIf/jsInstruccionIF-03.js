function mostrar() {

	let edad

	edad = parseInt(document.getElementById("txtEdad").value)
	if (edad >= 18) {
		alert("Usted es mayor de edad ");
	}
	else {
		alert("Usted es menor de edad ");
	}


}
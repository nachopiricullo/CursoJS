function mostrar() {

	let edad

	edad = parseInt(document.getElementById("txtEdad").value)
	if (edad >= 18) {
		alert("Es mayor de edad ");
	}
	else {
		if (edad < 13)
			alert(" Es niño")
		else alert("Es adolescente")
	}


	

}
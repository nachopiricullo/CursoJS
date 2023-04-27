function mostrar()
{let edad

	edad = parseInt(document.getElementById("txtEdad").value)
	if (edad <= 12 || edad >= 18) {
			alert("Usted NO es adolescente ");
		}
	}
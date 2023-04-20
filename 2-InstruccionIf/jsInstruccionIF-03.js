function mostrar() {
  let edad;
  edad = parseInt(document.getElementById("txtEdad").value);
  if (edad >= 18) {
    alert("sos mayor de edad");
  } else {
    alert("sos menor");
  }
}

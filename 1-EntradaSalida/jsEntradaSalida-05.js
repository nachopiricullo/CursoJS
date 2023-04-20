/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar() {
  //variable donde se guarda//
  let nombre;
  nombre = document.getElementById("txtNombre").value;
  let edad;
  edad = document.getElementById("txtEdad").value;
  alert(" usted se llama " + nombre + " y tiene " + edad + " años ");
}

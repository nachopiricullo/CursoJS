/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento() {
  let sueldo;
  let aumento;
  let sueldofinal;
  sueldo = parseInt(document.getElementById("txtSueldo").value);
  aumento = sueldo * 0.1;
  sueldofinal = sueldo + aumento;
  document.getElementById("txtResultado").value = sueldofinal;
}

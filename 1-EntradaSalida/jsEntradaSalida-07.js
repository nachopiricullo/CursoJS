/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/
function sumar() {
  let numero1;
  let numero2;
  let suma;
  numero1 = document.getElementById("txtNumeroUno").value;
  numero2 = document.getElementById("txtNumeroDos").value;
  numero1 = parseInt(numero1);
  numero2 = parseInt(numero2);
  suma = numero1 + numero2;
  alert("La suma es " + suma);
}

function restar() {
  let numero1;
  let numero2;
  let resta;
  numero1 = document.getElementById("txtNumeroUno").value;
  numero2 = document.getElementById("txtNumeroDos").value;
  numero1 = parseInt(numero1);
  numero2 = parseInt(numero2);
  resta = numero1 - numero2;
  alert("La resta es " + resta);
}

function multiplicar() {
  let numero1;
  let numero2;
  let multiplicacion;
  numero1 = document.getElementById("txtNumeroUno").value;
  numero2 = document.getElementById("txtNumeroDos").value;
  numero1 = parseInt(numero1);
  numero2 = parseInt(numero2);
  multiplicacion = numero1 * numero2;
  alert("La multiplicacion es " + multiplicacion);
}

function dividir() {
  let numero1;
  let numero2;
  let division;
  numero1 = document.getElementById("txtNumeroUno").value;
  numero2 = document.getElementById("txtNumeroDos").value;
  numero1 = parseInt(numero1);
  numero2 = parseInt(numero2);
  division = numero1 / numero2;
  alert("La division es " + division);
}

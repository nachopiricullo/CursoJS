/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto() {
  let numero1;
  let numero2;
  let resto;
  numero1 = document.getElementById("txtDividendo").value;
  numero2 = document.getElementById("txtDivisor").value;
  numero1 = parseInt(numero1);
  numero2 = parseInt(numero2);
  resto = numero1 % numero2;
  alert("el resto es " + resto);
}

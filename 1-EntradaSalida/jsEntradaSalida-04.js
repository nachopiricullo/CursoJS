/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	// variable nombre con el let//
let nombre;

// agarra la info //
nombre = prompt ("Ingrese su nombre")

 //caja de texto, el valor de la caja de texto// 
 document.getElementById ("txtNombre").value = nombre

}


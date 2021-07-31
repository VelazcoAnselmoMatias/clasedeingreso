/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;

	numeroIngresado = prompt("ingrese un número entre 0 y 10.");
	numeroIngresado=parseInt(numeroIngresado);

	while(numeroIngresado<0|| numeroIngresado>10)
	{
		numeroIngresado=prompt("numero invalido, ingrese nuevamente numero");
	}
	alert("su numero fue " +numeroIngresado);
		
	
}//VELAZCO ANSELMO MATIAS
/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	/*var contador;
	var acumulador;
	var respuesta;
	var numero
	contador=0;
	acumulador=0;
	respuesta='si';*/
	var numeroIngresado;
	var promedio;
	var acumulador=0;
	var numero=0;
	var respuesta="si";

	do
	{
		numeroIngresado = prompt("ingrese numero: ");
		numeroIngresado=parseInt(numeroIngresado);
		acumulador=acumulador+numeroIngresado;
		numero=numero + 1;
		respuesta=prompt("quiere seguir sumando? si/No");
	}while(respuesta=="si");

	promedio=acumulador/numero;

	txtIdSuma.value=acumulador;
	txtIdPromedio.value=promedio;

}VELAZCO ANSELMO MATIAS
function mostrar()
{
	var numeroIngresado;
	var promedio;
	var acumulador=0;
	var numero=0;
	
	
	while(numero<5){
		numeroIngresado = prompt("ingrese numero: ");
		numeroIngresado=parseInt(numeroIngresado);
		acumulador=acumulador+numeroIngresado;
		numero=numero + 1;
	}
		
	 promedio=acumulador / 5;

	
	
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=promedio;
}//VELAZCO ANSELMO MATIAS
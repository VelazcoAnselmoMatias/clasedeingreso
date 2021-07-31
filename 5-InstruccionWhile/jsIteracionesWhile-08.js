/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var numeroIngresado;
	var acumulador=0;
	var respuesta="si";
	var acumuladorPositivo=0;
	var acumuladorNegativo=0;
	var banderaDelPrimero=0;
	

	

	while(respuesta=="si")
		{
			numeroIngresado=prompt("ingrese numero");
			numeroIngresado=parseInt(numeroIngresado);
		if (numeroIngresado>0)
		{

acumuladorPositivo= acumuladorPositivo+numeroIngresado;
		
		}
			else if (banderaDelPrimero==0) 
			{
				banderaDelPrimero= 1;
				acumuladorNegativo=numeroIngresado;
				
			}
				else{
					acumuladorNegativo= (acumuladorNegativo)*(numeroIngresado);

				
			}
				
			
			


		
	
	
		respuesta=prompt("quiere seguir.si/no");
}
		
		txtIdSuma.value=acumuladorPositivo;
		txtIdProducto.value=acumuladorNegativo;
	


}//FIN DE LA FUNCIÓN

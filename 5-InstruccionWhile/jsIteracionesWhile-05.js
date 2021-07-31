/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;
	
	sexoIngresado = prompt("ingrese f ó m .");
	

		//while(sexoIngresado != "f"|| sexoIngresado != "m")
		while(!(sexoIngresado=="f" || sexoIngresado=="m"))
	
	
	{

		sexoIngresado=prompt("ingrese sexo nuevamente");
	}
	


	txtIdSexo.value=sexoIngresado;
} //LINEA 11- NOSE PORQUE ESCRIBIENDOLO EN DOS PARTES NO ME TOMABA EL != , TUVE QUE PONERLO TODO JUNTO PARA QUE ME LO TOME
	//VELAZCO ANSELMO MATIAS
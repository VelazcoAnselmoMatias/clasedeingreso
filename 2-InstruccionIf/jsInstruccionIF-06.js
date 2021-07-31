function mostrar()
{
	var edad;

	edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);

	if (edad>=18) 
	{
		alert("usted es mayor de edad ");
	} 
	else 
	{
		if 	(edad>13 && edad<=17)
		{	
		 	alert ("usted es adolecente");

		}	
		else
		{ 
			alert("usted es un nino ");
		}
	}
		
}



function mostrar()
{
	var edad;
	var estadoCivil;
	var edadValida;

	edad=document.getElementById("txtIdEdad").value;
	estadoCivil=document.getElementById("estadoCivil").value;
	edad=parseInt(edad);
	edadValida = edad >18;


	if (estadoCivil = "Soltero" && edadValida) 
	{
		alert("es soltero y no es menor");
	}

}


function mostrar()
{var nota
	nota= Math.round(Math.random()*9+1);
	if (nota==9 || nota==10) 
	{
		alert("EXELENTE" + nota);
	}
	else if (nota>=4 && nota<9)
	{
		alert("APROBO" + nota);
	}	
	
	else
	{
		alert("VAMOS, LA PRXIMA TU PUEDES " + nota)

	}

}//FIN DE LA FUNCIÓN
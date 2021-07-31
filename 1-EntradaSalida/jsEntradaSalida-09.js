/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo;
	var aumentoSueldo;
	var resultado;
	var aumentoCalculado;

	sueldo=document.getElementById("txtIdSueldo").value;
	sueldo=parseInt(sueldo);

	aumento=prompt("ingrese aumento");
	aumento=parseInt(aumento);

	
	aumentoCalculado=(sueldo*aumento)/100;

	resultado=sueldo+aumentoCalculado;


	document.getElementById("txtIdResultado").value=resultado;

}

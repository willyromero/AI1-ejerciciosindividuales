function Reiniciar(){
	location.reload();
}

function Positivo(dato){
	if (dato>=0) {
		return true;
	}
	else{
		alert("El campo con valor " + dato + " es incorrecto.");
		return false;	
	}
}

function operacion2(){
	var t = parseFloat(document.getElementById('t').value);
	if (Positivo(t)) {
		//document.ejercicio1.resp1.text = GradosMinutosSegundos(h, l);
		document.getElementById("respuesta2").innerHTML = "Altura inicial de caída " + AlturaCuerpo(t) + "(m).";
	}
}

function AlturaCuerpo(t){
	var altura = (0.5)*(9.81)*(Math.pow(t, 2));
	return altura;
}
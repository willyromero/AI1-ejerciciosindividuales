function Reiniciar(){
	location.reload();
}

function Positivo(dato){
	if (dato>=0) {
		return true;
	}
	else{
		alert("El campo con valor " + dato + " es incorrecto");
		return false;	
	}
}

function operacion1(){
	var h = parseFloat(document.getElementById('h').value);
	var l = parseFloat(document.getElementById('l').value);
	//document.ejercicio1.resp1.text = GradosMinutosSegundos(h, l);
	if (Positivo(h) && Positivo(l)) {
		document.getElementById("respuesta1").innerHTML = GradosMinutosSegundos(h, l);
	}
	
}

function GradosMinutosSegundos(h, l){
	var ti, grados, m, min, s; 
	ti  = Math.atan(h / l)*180;
	ti = ti.toFixed(3);
	grados = Math.trunc(ti);
	m = (ti - grados)*60;
	min = Math.trunc(m);
	s = (m - min)*60;
	s = s.toFixed(3);
	return grados + " grados " + min + " minutos " + s + " segundos";
}
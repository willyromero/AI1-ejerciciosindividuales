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
function operacion3(){
	var n1 = document.getElementById('n1').value;	
	var n2 = document.getElementById('n2').value;	
	var n3 = document.getElementById('n3').value;	
	var n4 = document.getElementById('n4').value;	
	var n5 = document.getElementById('n5').value;	
	if (Positivo(n1) && Positivo(n2) && Positivo(n3) && Positivo(n4) && Positivo(n5)) {
		//document.ejercicio1.resp1.text = GradosMinutosSegundos(h, l);
		document.getElementById("respuesta3").innerHTML = SextoNumero(n1, n2, n3, n4, n5);		
	}
}

function SextoNumero(n1, n2, n3, n4, n5){
	if (validar(n1, n2, n3, n4, n5) != false) {
		return n1[0] + n2[1] + n3[2] + n4[3] + n5[4];
	}
	else{
		return "verifique que los números sean de 5 cifras";
	}
}

function validar(n1, n2, n3, n4, n5){
	if (n1.length != 5) {
		return false;
	}
	if (n2.length != 5) {
		return false;
	}
	if (n3.length != 5) {
		return false;
	}
	if (n4.length != 5) {
		return false;
	}
	if (n5.length != 5) {
		return false;
	}	
}

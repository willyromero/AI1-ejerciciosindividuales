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

function DatosKilometros(){
	var km = parseInt(document.getElementById('km').value);
	if (Positivo(km)) {
		document.getElementById("monto1").innerHTML = "$ " + (CalcularMontoRecorrido(km)+300000);
		document.getElementById("monto2").innerHTML = "$ " + CalcularMontoRecorrido(km);
	}
}

function CalcularMontoRecorrido(km){
	var montoAdicional = 0;
	if (km>300 && km<=1000) {
		montoAdicional=(km-300)*15.000;
	}
	else{
		if (km>1000) {
			montoAdicional=(km-1000)*10.000;
		}
	}
	return montoAdicional;
}
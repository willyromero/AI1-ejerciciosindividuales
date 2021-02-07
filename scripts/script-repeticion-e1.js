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

var recaudado = 0, mayor = 0, atendidos = 0;
var gd = true;
function ProcesarDatosGasolinera(){
	var gasolinera = parseFloat(document.getElementById('gasolinera').value);
	var vehiculo = parseFloat(document.getElementById('vehiculo').value);
	if (Positivo(gasolinera) && Positivo(vehiculo) && DisponibilidadGasolina(gasolinera, vehiculo)) {
		document.eGasolinera.gasolinera.value = DescontarGasolina(gasolinera, vehiculo);
		document.getElementById("gd").value = DescontarGasolina(gasolinera, vehiculo);
		document.getElementById("gdp").innerHTML = DescontarGasolina(gasolinera, vehiculo) +" litro(s) disponibles en el tanque de la gasolinera";
		document.getElementById("r1").innerHTML = VehiculosAtendidos(vehiculo);
		document.getElementById("r2").innerHTML = DineroRecaudado(vehiculo);
		document.getElementById("r3").innerHTML = EncontrarMayorConsumidor(vehiculo);	
	}
}

function GraficarGasolinera(){
	var gasolinera = parseFloat(document.getElementById('gasolinera').value);
	if (gd == true && Positivo(gasolinera)) {
		IniciarMeter(gasolinera);	
		document.getElementById("gdp").innerHTML = gasolinera + " litro(s) disponibles en el tanque de la gasolinera";
	}
}

function IniciarMeter(gasolinera){

	document.getElementById("gd").max = gasolinera;
	document.getElementById("gd").low = gasolinera*0.3;
	document.getElementById("gd").optimun = gasolinera*0.5;
	document.getElementById("gd").value = gasolinera;
	document.getElementById("gdp").innerHTML = gasolinera + " litro(s) disponibles en el tanque de la gasolinera";
	gd = false;
}

function DisponibilidadGasolina(gasolinera, vehiculo){
	if (gasolinera >= vehiculo) {
		return true;
	}
	else{
		alert("La gasolinera no cuenta con la cantidad de gasolina solicitada");
	}
}

function DescontarGasolina(gasolinera, vehiculo){
	return gasolinera - vehiculo;	
}

function VehiculosAtendidos(vehiculo){
	if (vehiculo > 0) {
		return ++atendidos;	
	}
	else{
		return atendidos;
	}
}

function DineroRecaudado(vehiculo){
	recaudado += (vehiculo*1.25)
	return "$ " + recaudado;
}

function EncontrarMayorConsumidor(vehiculo){
	if (vehiculo>mayor) {
		mayor = vehiculo;
	}
	return mayor + " litro(s)";
}
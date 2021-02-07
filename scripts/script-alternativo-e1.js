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

function DatosCompra(){
	var precio = parseFloat(document.getElementById('prec').value);
	var cantidad = parseInt(document.getElementById('cant').value);
	if (Positivo(precio) && Positivo(cantidad)) {
		var subtotal = (cantidad*precio);
		document.getElementById("rCantidadO").innerHTML =  ObtenerUnidadesObsequio(cantidad);
		document.getElementById("rCantidadT").innerHTML =  cantidad + ObtenerUnidadesObsequio(cantidad);
		document.getElementById("rSubtotal").innerHTML =  subtotal;
		document.getElementById("rDescuento").innerHTML =  ObtenerDescuento(cantidad, subtotal);
		document.getElementById("rTotal").innerHTML =  (subtotal - ObtenerDescuento(cantidad, subtotal));
	}
	
}

function ObtenerDescuento(cant, sub){
	if (cant>=36) {
		return ((sub)*0.15).toFixed(3);
	}
	else{
		return ((sub)*0.10).toFixed(3);
	}
}

function ObtenerUnidadesObsequio(cant){
	if (cant>36) {
		var cont = 0;
		for (var i = 36; i <= (cant); i+=12) {
			cont++;
		}
		return cont;
	}
	return 0;
}
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

function ConvertirDecimalBinario(){
	var nb10 = parseInt(document.getElementById('nb10').value);
    if (Positivo(nb10)) {
        document.getElementById("r1").innerHTML = Conversion(nb10);    
    }
}

function Conversion(nb10){
	var result='';

	do {
		result = parseInt(nb10%2) + result;
 		nb10 = parseInt(nb10/2);
	} while (nb10 > 0);
	return result;
	/*return nb10.toString(2);*/
}
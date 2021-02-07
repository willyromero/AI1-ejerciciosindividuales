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

function EncontrarCubosNarcisistas(){
	var vi = parseInt(document.getElementById('vi').value);
	var vf = parseInt(document.getElementById('vf').value);
	if (Positivo(vi) && Positivo (vf) && vi<=vf) {
		document.getElementById("r1").innerHTML = CubosNarcisistas(vi, vf);
	}
	else{
		alert("Verifique que los valores ingresados sean positivos y enteros, además el valor inicial debe ser menor o igual al valor final");
	}
}

function CubosNarcisistas(vi, vf){
	var res="<br>", suma, pos = 0;
	var digitos;
	for(var i = vi; i <= vf; i++)
    {
    	suma = 0;
    	digitos = String(i);
    	for(var j = 0; j < digitos.length; j++)
	    {
	       suma += Math.pow(parseInt(digitos[j]), 3); 
	    }
 		if (suma == i) {
	    	res+= "<b>"+ ++pos + ".</b> " + suma + "<br>";
	    }    
	}
    return res;
}
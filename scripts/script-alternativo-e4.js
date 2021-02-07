function DatosEdad(){
	var fecha = (document.getElementById('fecha').value);
	document.getElementById("edad").innerHTML = calcularEdad(fecha);
}

function calcularEdad(fecha) {

 	var vfecha = fecha.split("-");
 	if (vfecha.length==3) {
		var d = vfecha[2];
		var m = vfecha[1];
		var a = vfecha[0];
		 
		fecha_hoy = new Date();
		aa = fecha_hoy.getYear();
		mm = fecha_hoy.getMonth();
		dd = fecha_hoy.getDate();
		edad = (aa + 1900) - a;
	    
	    if ( mm < (m - 1)){
	      edad--;
	    }
	    if (((m - 1) == mm) && (dd < d)){ 
	      edad--;
	    }
	    if (edad > 1900){
	        edad -= 1900;
	    }
     	return edad + " año(s) de edad.";		 		
 	}   
 	else{
 		return "Verifique la fecha de nacimiento establecida."
 	}
}

function Reiniciar(){
	location.reload();
}

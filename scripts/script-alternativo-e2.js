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

function DatosTiempo(){
	var hh = parseInt(document.getElementById('hh').value);
	var mm = parseInt(document.getElementById('mm').value);
	var ss = parseInt(document.getElementById('ss').value);
	if (Positivo(hh) && Positivo(mm) && Positivo(ss)) {
		document.getElementById("ResultadoTiempo").innerHTML = CalcularHora(hh, mm, ss);
	}
}

function CalcularHora(hh, mm, ss){
	if (hh != 0 || mm != 0 || ss != 0){
		ss+=1;
		if (ss>59) {
			ss=0;
			mm+=1;
			if (mm>59) {
				mm=0;
				hh+=1;
				if (hh>23) {
					hh=0;
				}
			}
		}
		return hh + ":" + mm + ":" + ss;
	}
	else{
		return "00:00:01";
	}
}
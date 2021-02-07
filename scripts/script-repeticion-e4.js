function EncontrarNumerosDosCifras(){
	var digitos = "Listado de números de dos cifras:<ul>";
	for (var i = 1; i <=4; i++) {
		for (var j = 1; j <=4; j++) {
			if (i!=j) {
				/*digitos += "<li>"String(i) + String(j)+ "</li><br>";*/
				digitos += "<li>" + i + "" + j + "</li>";
			}
		}	
	}
	digitos += "</ul>";
	document.getElementById("r1").innerHTML = digitos;
}
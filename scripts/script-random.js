function jugar(){
	var n1 = Math.floor(Math.random() * 8);
	var n2 = Math.floor(Math.random() * 8);
	var n3 = Math.floor(Math.random() * 8);
	document.getElementById("r1").innerHTML = n1;
	document.getElementById("r2").innerHTML = n2;
	document.getElementById("r3").innerHTML = n3;
	if (n1 == 7 && n2 == 7 && n3 == 7) {
		document.body.style.backgroundColor = "#66ff66";
	}
	else{
		if ((n1 == 7 && n2 == 7) || (n3 == 7 && n2 == 7) || (n1 == 7 && n3 == 7)) {
		document.body.style.backgroundColor = "#1aa3ff";
		}
		else{
			document.body.style.backgroundColor = "white";
		}
	}
}

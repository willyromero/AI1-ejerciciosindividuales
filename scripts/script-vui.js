$(document).ready(function() {
    var recognition = new webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.lang = "es";
 
    $('#btnIcono1').click(function(event) {
        recognition.start();
    });
    $('#btnIcono2').click(function(event) {
        recognition.stop();
        document.getElementById("td").innerHTML += " ";
    });
	 $('#btnIcono3').click(function(event) {
	 	//recognition.abort();
        document.getElementById("td").innerHTML ="";

    });

    recognition.onresult = function (event) {
        finalResult = '';
        for (var i = event.resultIndex; i < event.results.length; ++i) {
            if (event.results[i].isFinal) {
                finalResult = event.results[i][0].transcript;
                /*$('#td').val(finalResult);*/
                document.getElementById("td").innerHTML += finalResult;
            }
        }
    };
});

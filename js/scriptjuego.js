var video = document.getElementById('screamer');
var audio = document.getElementById('tema');

document.getElementById('player').addEventListener("mouseover",sumarPuntos);

puntos = 0;
tiempo = 60;
necesarios = 40;
function sumarPuntos(){
	puntos++;
	document.getElementById("puntos").innerHTML ="Puntos: <b>"+ puntos + "/" + necesarios + "  </b>";
	randNum= Math.round(Math.random()*350);
	randNum2= Math.round(Math.random()*350);
	document.getElementById("player").style.marginTop= randNum +"px";
	document.getElementById("player").style.marginLeft= randNum2 +"px";
	if (puntos == 40) {
		document.getElementById('tema').pause();
		document.getElementById("screamer").hidden= false;
		document.getElementById("screamer").play();

		setTimeout(mostrar,2000);
		function mostrar(){
		puntos = 0
		tiempo = 60	
		var pregunta = confirm("¿Volver a jugar?");
		alert((pregunta) ? "Empiezas ahora mismo!!" : "Pues que mal vas a seguir!");

		
		}
		setTimeout(replay,2000);
		function replay(){
		document.getElementById("screamer").hidden= true;
		document.getElementById('tema').play();
		

		}
		
		}
		

	}



function restarTiempo(){
	tiempo--;
	document.getElementById("tiempo").innerHTML = "&nbsp;&nbsp;&nbsp;Tiempo: "+tiempo;
	if (tiempo == 0) {
		document.getElementById('tema').pause();
		document.getElementById("screamer").hidden= false;
		document.getElementById("screamer").play();

		setTimeout(mostrar,2000);
		function mostrar(){
		puntos = 0
		tiempo = 60
		var pregunta = confirm("¿Volver a jugar?");
		alert((pregunta) ? "Empiezas ahora mismo!!" : "Pues que mal vas a seguir!");
		
		
		}	
		setTimeout(replay,2000);
		function replay(){
		document.getElementById("screamer").hidden= true;
		document.getElementById('tema').play();

		

		}

	}
}



setInterval(restarTiempo,1000);
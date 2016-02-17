$(function(){
	function num(number){
		return (number >= 10) ?  number : '0'+number;
	}

	function converteEmTempo(segundos){
		var hora = Math.floor((segundos/3600));
		var qtdSec = hora*3600;
		var restante = segundos-qtdSec;

		var minutos = Math.floor((restante/60));
		qtdSec = minutos*60;
		var segundos = restante-qtdSec;

		return num(hora)+':'+num(minutos)+':'+num(segundos);
	}

	function converteEmSegundos(time){
		var tempo = time.split(':');

		var horaSec = (tempo[0]*60)*60;
		var minSec = (tempo[1]*60);
		return horaSec+minSec+Number(tempo[2]);
	}

	var segundos = converteEmSegundos('00:01:00');
	var t = setInterval(function(){
		segundos -= 1;
		$('.timer p').html(converteEmTempo(segundos));
		if(segundos == 0){
			var icon = 'http://downsmaster.com/public/images/logo.png';
			var title = 'Mensagem vinda do timer';
			var mensagem = 'Assista ao curso de Programação Orientada a Objetos do Downs Master';
			var link = 'http://cursos.downsmaster.com';
			notifyMe(icon, title, mensagem, link);

			clearInterval(t);
		}
	}, 1000);
});
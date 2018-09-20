
function Juego(){
	this.nombre="nombre";
	this.usuarios=[];
	this.preguntas=[];
	this.agregarUsuario=function(usr){
		this.usuarios.push(usr);
	}
	this.agregarPregunta=function(pregunta){
		this.preguntas.push(pregunta);
	}
	this.preguntasIniciales=function(){
		var preg=new Pregunta("Capital de Francia")
		preg.agregarRespuesta(new Respuesta("Madrid",false));
		preg.agregarRespuesta(new Respuesta("Lisboa",false));
		preg.agregarRespuesta(new Respuesta("Paris",true));
		preg.agregarRespuesta(new Respuesta("Toledo",false));
		this.agregarPregunta(preg);

		var preg=new Pregunta("Capital de Italia");
		preg.agregarRespuesta(new Respuesta("Roma",true));
		preg.agregarRespuesta(new Respuesta("Lisboa",false));
		preg.agregarRespuesta(new Respuesta("Londres",false));
		preg.agregarRespuesta(new Respuesta("Praga",false));
		this.agregarPregunta(preg);
	}

	this.preguntasIniciales();
}

function Usuario(nombre){
	this.nombre=nombre;
	this.puntos=0;
}

function Pregunta(enunciado){
	this.enunciado=enunciado;
	this.respuestas=[];
	this.agregarRespuesta=function(resp){
		this.respuestas.push(resp);
	}
}

function Respuesta(texto,correcta){
	this.texto=texto;
	this.correcta=correcta;
}
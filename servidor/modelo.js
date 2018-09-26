
function Juego(){
	this.nombre="nombre";
	this.usuarios=[];
	this.cuestionarios=[];
	this.agregarUsuario=function(usr){
		this.usuarios.push(usr);
	}
	this.agregarCuestionario=function(cuest){
		this.cuestionarios.push(cuest);
	}
	this.agregarCuestionario(cuestionarioTest());
}

function Usuario(nombre){
	this.nombre=nombre;
	this.puntos=0;
}

function Cuestionario(nombre){
	this.nombre=nombre;
	this.preguntas=[];
	this.agregarPregunta=function(pregunta){
		this.preguntas.push(pregunta);
	}
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

function cuestionarioTest(){
	var cues=new Cuestionario("Capitales");
	var preg=new Pregunta("Capital de Francia")
	preg.agregarRespuesta(new Respuesta("Madrid",false));
	preg.agregarRespuesta(new Respuesta("Lisboa",false));
	preg.agregarRespuesta(new Respuesta("Paris",true));
	preg.agregarRespuesta(new Respuesta("Toledo",false));
	cues.agregarPregunta(preg);

	var preg=new Pregunta("Capital de Italia");
	preg.agregarRespuesta(new Respuesta("Roma",true));
	preg.agregarRespuesta(new Respuesta("Lisboa",false));
	preg.agregarRespuesta(new Respuesta("Londres",false));
	preg.agregarRespuesta(new Respuesta("Praga",false));
	cues.agregarPregunta(preg);
	
	return cues;
}

module.exports.Juego=Juego;
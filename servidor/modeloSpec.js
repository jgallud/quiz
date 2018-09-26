var modelo = require('./modelo.js');

describe("El juego del Quiz",function(){

	var juego;

	beforeEach(function(){
		juego =new modelo.Juego();
	});

	it("control de valores iniciales",function(){
		expect(juego.cuestionarios).toBeDefined();
		expect(juego.usuarios).toBeDefined();
	});

	it("hay un cuestionario creado",function(){
		expect(juego.cuestionarios.length).toEqual(1);
	});

	it("el cuestionario tiene 2 preguntas",function(){
		expect(juego.cuestionarios[0].preguntas.length).toEqual(2);
	})

});
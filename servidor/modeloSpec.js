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

});
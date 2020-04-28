document.write("<br>");
/*
document.write(cachorro.latir("auau"));
document.write("<br>");
document.write(cachorro.andar(cachorro.nome))
console.log(Object.getPrototypeOf(cachorro))
console.log(cachorro.hasOwnProperty('andar'));
let newPet = Object.create(cachorro);
newPet.nome = "jao";
console.log(newPet.latir( newPet.andar() + " e latindo muamua"))
///////
let pastor= Object.create(cachorro);
pastor.nome = "dylan";
console.log(pastor.nome)
///
const cachorro = {
	nome: "bob",
	latir: function(fala) {
		return fala;
	},
	andar: function(nome){
		return this.nome + " esta andando";
	}
}
function Cachorro(nome,raca = "vira lata",cor = "marrom"){
	let dog = Object.create({});
	dog.nome = nome;
	dog.raca = raca;
	dog.cor = cor;
	console.log(dog);
	return dog;	
}Cachorro("bob",undefined,"preto");Cachorro("dylan","labrador",undefined);Cachorro("jao","pastor","vermelho");
function Cachorro(nome,raca = "vira lata",cor = "marrom"){
	this.nome = nome;
	this.raca = raca;
	this.cor = cor;
	console.log(this.Cachorro);
}
Cachorro.prototype.uivar = function(){
	console.log("auaua");
}

let husky = new Cachorro('husky',undefined,'cinza');

husky.uivar();
class Dog{
	constructor(raca,nome){
		this.raca = raca;
		this.nome = nome;
	}
	get Vraca(){
		return 'A raça é ' + this.raca;
	}
	set nraca(value){
		this.raca = value;
	}

}
let Labrador = new Dog('mano',"paulo");

Labrador.nraca("pastor");
console.log(Labrador.Vraca());
class Human{
	constructor(nome,idade,raca = "Humano"){
		this.nome = nome;
		this.idade = idade;
		this.raca = raca;
	}
}
class Pirata extends Human{
	constructor(nome,idade,raca,recompensa){
		super(nome,idade,raca);
		this.recompensa = recompensa;
	}
}
let human = new Pirata("luffy","19",undefined,"1.500.000.000");
console.log(human);*/
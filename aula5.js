/*
//arrays2
let produtos = ["maca","banana","frutas"]
for (var i = 0; i <= produtos.length; i++) {
	console.log(produtos[i]);
}
document.write("<br>");
produtos.pop()//apaga ultimo elemento do array
produtos.push('laranja');//adiciona no fim do array
produtos.lastIndexOf('laranja');//pega ultimo indice de laranja
console.log(produtos);
produtos.unshift('laranja')//adiciona laranja in the inicio
console.log(produtos);
produtos.shift("laranja")//remove primeira laranja
console.log(produtos);
console.log(produtos.indexOf("laranja"));//pega primeiro indice de laranja
console.log(produtos);
console.log(produtos.slice(0,2));

///foreach
const nums = [1,2,3,4,5,6,7,87];
nums.forEach(num =>{
	if (num > 3 && num < 80){
		nums.push(num +1);
		console.log(num);
	}
});console.log(nums);
///incluedes
let carros = ["bmw", "fiat", "audi"];
let a = carros.includes("audian");//verifica se eciste no array
if (a) {console.log("existe")}else{
	console.log("not exists")
}
console.log(carros.reverse());
/// trim
let texto = "\n fkwalaçf~ççsagçdsfg~wçágt;fgã \n çõiwqefgçdsf~h<BR><hr><li> açvfasf~gsçdçã~\n";
console.log(texto.trim());//valida texto removendo oq n for string 
carros.forEach(carro =>{
	document.write("<li>"+carro+"</li>")
})
///PadStart
let string = 'a';
console.log(string.padStart(6,'2'));//adiciona '2' suficientes ate completar 6 caracteres na string 'a'
///split e join
let string2 = "eu conheci uma garota que joga undertale";
let palavras = string2.split(" ");//separa string em lista
console.log(palavras);
document.write(palavras.join(" "));//junta lista em string
console.log("adryell".repeat(5));
///rest operator
function imprimir(...args) {
	console.log(args);
}imprimir(1,2,3,4,5,6,7,8,9);
///destructuring objetos,arrays igual a decomposicao em matematica
const pessoa = {
	nome: "adryell",
	idade: "17"
}

const {nome: cnome, idade: cidade} = pessoa;
console.log(cnome);
let nomes = [1,3,2];
let [num1,num2,num3] = nomes;
console.log(num1);
///// JSON JavasCriptoBjectNotation
let pessoa = {
	"nome":"Adryell",
	"idade":"17",
	"altura": "1.76",
	"peso": "96"
}
console.log(pessoa.nome);
let pessoa1 = JSON.stringify(pessoa);
console.log(pessoa1);
let pessoaJSON = JSON.parse(pessoa1);
console.log(pessoaJSON.peso);*/
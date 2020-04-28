 ///ex1
 let numeros = [1,2,3,4,5];
 console.log(numeros[1]);
 console.log(numeros.slice(3,5));
 ///ex2
 let numeros0 = [1,2]
 let numeros1 = [1,2,3,4]
 console.log(numeros0.length,numeros1.length);
 ///ex3
 let onibus = {
 	rodas: "8",
 	limitepassag: "40",
 	portas: "2"
}
console.log(onibus.rodas);
console.log(onibus.limitepassag);
console.log(onibus.portas);
//ex4
onibus.janelas = "3";
delete onibus.rodas;
console.log(onibus)
//ex5
let nomes = ['adryell', 'jao', 'mari'];
if(nomes.includes('s')){
	console.log("existe");
}else{
	console.log("n");
}
//ex6
array1 = [true,false,false,false,0,1];
array2 = [true];
function imprimeQtdd(array){
	if (array.length > 5) {
		console.log(array + " tem muitos elementos");
	}else{
		console.log(array + "poucos elementos");
	}
}imprimeQtdd(array1);
//ex7
array1.forEach(e =>{
	console.log(e);
})
///ex8
let pessoa = {
	"nomes" : ["paulo","adryell"],
	"idade": "17"
}
let {nomes: vnomes, idade: vidades} = pessoa;
console.log(vnomes);
console.log(vidades);
//ex9
let frase = "eu nao gosto de ser sedentario e preguicoso";
let arrfrase = frase.split(" ");
for (palavra of arrfrase) {
	console.log(palavra);
}
//ex10
const calculadora = {
	somar: function(n1,n2) {return n1+n2;},
	multiplicar: function(n1,n2) {return n1*n2;},
	dividir: function(n1,n2) {return n1/n2;},
	subtrair: function(n1,n2) {return n1-n2;}
}
document.write(calculadora.somar(1,4));
document.write("<br>");
document.write(calculadora.multiplicar(1,4));
document.write("<br>");
document.write(calculadora.dividir(1,4));
document.write("<br>");
document.write(calculadora.subtrair(1,4));
//secao concluida 8/10;
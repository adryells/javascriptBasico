/*
function somar(n1,n2) {
	return parseInt(n1) + n2;
}
function subtrair(n1,n2){
	return n1 - n2;
}
function dividir(n1,n2){
	return n1/n2
}
function multiplicar(n1,n2){
	return n1 * n2;
}
let n1 = prompt("numero:")
document.write(somar(n1,23));
document.write("<hr>");
document.write(multiplicar(n1,23));
document.write("<hr>");
document.write(subtrair(n1,23));
document.write("<hr>");
document.write(Math.ceil(dividir(n1,23)));
document.write("<hr>");
let x = 5;
function apresenta(a){
	let x = 6;
	return x;
	function apresenta2(b){
		let x = 7;
		return x;
	}
	console.log(apresenta2(4));
}
console.log(apresenta(4));
function dados(nome, idade){
	if(idade === undefined){
		console.log("your name ies " + nome);
	}else{
		console.log("u name is " + nome + " and your age is " + idade);
	}
}
let atencao = prompt("idade:")
console.log(dados("adryell",atencao))
let frase = prompt();
function repetirfrase(frase, n=2){
	for (var i = 0; i < n; i++) {
		console.log(frase);
	}
}
console.log(repetirfrase(frase, 5));

function retornaPar(n){
	if (n%2 == 0) {console.log("é par");}else{retornaPar(n-1);console.log("agora é par");}
}
retornaPar(121);*/
//ex1
function imprime() {
	console.log("hello world");
}
imprime();
//ex2
function recebe(idade) {
	console.log(`você tem ` + idade + " anos");
}recebe(122);
//ex3
function somar(n1,n2) {
	return n1 + n2;
}
console.log(somar(1,2));
//ex4
function randomiza(maximo) {
	return Math.floor(Math.random() * maximo) +1;
}console.log(randomiza(12));console.log(randomiza(45));console.log(randomiza(102));
//ex5
console.log("quebrar");
function recebeIdade(idade) {
	if (idade>=18) {console.log("voce pode entrar na auto escola");}
	else{console.log("vc n pode entrar na auto escola");}
}recebeIdade(12);recebeIdade(18);recebeIdade(35);recebeIdade(1);
//ex6
function descobreTipo(argument) {
	return typeof argument;
}
console.log(descobreTipo("str"));
console.log(descobreTipo(12));
console.log(descobreTipo(false));
//ex7
function recebNum(argument) {
	return Math.abs(argument);
}
console.log(recebNum(-12));
console.log(recebNum(-16));
console.log(recebNum(12));
//ex8
function recebStr(argument) {
	if (argument.length > 10){
		console.log("very longo");
	}else{
		console.log("in limite");
	}
}
recebStr("eusioppopop");
recebStr("s");
recebStr("fdsçdgsa~b~dsdgddfdf");
//ex9
function potenciar(base,potencia) {
	return base ** potencia;
}
console.log(potenciar(2,4));
console.log(potenciar(3,3));
console.log(potenciar(5,2));
//ex10
function decrementa(argument) {
	while(argument>0){
		if (argument % 2 == 0){
			console.log(argument);
		}
		argument--;
	}
}decrementa(28);
function deixaOsgarotoBrincar(sn) {
	if (sn === "ss"){
		document.write("deixaOsgarotoBrincar!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
	}else{
		alert("n deixaOsgarotoBrincar");
	}
}
deixaOsgarotoBrincar("nn");
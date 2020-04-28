let linguagensDeProgramacao = ["python", "java", "javasctipt", "php", "go"];
for (linguagem of linguagensDeProgramacao) {
	let cont = 0;
	if (linguagem === "python" || linguagem === "php") {document.write("<br>apprendi "+linguagem);}
	if (linguagem === "go" || linguagem === "java") {document.write("<br>aprenderei "+linguagem);}
	if (linguagem === "javasctipt") {document.write("<br>aprendendo "+linguagem);}
	}
let idiomas = ["portugues", "inglês", "espanhol", "alemao", "russo", "japonês"];
document.write("<br>há " + idiomas.length + " idiomas que quero dizer que sei<bR>");
document.write("meu " + idiomas[0] +" é nativo, assim restando " + (idiomas.length-1) + " idiomas para aprender<br>");
document.write(idiomas[1] + " ja sei bastante da msm forma que " + idiomas[2]);
document.write("<br>ainda assim há 3 lindos idiomas que n sei o basico sendo eles:<br><li>"+idiomas[3]+"<br>"+idiomas[4]+"<br>"+idiomas[5]+"</li>");
/////////
document.write("<hr>");
let pessoa = {
	nome: "adryell",
	profissao: "estudante",
	recusar: function recusar() {
		console.log("nao");
	},
	idade: 16
}
document.write(pessoa.nome +" tem " + pessoa.idade + "years e é um " + pessoa.profissao+"<br>");
document.write(pessoa.recusar()+"<br><br>")
delete pessoa.nome;
document.write(pessoa);
pessoa.nome = "adryell";
console.log(pessoa);
let pessoa2 = {
	nome: "joao",
}
Object.assign(pessoa,pessoa2);
console.log(pessoa);
console.log(Object.values(pessoa));//pode ser keys tbm

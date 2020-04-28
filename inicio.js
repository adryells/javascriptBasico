var nome = "adryell";
var idade = 17;
var peso = 76;
var altura = 1.77;
var imc = peso / (altura * altura);
document.write(nome + " tem " + idade +" anos, "+peso+"kg, e " + altura+"cm de altura.<br>");
document.write("SEU IMC É "+imc+"<br>")
document.write("funcionou<br>");
if (imc > 30) {
	document.write("você está obeso:(");
}
else{
	document.write("voce esta normal<br>");
}
var count = 0;
while(count < 10){
	document.write(count);
	count+=1;
}
Things = [1,2,3,4,5,6,7];
for (var i = Things.length - 1; i >= 0; i--) {
	document.write("<br>"+Things[i] + "<br>");
}
function soma(num1,num2) {
	return num1+num2;
}
document.write("<br>" + soma(1,2));
const n = 7;
var m = 7;
m = 6;
teste = [n,m];
for (var i = teste.length - 1; i >= 0; i--) {
	document.write(teste[i]);
}
window.alert(1);
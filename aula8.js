//ex1 (errei)
/*
class Conta{
	constructor(saldo){
		this.saldo = saldo;
	}
	deposito(quantia) {
		this.saldo+=quantia;
	}
	saque(quantia) {
		this.saldo-=quantia;
	}
	zerar(){
		this.saldo = 0;
	}
}
let c1 = new Conta(1000);
c1.deposito(200);
c1.saque(150);
document.write("you have R$" + c1.saldo + " of money");
//ex2 ()
document.write("<hr>")
class Carrinho{
	constructor(itens,qtddTotal,valorTotal){
		this.itens = itens;
		this.qtddTotal = qtddTotal;
		this.valorTotal = valorTotal;
	}
	adicionarItem(item){
		//this.itens = [];
		this.itens.push(item);
		document.write("<br>voce adicionou " + item);
	}
	removerItem(item){
		this.itens.shift(item);
		document.write("<bR>voce removeu " + item+"<br>")
	}
	somar(){
		this.itens.forEach(item => {
			this.valorTotal += item[1];
			this.qtddTotal +=1;
		})
	}
}
let carro1 = new Carrinho([],null,null);
carro1.adicionarItem(["adryell",24]);
carro1.removerItem("adryell");
carro1.adicionarItem(["joao",105]);
carro1.removerItem("joao");
carro1.adicionarItem(["marcelo",12]);
carro1.removerItem("marcelo")
carro1.adicionarItem(["fabiaan",333]);
carro1.removerItem("fabiaan")
carro1.somar();
document.write(carro1.itens+"<br>"+carro1.qtddTotal+"<br>"+carro1.valorTotal);
document.write("<hr>")
//ex3
class Endereco{
	constructor(rua,bairro,cidade,estado){
		this.rua = rua;
		this.bairro = bairro;
		this.cidade = cidade;
		this.estado = estado;
	}
	atualizaEndereco(novo){
		this.rua = novo[0];
		this.bairro = novo[1];
		this.cidade = novo[2];
		this.estado = novo[3];
	}
}
let E1 = new Endereco(null,null,null,null);
E1.atualizaEndereco(["frei serafim", "nova caxias", "caxias", "maranhao"]);
console.log(E1);

//ex4
class Carro{
	constructor(marca,cor,rgasolina,dirigindo = false,distancia,velocidade){
		this.dirigindo = dirigindo;
		this.marca = marca;
		this.cor = cor;
		this.rgasolina = rgasolina;
		this.distancia = distancia;
	}
	dirigir(){

		let local0 = 0;
		if (this.dirigindo == false) {
			this.dirigindo = true;
		}
			while(this.dirigindo == true){
			document.write("dirigindo...");
			this.rgasolina -=20;
			if (this.rgasolina < 10) {
				console.log('sem gasolina');
				
				
					let p = prompt("deseja abastecer[s/n]?")
					//let p = "n";
					if (p == "s") {
					this.abastecer(p);
				}else{
					document.write("<br>aqui termina sua jornada amigo...<br>")
					break;}}}}
	abastecer(p){
		this.rgasolina += 60;
	}

	}
let carro = new Carro("Volkswagen","preto",55,undefined,500);
carro.dirigir();
document.write("<hr>")
//ex6
class ContaBancaria{
	constructor(saldo_corrente, saldo_poupanca, juros_poupanca){
		this.saldo_corrente = saldo_corrente;
		this.saldo_poupanca = saldo_poupanca;
		this.juros_poupanca = juros_poupanca;
	}
	deposito(valor,conta){
		if (conta == "corrente"){
			this.saldo_corrente += valor;
		}else if(conta == "poupanca"){
			this.saldo_poupanca += valor;
		}
	}
	saque(valor,conta){
		if (conta == "corrente"){
			this.saldo_corrente -= valor;
		}else if(conta == "poupanca"){
			this.saldo_poupanca -= valor;
		}
	}
	transferir(valor){
		this.saldo_poupanca -= valor;
		this.saldo_corrente += valor;
	}
}
class ContaEspecial extends ContaBancaria{
	constructor(saldo_corrente,saldo_poupanca,juros_poupanca){
		super(saldo_corrente, saldo_poupanca, juros_poupanca);
	}
}
let ce = new ContaEspecial(300,1200,4);
let c = new ContaBancaria(300,120,2);
ce.deposito(657,"poupanca");
ce.deposito(1760,"corrente");
c.deposito(7000,"poupanca");
c.deposito(1000,"corrente");
c.saque(5000,"poupanca");
c.saque(7500,"corrente");
ce.saque(1234,"poupanca");
ce.saque(3000,"corrente");
ce.transferir(623);
c.transferir(2000);
document.write("<hr>")/*
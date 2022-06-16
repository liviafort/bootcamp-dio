/*Crie a classe ContaBancaria, que possui os parâmetros agencia, numero, tipo e saldo;
Dentro de ContaBancaria, construa o getter e o setter de saldo;
Dentro de ContaBancaria, crie os métodos sacar e depositar;*/
class ContaBancaria{
  constructor(agencia, numero, tipo){
    this.agencia = agencia;
    this.numero = numero;
    this.tipo = tipo;
    this._saldo = 0 ;
  }
  sacar(valor) {
		if (valor > this._saldo) {
			return console.log('Saque negado; saldo insuficiente!');
		}

		this._saldo = this._saldo - valor;
		return this._saldo;
	}

	depositar(valor) {
		this._saldo = this._saldo + valor;
		return this._saldo;
	}
}
/*Crie uma classe-filha chamada ContaCorrente que herda todos esses parâmetros e ainda possua o parâmetro cartaoCredito;
Ainda em ContaCorrente, construa o getter e o setter de cartaoCredito;
Ainda em ContaCorrente, faça com que o tipo seja 'conta corrente' por padrão;*/
class ContaCorrente extends ContaBancaria{
  constructor(agencia, numero, cartaoCredito){
    super(agencia, numero);
    this.tipo = 'Corrente';
    this._cartaoCredito = cartaoCredito;
  }
  set cartaoCredito(valor){
    this._cartaoCredito = valor;
  }
  get cartaoCredito(){
    return this._scartaoCredito;
  }
}

//Crie uma classe-filha chamada ContaPoupanca que herda todos os parâmetros de ContaBancaria;
class ContaPoupança extends ContaBancaria{
  constructor(agencia, numero){
    super(agencia, numero);
    this.tipo = 'Poupança';
  }
}

/*Crie uma classe-filha chamada ContaUniversitaria que herda todos os parâmetros de ContaBancaria;
Faça com que o método saque de ContaUniversitaria apenas seja capaz de sacar valores menores que 500 reais.*/
class ContaUniversitaria extends ContaBancaria{
  constructor(agencia, numero){
    super(agencia, numero);
    this.tipo = 'Universitaria';
  }
  sacar(valor) {
		if (valor > 500) {
			return 'Operação negada.';
		}
		this._saldo = this._saldo - valor;
		return this._saldo;
	}
}
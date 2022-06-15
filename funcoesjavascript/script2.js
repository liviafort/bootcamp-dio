let pessoa = {
  Nome: 'Livia',
  Idade: 19,
  Nacionalidade: 'Brasileira',
};

function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.Nome} terá ${
		this.Idade + anos
	} anos de idade.`;
}

console.log(calculaIdade.call(pessoa, 20))
console.log(calculaIdade.apply(pessoa, [20]))
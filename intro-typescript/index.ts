interface Cachorro{
   nome: string;
   idade: number;
   parqueFavorito?: string;
}

type CachorroSomenteLeitura = {
  readonly [K in keyof Cachorro]: Cachorro[K];
}

class MeuCachorro implements Cachorro{
  idade;
  nome;
  parqueFavorito = 'Jurassic';
  constructor(nome, idade){
    this.idade = idade;
    this.nome = nome;
  }
}
const cao = new MeuCachorro('alouro', 3);





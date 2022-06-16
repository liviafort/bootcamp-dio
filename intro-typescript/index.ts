interface Animal{
  nome: string;
  tipo: 'terrestre' | 'aquatico';
  executarRugido(altura: number): void;
}

interface Felino extends Animal{
  visaoNoturna: Boolean;
}
const animal: Animal = {
  nome: 'Elefante',
  tipo: 'terrestre',
  executarRugido: (altura) => (`${altura}dB`)
}

const felino: Felino = {
  nome: 'Leão',
  tipo: 'terrestre',
  visaoNoturna: true,
  executarRugido: (altura) => (`${altura}dB`)
}
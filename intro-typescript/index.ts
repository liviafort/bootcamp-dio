interface Animal{
  nome: string;
  tipo: 'terrestre' | 'aquatico';
  domestico: boolean;
}

interface Felino extends Animal{
  visaoNoturna: Boolean;
}

interface Canino extends Animal{
  porte: 'pequeno' | 'medio' | 'grande';
}

type Domestico = Felino | Canino;

const animal: Domestico  = {
  nome: 'cachorro',
  tipo: 'terrestre',
  domestico: true,
  porte: 'pequeno',
}

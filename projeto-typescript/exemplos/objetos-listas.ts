export {};
const pessoa = {
  nome: "Mariana",
  idade: 28,
  profissao: "desenvolvedora"
}

pessoa.idade = 30;

const andre: {nome: string, idade: number, profissao: string} = {
  nome: "Andre",
  idade: 25,
  profissao: "pintor"
}

const paula: {nome: string, idade: number, profissao: string} = {
  nome: "Paula",
  idade: 25,
  profissao: "Desenvolvedora"
}

enum Profissao{
  Professora,
  Atriz,
  Desenvolvedora,
  Jogadora
}

interface Pessoa {
  nome: string,
  idade: number,
  profissao?: Profissao
}

interface Estudante extends Pessoa{
  materias: string[]
}

const vanessa: Pessoa = {
  nome: 'Vanessa',
  idade: 23,
  profissao: Profissao.Desenvolvedora
}

const jessica: Estudante = {
  nome: 'Jessica',
  idade: 28,
  profissao: Profissao.Desenvolvedora,
  materias: ['Matemática discreta', 'programação']
}
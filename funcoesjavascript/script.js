const alunos = [{Nome: 'Maria', Nota: 8.0}, {Nome: 'João', Nota: 7.5}, {Nome: 'Fernanda', Nota: 4.2}];

function mediaAlunos(alunos){
  let alunosAprovados = [];
  for(i = 0; i<alunos.length; i++){
    let {Nome, Nota} = alunos[i];
    if (Nota >= 7){
      alunosAprovados.push(Nome);
    }
  }
  return alunosAprovados
}
console.log(mediaAlunos(alunos))

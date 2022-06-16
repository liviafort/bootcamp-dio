const pessoas = [{Nome: 'João', Idade: 56}, {Nome: 'Maria', Idade: 35}];

function encontrarErro(array, num){
  try{
    if(!array && !num) throw new ReferenceError("Envie os parâmetros");
    if(typeof(array) != 'object') throw new TypeError("Não é um objeto");
    if(typeof(num) != 'number') throw new TypeError("Não é um número");
    if(array.length != num) throw new RangeError("Tamanhos diferentes");

    return array;
  }
  catch(e){
      if (e instanceof ReferenceError) {
        console.log(e.stack);}
      else if(e instanceof TypeError){
        console.log(e.stack);}
      else if (e instanceof RangeError){
        console.log(e.stack);}
      else{
        console.log('Outro tipo de erro!');
        console.log(e.stack);}
  }
}
encontrarErro(pessoas, 3)

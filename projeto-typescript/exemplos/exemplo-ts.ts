export {};
let button = document.getElementById('button');
let input1 = document.getElementById('input1') as HTMLInputElement;
let input2 = document.getElementById('input2') as HTMLInputElement;

function somar(numero1: number, numero2: number, frase: string, devePrintar: boolean){
  let resultado = numero1 + numero2
  if(devePrintar){
    console.log(frase + resultado)
  }
  return resultado;
}

let frase = "O resultado da soma é: ";
let devePrintar = true;

if(button){
  button?.addEventListener('click', () => {
    if(input1 && input2){
      console.log(somar(Number(input1.value), Number(input2.value), frase, devePrintar));
    }
  })
}

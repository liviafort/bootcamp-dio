"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let button = document.getElementById('button');
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
function somar(numero1, numero2, frase, devePrintar) {
    let resultado = numero1 + numero2;
    if (devePrintar) {
        console.log(frase + resultado);
    }
    return resultado;
}
let frase = "O resultado da soma é: ";
let devePrintar = true;
if (button) {
    button === null || button === void 0 ? void 0 : button.addEventListener('click', () => {
        if (input1 && input2) {
            console.log(somar(Number(input1.value), Number(input2.value), frase, devePrintar));
        }
    });
}

// Escreva um programa que peça ao usuário para digitar a sua idade e imprima na tela o número de dias que ele viveu até o momento.

let idade = Number(prompt("Digite a sua idade: "));

function calculaDiasDeVida(idade) {
  let diasVividos = idade * 365;
  alert(`Você já viveu aproximadamente ${diasVividos} dias.`);
}

calculaDiasDeVida(idade);

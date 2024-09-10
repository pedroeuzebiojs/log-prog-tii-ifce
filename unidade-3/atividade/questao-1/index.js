//  Escreva um algoritmo que receba dois números e retorne a soma, a subtração, a multiplicação e a divisão entre eles.

let numero1 = Number(prompt("Digite um número: "));
let numero2 = Number(prompt("Digite outro número: "));

function fazOperacoesBasicas(num1, num2) {
  alert(`A soma entre ${num1} e ${num2} é igual a: ${num1 + num2}`);
  alert(`A subtração entre ${num1} e ${num2} é igual a: ${num1 - num2}`);
  alert(`A multiplicação entre ${num1} e ${num2} é igual a: ${num1 * num2}`);
  alert(`A divisão entre ${num1} e ${num2} é igual a: ${num1 / num2}`);
}

fazOperacoesBasicas(numero1, numero2);

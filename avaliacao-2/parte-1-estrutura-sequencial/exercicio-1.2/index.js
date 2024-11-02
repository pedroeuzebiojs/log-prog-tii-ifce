/*
  Faça um programa para ler o valor do raio de um círculo, e depois mostrar o valor da área deste círculo com quatro casas decimais conforme exemplos
  Fórmula: Área = π ∗ raio²
  Considere o valor de π = 3.141592
*/

const valorDePi = 3.141592;

let calculaAreaDeUmCirculo = (raio) => valorDePi * Math.pow(raio, 2);

let valorDoRaioDoCirculo = parseFloat(
  prompt("Digite o valor do raio do círculo: ")
);
let valorDaAreaDoCirculo = calculaAreaDeUmCirculo(valorDoRaioDoCirculo);

document.write(`A área do círculo é: ${valorDaAreaDoCirculo.toFixed(4)}`);

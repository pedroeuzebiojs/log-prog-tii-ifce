// Crie um programa principal que importe um arquivo de módulo com as funções dos exercícios anteriores e utilize-as para realizar as seguintes operações: calcular a média de uma lista de números, imprimir a tabuada de um número informado pelo usuário e imprimir os valores de uma lista de números que são maiores que um valor informado pelo usuário.

// Importo o módulo funcoes.js
const funcoes = require("./funcoes");

//Calculo a média de uma lista de números
let numeros = [10, 20, 30, 40, 50];
let media = funcoes.calculaMediaDeUmaLista(numeros);
console.log(`A média da lista é: ${media}`);

// Imprimi a tabuada de um número informado pelo usuário
function imprimiTabuada(numero) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
}

let numeroDaTabuada = 5; // Irei supor aqui que o usuário digitou 5
console.log(`Tabuada de ${numeroDaTabuada}:`);
imprimiTabuada(numeroDaTabuada);

// Imprimo os valores maiores que um valor informado pelo usuário
let valor = 25; // Aqui eu vou supor que o usuário informou 25
let numerosMaiores = funcoes.mostraValoresMaioresQueUmNumero(numeros, valor);
console.log(`Números maiores que ${valor}: ${numerosMaiores}`);

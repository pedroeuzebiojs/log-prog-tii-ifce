**Instituto Federal de Educação, Ciência e Tecnologia do Ceará (IFCE)**
**Campus Baturité**
**Curso Técnico Subsequente em Informática para Internet**

**Atividade da Unidade 6 da Disciplina de Lógica de Programação**

**Redenção-CE**
**2024**

**Identificação do Aluno**

**Nome:** Pedro Henrique Marinho Euzebio
**Curso:** Técnico Subsequente em Informática para Internet
**Turma:** 2024.1

**1. Escreva uma função que receba uma lista de números e retorne o valor mínimo encontrado.**

Resposta:

```js
// Escreva uma função que receba uma lista de números e retorne o valor mínimo encontrado.

function encontraValorMinimo(listaDeNumeros) {
  let valorMinimo = listaDeNumeros[0];
  for (let i = 1; i < listaDeNumeros.length; i++) {
    if (listaDeNumeros[i] < valorMinimo) {
      valorMinimo = listaDeNumeros[i];
    }
  }
  return valorMinimo;
}

let listaDeNumeros = [10, 4, 56, 2, 35];
console.log(`O menor número é: ${encontraValorMinimo(listaDeNumeros)}`);
```

**2. Escreva uma função que receba uma lista de números e um valor inteiro n, e retorne uma nova lista com os n primeiros valores da lista original.**

Resposta:

```js
// Escreva uma função que receba uma lista de números e um valor inteiro n, e retorne uma nova lista com os n primeiros valores da lista original.

function primeirosValoresDaListaOriginal(lista, n) {
  let novaListaDeNumeros = [];
  for (let i = 0; i < n; i++) {
    novaListaDeNumeros.push(lista[i]);
  }
  return novaListaDeNumeros;
}

let listaDeNumeros2 = [10, 20, 30, 40, 50];
console.log(
  `Os primeiros 3 números são: ${primeirosValoresDaListaOriginal(
    listaDeNumeros2,
    3
  )}`
);
```

**3. Crie um programa principal que importe um arquivo de módulo com as funções dos exercícios anteriores e utilize-as para realizar as seguintes operações: calcular a média de uma lista de números, imprimir a tabuada de um número informado pelo usuário e imprimir os valores de uma lista de números que são maiores que um valor informado pelo usuário.**

funcoes.js:

```js
// Crie um programa principal que importe um arquivo de módulo com as funções dos exercícios anteriores e utilize-as para realizar as seguintes operações: calcular a média de uma lista de números, imprimir a tabuada de um número informado pelo usuário e imprimir os valores de uma lista de números que são maiores que um valor informado pelo usuário.

// Crio uma função para encontrar o valor mínimo
function encontraValorMinimo(lista) {
  let valorMinimo = lista[0];
  for (let i = 1; i < lista.length; i++) {
    if (lista[i] < valorMinimo) {
      valorMinimo = lista[i];
    }
  }
  return valorMinimo;
}

// Crio uma função para retornar os primeiros n valores
function primeirosValores(lista, n) {
  let novaListaDeValores = [];
  for (let i = 0; i < n; i++) {
    novaListaDeValores.push(lista[i]);
  }
  return novaListaDeValores;
}

// Crio uma função para calcular a média de uma lista
function calculaMediaDeUmaLista(lista) {
  let soma = 0;
  for (let i = 0; i < lista.length; i++) {
    soma += lista[i];
  }
  return soma / lista.length;
}

// Crio uma função para mostrar os valores maiores que um número
function mostraValoresMaioresQueUmNumero(lista, valor) {
  return lista.filter((num) => num > valor);
}

// Faço exportação das funções
module.exports = {
  encontraValorMinimo,
  primeirosValores,
  calculaMediaDeUmaLista,
  mostraValoresMaioresQueUmNumero,
};
```

main.js:

```js
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
```

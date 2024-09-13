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

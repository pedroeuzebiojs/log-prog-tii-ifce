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

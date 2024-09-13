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

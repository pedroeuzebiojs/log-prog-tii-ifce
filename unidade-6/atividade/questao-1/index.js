// Escreva um programa que crie uma matriz 3x3 com os valores de 1 a 9 e imprima seus valores.

function criaMatriz3Por3() {
  let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  for (let i = 0; i < 3; i++) {
    console.log(matriz[i]);
  }
}

criaMatriz3Por3();

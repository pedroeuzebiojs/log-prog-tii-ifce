// Escreva um programa que leia duas matrizes 3x3 de valores inteiros informadas pelo usuário e imprima a soma de seus valores.

function somaMatrizes3Por3() {
  let matriz1 = [];
  let matriz2 = [];

  for (let i = 0; i < 3; i++) {
    matriz1[i] = [];
    for (let j = 0; j < 3; j++) {
      matriz1[i][j] = parseInt(
        prompt(
          `Digite o valor para a posição [${i}][${j}] da primeira matriz: `
        )
      );
    }
  }

  for (let i = 0; i < 3; i++) {
    matriz2[i] = [];
    for (let j = 0; j < 3; j++) {
      matriz2[i][j] = parseInt(
        prompt(`Digite o valor para a posição [${i}][${j}] da segunda matriz: `)
      );
    }
  }

  let matrizSoma = [];
  for (let i = 0; i < 3; i++) {
    matrizSoma[i] = [];
    for (let j = 0; j < 3; j++) {
      matrizSoma[i][j] = matriz1[i][j] + matriz2[i][j];
    }
  }

  console.log("Matriz resultante da soma:");
  for (let i = 0; i < 3; i++) {
    console.log(matrizSoma[i]);
  }
}

somaMatrizes3Por3();

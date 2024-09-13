// Escreva um programa que leia uma matriz 2x2 de valores inteiros informados pelo usuário e imprima sua transposta.

function transpostaMatriz2Por2() {
  let matriz = [];

  for (let i = 0; i < 2; i++) {
    matriz[i] = [];
    for (let j = 0; j < 2; j++) {
      matriz[i][j] = parseInt(
        prompt(`Digite o valor para a posição [${i}][${j}] da matriz: `)
      );
    }
  }

  console.log("Matriz original:");
  console.log(matriz[0]);
  console.log(matriz[1]);

  let transposta = [
    [matriz[0][0], matriz[1][0]],
    [matriz[0][1], matriz[1][1]],
  ];

  console.log("Matriz transposta:");
  console.log(transposta[0]);
  console.log(transposta[1]);
}

transpostaMatriz2Por2();

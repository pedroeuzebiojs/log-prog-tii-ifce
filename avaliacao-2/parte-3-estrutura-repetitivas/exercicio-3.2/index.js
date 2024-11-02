/*
  Leia um valor inteiro N. Este valor será a quantidade de valores inteiros X que serão lidos em seguida. Mostre quantos destes valores X estão dentro do intervalo [10,20] e quando estão fora do intervalo, mostrando essas informações conforme exemplo (use a palavra "in" para dentro do intervalo, e "out" para fora do intervalo).
*/

let n = parseInt(prompt("Digite a quantidade de valores inteiros N:"));
let valoresInteiros = [];
let dentroDoIntervalo = 0;
let foraDoIntervalo = 0;

for (let i = 0; i < n; i++) {
  valoresInteiros.push(parseInt(prompt(`Digite o valor ${i + 1}:`)));
}

valoresInteiros.forEach((X) => {
  if (X >= 10 && X <= 20) {
    dentroDoIntervalo++;
  } else {
    foraDoIntervalo++;
  }
});

document.write(`${dentroDoIntervalo} in <br />`);
document.write(`${foraDoIntervalo} out`);

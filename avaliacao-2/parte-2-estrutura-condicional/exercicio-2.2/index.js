/*
  Ler os valores dos três coeficientes "a", "b" e "c" de uma equação do segundo grau (ax²+bx+c=0). Em seguida, mostrar os valores das raízes da equação, conforme exemplos, usando a fórmula de Baskara (veja abaixo). Se a equação não possuir raízes (o valor de "a" não pode ser zero, e o valor de "delta" não pode ser negativo), mostrar uma mensagem "Impossível calcular".

  Fórmula: x = −b ±√ Δ
  2a
  onde: Δ = b2 − 4ac
*/

const calculaOValorDeDelta = (a, b, c) => Math.pow(b, 2) - 4 * a * c;

const calculaAsRaizes = (a, b, delta) => {
  let x1 = (-b + Math.sqrt(delta)) / (2 * a);
  let x2 = (-b - Math.sqrt(delta)) / (2 * a);
  return { x1, x2 };
};

let a = parseFloat(prompt("Digite o valor de 'a':"));
let b = parseFloat(prompt("Digite o valor de 'b':"));
let c = parseFloat(prompt("Digite o valor de 'c':"));

if (a === 0) {
  document.write("Impossível calcular: o valor de 'a' não pode ser zero.");
} else {
  let delta = calculaOValorDeDelta(a, b, c);

  if (delta < 0) {
    document.write("Impossível calcular: delta negativo.");
  } else {
    let { x1, x2 } = calculaAsRaizes(a, b, delta);
    document.write(
      `As raízes da equação são: x1 = ${x1.toFixed(4)}, x2 = ${x2.toFixed(4)}`
    );
  }
}

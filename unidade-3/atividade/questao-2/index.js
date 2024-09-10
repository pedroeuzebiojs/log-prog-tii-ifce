// Escreva um algoritmo que receba a base e a altura de um triângulo, calcule e exiba sua área.

let baseDoTriangulo = Number(prompt("Digite a base do triângulo: "));
let alturaDoTriangulo = Number(prompt("Digite a altura do triângulo: "));

function calculaAreaDoTriangulo(base, altura) {
  let areaDoTriangulo = (base * altura) / 2;
  alert(`A área do triângulo é: ${areaDoTriangulo}`);
}

calculaAreaDoTriangulo(baseDoTriangulo, alturaDoTriangulo);

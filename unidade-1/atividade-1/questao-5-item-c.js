function calcularMediaAritmetica(nota1, nota2, nota3) {
  const media = (nota1 + nota2 + nota3) / 3;

  return media;
}

const nota1 = parseFloat(prompt("Digite a primeira nota:"));
const nota2 = parseFloat(prompt("Digite a segunda nota:"));
const nota3 = parseFloat(prompt("Digite a terceira nota:"));

const media = calcularMediaAritmetica(nota1, nota2, nota3);

alert(
  `A média aritmética das notas ${nota1}, ${nota2} e ${nota3} é ${media.toFixed(
    2
  )}.`
);

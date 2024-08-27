function verificarParOuImpar(numero) {
  return numero % 2 === 0 ? "par" : "ímpar";

  // if (numero % 2 === 0) {
  //   return "par";
  // } else {
  //   return "ímpar";
  // }
}

const numero = parseInt(prompt("Digite um número:"));

const resultado = verificarParOuImpar(numero);

alert(`O número ${numero} é ${resultado}.`);

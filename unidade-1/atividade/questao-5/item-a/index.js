function somarDoisNumeros(numero1, numero2) {
  const soma = numero1 + numero2;

  return soma;
}

const numero1 = parseFloat(prompt("Digite o primeiro número:"));
const numero2 = parseFloat(prompt("Digite o segundo número:"));

const resultado = somarDoisNumeros(numero1, numero2);

alert(`A soma de ${numero1} e ${numero2} é ${resultado}.`);

function obterSucessorEAntecessor(numero) {
  const sucessor = numero + 1;
  const antecessor = numero - 1;

  return {
    sucessor: sucessor,
    antecessor: antecessor,
  };
}

const numero = parseFloat(prompt("Digite um número:"));

const resultado = obterSucessorEAntecessor(numero);

alert(
  `O antecessor de ${numero} é ${resultado.antecessor} e o sucessor é ${resultado.sucessor}.`
);

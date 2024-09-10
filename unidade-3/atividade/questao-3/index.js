// Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês.

let valorQueGanhaPorHora = Number(
  prompt("Digite quanto você ganha por hora: ")
);
let numeroDeHorasTrabalhadasNoMes = Number(
  prompt("Digite o número de horas que você trabalhou nesse mês: ")
);

function calcularSalario(valorPorHora, horasTrabalhadas) {
  let salario = valorPorHora * horasTrabalhadas;
  alert(`Seu salário é: R$${salario}`);
}

calcularSalario(valorQueGanhaPorHora, numeroDeHorasTrabalhadasNoMes);

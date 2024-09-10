// Escreva um programa que peça ao usuário para digitar a temperatura em Celsius e converta para Fahrenheit, imprimindo o resultado na tela.

let temperaturaEmCelsius = Number(prompt("Digite a temperatura em Celsius: "));

function converteTemperaturaParaFahrenheit(temperaturaEmCelsius) {
  let temperaturaEmFahrenheit = (temperaturaEmCelsius * 9) / 5 + 32;
  alert(
    `${temperaturaEmCelsius}°C é equivalente a ${temperaturaEmFahrenheit}°F`
  );
}

converteTemperaturaParaFahrenheit(temperaturaEmCelsius);

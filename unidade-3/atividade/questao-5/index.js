// Escreva um programa que peça ao usuário para digitar seu nome e sobrenome separadamente e imprima na tela o nome completo.

let nome = prompt("Digite seu nome: ");
let sobrenome = prompt("Digite seu sobrenome: ");

function imprimeNomeCompleto(nome, sobrenome) {
  alert(`Seu nome completo é: ${nome} ${sobrenome}`);
}

imprimeNomeCompleto(nome, sobrenome);

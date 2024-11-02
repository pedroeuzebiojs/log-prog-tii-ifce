/*
  Com base na tabela de preços abaixo, faça um programa que leia o código de um item e a quantidade deste item. A seguir, calcule e mostre o valor da conta a pagar.
  
  | Código | Especificação     | Preço   |
  |--------|--------------------|---------|
  | 1      | Cachorro quente   | R$ 4,00 |
  | 2      | X-Salada          | R$ 4,50 |
  | 3      | X-Bacon           | R$ 5,00 |
  | 4      | Torrada simples   | R$ 2,00 |
  | 5      | Refrigerante      | R$ 1,50 |
*/

let codigoDoItem = parseInt(prompt("Digite o código do item (1 a 5):"));
let quantidadeDoItem = parseInt(prompt("Digite a quantidade:"));

let totalAPagarDoItem = 0;

switch (codigoDoItem) {
  case 1:
    totalAPagarDoItem = 4.0 * quantidadeDoItem;
    break;
  case 2:
    totalAPagarDoItem = 4.5 * quantidadeDoItem;
    break;
  case 3:
    totalAPagarDoItem = 5.0 * quantidadeDoItem;
    break;
  case 4:
    totalAPagarDoItem = 2.0 * quantidadeDoItem;
    break;
  case 5:
    totalAPagarDoItem = 1.5 * quantidadeDoItem;
    break;
  default:
    document.write("Código inválido.");
    break;
}

if (totalAPagarDoItem > 0) {
  document.write(`Total a pagar: R$ ${totalAPagarDoItem.toFixed(2)}`);
}

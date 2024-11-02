/* 
  No contexto de desenvolvimento de um software para o Caixa (Ponto de Venda) de um estabelecimento comercial. Elabore um algoritmo para capturar os dados de 5 (cinco lançamentos) lançamentos de compra, cada lançamento é composto por um código de identificação de um produto, a quantidade do produto e o valor unitário de cada produto, Ao final, calcule e mostre o valor a ser pago.
*/

let totalAPagarDoProduto = 0;
const iniciacaoDeUmaFrase = "Por gentileza meu nobre ou minha nobre";

for (let i = 1; i <= 5; i++) {
  const codigoDoProduto = prompt(
    `${iniciacaoDeUmaFrase} digite o código do produto ${i}:`
  );
  const quantidadeDoProduto = parseInt(
    prompt(`${iniciacaoDeUmaFrase} digite a quantidade do produto ${i}:`)
  );
  const valorUnitarioDoProduto = parseFloat(
    prompt(`${iniciacaoDeUmaFrase} digite o valor unitário do produto ${i}:`)
  );

  const valorDaCompraDoProduto = quantidadeDoProduto * valorUnitarioDoProduto;
  totalAPagarDoProduto += valorDaCompraDoProduto;

  document.write(`
  <table>
    <tr>
      <th>Produto</th>
      <th>Código</th>
      <th>Quantidade</th>
      <th>Valor Unitário</th>
      <th>Total a Pagar</th>
    </tr>
    <tr>
      <td>${i}</td>
      <td>${codigoDoProduto}</td>
      <td>${quantidadeDoProduto}</td>
      <td>${valorUnitarioDoProduto}</td>
      <td>${valorDaCompraDoProduto.toFixed(2)}</td>
    </tr>
  </table>
  <br />
`);
}

document.write(`
  <p>
    O valor total a pagar pelos produtos é: R$ ${totalAPagarDoProduto.toFixed(
      2
    )}
  </p>
`);

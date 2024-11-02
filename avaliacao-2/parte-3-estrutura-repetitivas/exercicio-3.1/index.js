/*
  Escreva um algoritmo que repita a leitura de um senha até que ela seja válida. Para cada leitura de senha incorreta informada, escrever a mensagem "Senha Invalida". Quando a senha for confirmada corretamente deve ser impressa a mensagem "Acesso Permitido" e o algoritmo encerrado. Considere que a senha correta é o valor 2002.
*/

function verificaSeASenhaEValida() {
  let senha = parseInt(prompt("Digite a senha:"));

  while (senha !== 2002) {
    document.write("Senha Invalida");
    senha = parseInt(prompt("Digite a senha novamente:"));
  }

  document.write("Acesso Permitido");
}

verificaSeASenhaEValida();

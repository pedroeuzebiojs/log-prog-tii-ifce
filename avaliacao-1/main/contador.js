function contaONumeroDeVogaisEmUmaFrase(frase) {
  const vogais = "aeiouáéíóúãõâêîôûAEIOUÁÉÍÓÚÃÕÂÊÎÔÛ";

  let contador = 0;

  for (let i = 0; i < frase.length; i++) {
    if (vogais.includes(frase[i])) {
      contador++;
    }
  }

  return contador;
}

module.exports = { contaONumeroDeVogaisEmUmaFrase };

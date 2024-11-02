function validaADataDeNascimento(data) {
  const regex = /^\d{2}\/\d{2}\/\d{4}$/;
  if (!regex.test(data)) {
    return false;
  }

  const [dia, mes, ano] = data.split("/").map(Number);

  const dataNascimento = new Date(ano, mes - 1, dia);
  const hoje = new Date();

  if (
    dataNascimento.getFullYear() !== ano ||
    dataNascimento.getMonth() !== mes - 1 ||
    dataNascimento.getDate() !== dia
  ) {
    return false;
  }

  const idade =
    hoje.getFullYear() -
    ano -
    (hoje.getMonth() < mes - 1 ||
    (hoje.getMonth() === mes - 1 && hoje.getDate() < dia)
      ? 1
      : 0);

  if (idade < 0 || idade > 120) {
    return false;
  }

  return true;
}

module.exports = { validaADataDeNascimento };

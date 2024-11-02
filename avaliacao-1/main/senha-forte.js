function validaSeASenhaEForteOuNao(senha) {
  if (senha.length < 8 || senha.length > 30) {
    return false;
  }

  const temMaiuscula = /[A-Z]/.test(senha);

  const temMinuscula = /[a-z]/.test(senha);

  const temNumero = /[0-9]/.test(senha);

  const temEspecial = /[!@#$%^&*(),.?":{}|<>]/.test(senha);

  return temMaiuscula && temMinuscula && temNumero && temEspecial;
}

module.exports = { validaSeASenhaEForteOuNao };

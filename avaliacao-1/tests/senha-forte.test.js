const { validaSeASenhaEForteOuNao } = require("../main/senha-forte.js");

describe("Testes para a fun. validaSeASenhaEForteOuNao", () => {
  test('Senha somente letras: f("senha") => false', () => {
    expect(validaSeASenhaEForteOuNao("Senhaaaaaa")).toBeFalsy();
  });

  test('Senha com tam. muito pequeno: f("A3&24") => false', () => {
    expect(validaSeASenhaEForteOuNao("A3&24")).toBeFalsy();
  });

  test('Senha apenas com números e especiais: f("34&23#") => false', () => {
    expect(validaSeASenhaEForteOuNao("34&23#")).toBeFalsy();
  });

  test('Testando uma senha muito longa: f("N4l@N3t983hkjh%%234jjkadfgeio1&&&") => false', () => {
    expect(
      validaSeASenhaEForteOuNao("N4l@N3t983hkjh%%234jjkadfgeio1&&&")
    ).toBeFalsy();
  });

  test('Testando uma senha segura: f("N4l@N3t") => true', () => {
    expect(validaSeASenhaEForteOuNao("N4l@N3t")).toBeFalsy();
  });
});

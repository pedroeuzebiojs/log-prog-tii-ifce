**Instituto Federal de Educação, Ciência e Tecnologia do Ceará (IFCE)**

**Campus Baturité**

**Curso Técnico Subsequente em Informática para Internet**

**Atividade 1 da disciplina de Lógica de Programação**

**Identificação do Aluno**

**Nome completo:** Pedro Henrique Marinho Euzebio

**Curso:** Técnico Subsequente em Informática para Internet

**Turma:** 2024.1

1. **Explique o que é um algoritmo**

   **Resposta:** São passos a serem seguidos para resolver um problema

2. **Cite três algoritmos que estão presentes no seu dia a dia**

   **Resposta:** Fazer um café, atravessar a rua, se levantar da cama

3. **Discuta as vantagens e desvantagens das três principais formas de representação de algoritmos**

   **Resposta:**

    <details>
      <summary>Linguagem Natural</summary>
      <ul>
        <li>
          Vantagens: Fácil de entender, flexível
        </li>
        <li>
          Desvantagens: Pode ser ambígua e imprecisa, difícil de traduzir para código real
        </li>
      </ul>
    </details>

    <details>
      <summary>Diagramas de Fluxo</summary>
      <ul>
        <li>
          Vantagens: Visualização clara, fácil identificação de estruturas lógicas
        </li>
        <li>
          Desvantagens: Difícil para algoritmos complexos, difícil de modificar, complicado para representar detalhes
        </li>
      </ul>
    </details>

    <details>
      <summary>Pseudocódigo</summary>
      <ul>
        <li>
          Vantagens: Flexibilidade e precisão, fácil de traduzir para código real, abstrai detalhes de implementação
        </li>
        <li>
          Desvantagens: Exige algum conhecimento técnico, interpretação variável, potencial para ambiguidade
        </li>
      </ul>
    </details>

4. **Escreva, utilizando pseudocódigo, um algoritmo para cada uma das situações a seguir:**

**a. Trocar uma torneira:**

```js
function trocarTorneira() {
  console.log("1. Desligue o registro de água.");
  console.log(
    "2. Coloque um balde embaixo da torneira para coletar a água restante."
  );
  console.log("3. Use uma chave inglesa para soltar a torneira antiga.");
  console.log("4. Retire a torneira antiga e limpe a área ao redor.");
  console.log("5. Enrole fita veda-rosca nas roscas da nova torneira.");
  console.log(
    "6. Coloque a nova torneira no lugar e aperte com a chave inglesa."
  );
  console.log("7. Ligue o registro de água e verifique se há vazamentos.");
  console.log("8. Se houver vazamentos, aperte a torneira um pouco mais.");
  console.log("9. Verifique novamente se há vazamentos.");
  console.log(
    "10. Se não houver vazamentos, a troca da torneira foi concluída."
  );
}

trocarTorneira();
```

**b. Trocar uma lâmpada:**

```js
function trocarLampada() {
  console.log("1. Desligue o interruptor da lâmpada.");
  console.log("2. Se a lâmpada estiver alta, use uma escada segura.");
  console.log("3. Espere a lâmpada esfriar, se estiver quente.");
  console.log(
    "4. Gire a lâmpada queimada no sentido anti-horário para soltá-la."
  );
  console.log("5. Remova a lâmpada queimada.");
  console.log(
    "6. Pegue a nova lâmpada e gire no sentido horário para encaixá-la."
  );
  console.log("7. Certifique-se de que a lâmpada esteja firmemente encaixada.");
  console.log("8. Ligue o interruptor da lâmpada para testar.");
  console.log("9. Se a lâmpada acender, a troca foi concluída.");
  console.log(
    "10. Se a lâmpada não acender, verifique se está bem encaixada ou teste com outra lâmpada."
  );
}

trocarLampada();
```

5. **Escreva, utilizando pseudocódigo, um algoritmo para cada uma das situações a seguir:**

**a. Escreva um algoritmo que receba dois números e realize a soma.**

```js
function somarDoisNumeros(numero1, numero2) {
  const soma = numero1 + numero2;

  return soma;
}

const numero1 = parseFloat(prompt("Digite o primeiro número:"));
const numero2 = parseFloat(prompt("Digite o segundo número:"));

const resultado = somarDoisNumeros(numero1, numero2);

alert(`A soma de ${numero1} e ${numero2} é ${resultado}.`);
```

**b. Escreva um algoritmo que receba um número e retorne o seu sucessor e o seu antecessor.**

```js
function obterSucessorEAntecessor(numero) {
  const sucessor = numero + 1;
  const antecessor = numero - 1;

  return {
    sucessor: sucessor,
    antecessor: antecessor,
  };
}

const numero = parseFloat(prompt("Digite um número:"));

const resultado = obterSucessorEAntecessor(numero);

alert(
  `O antecessor de ${numero} é ${resultado.antecessor} e o sucessor é ${resultado.sucessor}.`
);
```

**c. Faça um algoritmo que receba três notas, calcule e mostre a média aritmética**

```js
function calcularMediaAritmetica(nota1, nota2, nota3) {
  const media = (nota1 + nota2 + nota3) / 3;

  return media;
}

const nota1 = parseFloat(prompt("Digite a primeira nota:"));
const nota2 = parseFloat(prompt("Digite a segunda nota:"));
const nota3 = parseFloat(prompt("Digite a terceira nota:"));

const media = calcularMediaAritmetica(nota1, nota2, nota3);

alert(
  `A média aritmética das notas ${nota1}, ${nota2} e ${nota3} é ${media.toFixed(
    2
  )}.`
);
```

**d. Escreva um algoritmo que receba um número e retorne se esse número é par ou ímpar**

```js
function verificarParOuImpar(numero) {
  return numero % 2 === 0 ? "par" : "ímpar";

  // if (numero % 2 === 0) {
  //   return "par";
  // } else {
  //   return "ímpar";
  // }
}

const numero = parseInt(prompt("Digite um número:"));

const resultado = verificarParOuImpar(numero);

alert(`O número ${numero} é ${resultado}.`);
```

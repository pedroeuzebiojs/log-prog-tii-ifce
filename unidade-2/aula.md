# Aula - Variáveis e Expressões

## Comando de Atribuição

O comando de atribuição é uma instrução em linguagens de programação que permite que um valor seja atribuído a uma variável.

É utilizado para armazenar valores e manipular dados durante a execução do programa.

Em geral, os comandos de atribuição são escritos na forma "variável = valor", onde a variável é o nome da variável que se deseja definir e o valor é o conteúdo que se deseja atribuir a ela.

A atribuição é uma operação fundamental em muitas linguagens de programação, incluindo C, Java, JavaScript, entre outras.

O valor pode ser uma expressão ou outro tipo de dado que a linguagem de programação suporta.

Uma vez que uma variável é atribuída a um valor, esse valor pode ser usado em outras operações ou expressões dentro do programa, permitindo que os programas realizem cálculos e tomem decisões com base nos valores armazenados nas variáveis.

## Variáveis

Variáveis são espaços de memória usados para armazenar valores em um programa de computador.

Elas permitem que os dados sejam armazenados em tempo de execução e acessados posteriormente durante a execução do programa.

As variáveis têm um nome, um tipo de dado que elas armazenam e um valor atual que pode ser atualizado ao longo do tempo durante a execução do programa.

A maioria das linguagens de programação exige que as variáveis sejam declaradas com um tipo de dado antes de serem usadas em um programa.

Em JavaScript, as variáveis são declaradas de maneira simples, atribuindo um valor a um nome de variável.

Não é necessário especificar o tipo de dados durante a declaração da variável.

O tipo de dados é inferido automaticamente pelo interpretador do JavaScript com base no valor atribuído à variável.

## Exemplos de Variáveis em JavaScript

```js
let idade = 18; // Número inteiro
let peso = 80.5; // Ponto flutuante
let aprovado = true; // Booleano
let nome = "Pedro"; // String
let numeros = [1, 2, 3, 4, 5]; // Array
let pessoa = {
  nome: "Pedro",
  idade: 18,
  altura: 1.78,
}; // Objeto
```

## Constantes

Constantes são valores imutáveis que são atribuídos a uma variável em um programa e não podem ser alterados durante a execução do programa.

Esses valores são definidos pelo programador e permanecem fixos durante todo o processo de execução do programa.

As constantes são frequentemente usadas para representar valores fixos, como pi ou o número de segundos em um minuto.

As constantes são uma parte importante da programação, pois elas ajudam a tornar o código mais legível, reduzem a possibilidade de erros e permitem que o programador altere facilmente os valores fixos em todo o programa.

As constantes são amplamente utilizadas em linguagens de programação como C, C++, Java e JavaScript.

Em JavaScript, as constantes são geralmente definidas como variáveis que não de valor durante a execução do programa.

## Exemplos de Constantes em JavaScript

```js
const pi = 3.14;
```

## Expressões Aritméticas

Expressões aritméticas são fórmulas matemáticas que consistem em números e operadores aritméticos para realizar cálculos numéricos.

**As operações aritméticas comuns incluem:**

- Adição (+)
- Subtração (-)
- Multiplicação (\*)
- Divisão (/)
- Exponenciação (\*\*)

As expressões aritméticas seguem uma ordem de precedência, onde as operações com maior precedência são realizadas primeiro, seguidas pelas operações com menor precedência.

As expressões aritméticas são amplamente utilizadas em programação para realizar cálculos numéricos e manipular dados numéricos.

## Exemplo de Expressão Aritmética

Um exemplo de expressão aritmética com diferentes operadores, operandos e precedências pode ser o seguinte:

```js
let a = 5;
let b = 3;
let c = 2;

let resultado = ((a + b) * c ** 2) / (a - b);
```

Nesse exemplo, a expressão consiste em diferentes operadores aritméticos, operandos e
precedências:

- Os operandos são as variáveis a, b e c, que têm valores atribuídos anteriormente.
- Os operadores são +, -, \*, / e \*\*, que realizam, respectivamente, as operações de adição, subtração, multiplicação, divisão e exponenciação.
- A expressão dentro dos parênteses é resolvida primeiro, pois tem maior precedência. Nesse caso, a + b é igual a 8.
- Em seguida, é realizada a exponenciação de c por 2 (o operador \*\* tem maior precedência que \* e /). O resultado é 4.
- Depois, a multiplicação de 8 por 4 é realizada, resultando em 32.
- Por fim, a divisão de 32 pelo resultado de a - b é realizada, onde a - b é igual a 2. O resultado final é 16.

## Expressões Relacionais

Expressões relacionais são usadas em programação para comparar valores ou variáveis e retornar um resultado verdadeiro ou falso (booleano).

As expressões relacionais são compostas por operadores relacionais, como "igual a", "maior que", "menor que", "maior ou igual a", "menor ou igual a" e "diferente de", que são usados para comparar valores.

## Exemplo de Expressão Relacional

```js
let x = 10;
let y = 5;
let z = 10;

console.log(x == y); // Retorna "false", pois "x" não é igual a "y"
console.log(x > y); // Retorna "true", pois "x" é maior que y
console.log(y <= z); // Retorna "true", pois "y" é menor ou igual a "z"
console.log(x != z); // Retorna "false", pois "x" é igual a "z"
```

- Nesse exemplo, a variável x tem valor 10, a variável y tem valor 5 e a variável z tem valor 10.
- As expressões relacionais comparam essas variáveis usando operadores relacionais, retornando um resultado booleano (True ou False) dependendo da comparação.
- Por exemplo, a expressão x == y compara se x é igual a y e retorna False, pois x não é igual a y.
- Já a expressão x > y compara se x é maior que y e retorna True, pois x é maior que y.

## Expressões Lógicas

Expressões lógicas são usadas em programação para combinar expressões relacionais e retornar um resultado verdadeiro ou falso (booleano).

As expressões lógicas são compostas pelos operadores lógicos "e" (&&), "ou" (||) e "não" (!), que são usados para combinar as expressões relacionais.

## Exemplo de Expressão Lógica

```js
let x = 10;
let y = 5;
let z = 3;

console.log(x > y && y > z); // Retorna "true", pois ambas expressões relacionais são verdadeiras
console.log(x > y || y < z); // Retorna "true", pois a primeira expressão relacional é verdadeira
console.log(!x == y); // Retorna "true", pois a expressão relacional é falsa e a negação é verdadeira
```

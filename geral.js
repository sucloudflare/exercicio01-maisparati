const prompt = require('prompt-sync')();

// 1. Par ou ímpar
let num = parseInt(prompt("Digite um número inteiro: "));
console.log(num % 2 === 0 ? "Par" : "Ímpar");

// 2. Classificação por idade
let idade = parseInt(prompt("Digite a idade: "));
if (idade < 12) console.log("Criança");
else if (idade < 18) console.log("Adolescente");
else if (idade < 60) console.log("Adulto");
else console.log("Idoso");

// 3. Nota
let nota = parseFloat(prompt("Digite a nota (0 a 10): "));
if (nota >= 7) console.log("Aprovado");
else if (nota >= 5) console.log("Recuperação");
else console.log("Reprovado");

// 4. Menu interativo
console.log("1. Olá\n2. Data atual\n3. Sair");
let opcao = parseInt(prompt("Escolha uma opção: "));
switch(opcao) {
  case 1: console.log("Você escolheu Olá!"); break;
  case 2: console.log("Data:", new Date()); break;
  case 3: console.log("Saindo..."); break;
  default: console.log("Opção inválida");
}

// 5. IMC
let peso = parseFloat(prompt("Digite seu peso (kg): "));
let altura = parseFloat(prompt("Digite sua altura (m): "));
let imc = peso / (altura * altura);
if (imc < 18.5) console.log("Baixo peso");
else if (imc < 25) console.log("Peso normal");
else if (imc < 30) console.log("Sobrepeso");
else console.log("Obesidade");

// 6. Tipo de triângulo
let a = parseFloat(prompt("Lado A: "));
let b = parseFloat(prompt("Lado B: "));
let c = parseFloat(prompt("Lado C: "));
if (a < b + c && b < a + c && c < a + b) {
  if (a === b && b === c) console.log("Equilátero");
  else if (a === b || a === c || b === c) console.log("Isósceles");
  else console.log("Escaleno");
} else console.log("Não é um triângulo");

// 7. Preço das maçãs
let qtd = parseInt(prompt("Quantas maçãs comprou? "));
let preco = qtd < 12 ? 0.30 : 0.25;
console.log("Total: R$", (qtd * preco).toFixed(2));

// 8. Dois valores em ordem crescente
let n1 = parseFloat(prompt("Digite o primeiro número: "));
let n2 = parseFloat(prompt("Digite o segundo número: "));
if (n1 < n2) console.log(n1, n2);
else console.log(n2, n1);

// 9. Contagem regressiva
for (let i = 10; i >= 1; i--) console.log(i);

// 10. Número repetido 10x
let repetir = parseInt(prompt("Digite um número: "));
for (let i = 0; i < 10; i++) console.log(repetir);

// 11. Soma de 5 números
let soma = 0;
for (let i = 0; i < 5; i++) {
  soma += parseFloat(prompt(`Digite o ${i+1}º número: `));
}
console.log("Soma total:", soma);

// 12. Tabuada
let numero = parseInt(prompt("Digite um número para ver a tabuada: "));
for (let i = 1; i <= 10; i++) {
  console.log(`${numero} x ${i} = ${numero * i}`);
}

// 13. Média de números até 0
let soma2 = 0, count = 0, entrada;
do {
  entrada = parseFloat(prompt("Digite um número (0 para sair): "));
  if (entrada !== 0) {
    soma2 += entrada;
    count++;
  }
} while (entrada !== 0);
console.log("Média:", count > 0 ? (soma2 / count).toFixed(2) : "Nenhum número digitado");

// 14. Fatorial
let fat = parseInt(prompt("Digite um número para o fatorial: "));
let resultado = 1;
for (let i = 1; i <= fat; i++) resultado *= i;
console.log(`Fatorial de ${fat} é ${resultado}`);

// 15. Fibonacci (10 primeiros)
let f1 = 0, f2 = 1;
console.log("Sequência de Fibonacci:");
for (let i = 0; i < 10; i++) {
  console.log(f1);
  let prox = f1 + f2;
  f1 = f2;
  f2 = prox;
}

const prompt = require('prompt-sync')();

// 1. Par ou ímpar
let num = parseInt(prompt("Digite um número inteiro: "));
console.log(num % 2 === 0 ? "Par" : "Ímpar");

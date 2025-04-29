
// 4. Menu interativo
console.log("1. Olá\n2. Data atual\n3. Sair");
let opcao = parseInt(prompt("Escolha uma opção: "));
switch(opcao) {
  case 1: console.log("Você escolheu Olá!"); break;
  case 2: console.log("Data:", new Date()); break;
  case 3: console.log("Saindo..."); break;
  default: console.log("Opção inválida");
}
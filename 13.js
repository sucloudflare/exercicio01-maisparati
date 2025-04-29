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

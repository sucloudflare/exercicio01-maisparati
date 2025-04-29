
// 7. Preço das maçãs
let qtd = parseInt(prompt("Quantas maçãs comprou? "));
let preco = qtd < 12 ? 0.30 : 0.25;
console.log("Total: R$", (qtd * preco).toFixed(2));
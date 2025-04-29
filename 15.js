// 15. Fibonacci (10 primeiros)
let f1 = 0, f2 = 1;
console.log("Sequência de Fibonacci:");
for (let i = 0; i < 10; i++) {
  console.log(f1);
  let prox = f1 + f2;
  f1 = f2;
  f2 = prox;
}

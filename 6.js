// 6. Tipo de triângulo
let a = parseFloat(prompt("Lado A: "));
let b = parseFloat(prompt("Lado B: "));
let c = parseFloat(prompt("Lado C: "));
if (a < b + c && b < a + c && c < a + b) {
  if (a === b && b === c) console.log("Equilátero");
  else if (a === b || a === c || b === c) console.log("Isósceles");
  else console.log("Escaleno");
} else console.log("Não é um triângulo");
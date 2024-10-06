function fibonacci(numero) {
  let a = 0, b = 1;
  while (a <= numero) {
      if (a === numero) {
          return true;
      }
      [a, b] = [b, a + b]; 
  }
  return false;
}

const numero = 5;

if (isNaN(numero)) {
  console.log("Por favor, insira um número válido como argumento.");
} else {
  if (fibonacci(numero)) {
      console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
  } else {
      console.log(`O número ${numero} não pertence à sequência de Fibonacci.`);
  }
}

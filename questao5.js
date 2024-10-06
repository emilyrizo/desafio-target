function inverterString(str) {
  let stringInvertida = "";
  for (let i = str.length - 1; i >= 0; i--) {
      stringInvertida += str[i];
  }
  return stringInvertida;
}

const string = "Target";

console.log("String invertida:", inverterString(string));

let numero = 123456;

let invertido = numero
    .toString()
    .split("")
    .reverse()
    .join("");

console.log("Número invertido =", invertido);
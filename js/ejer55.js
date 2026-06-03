let numeros = [5,8,2,10,7];

console.log("Mayor =", Math.max(...numeros));
console.log("Menor =", Math.min(...numeros));

let suma = numeros.reduce((a,b)=>a+b,0);

console.log("Promedio =", suma/numeros.length);
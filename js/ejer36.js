let numeros = [5, -2, 8, -1, 7];

let positivos = 0;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > 0) {
        positivos++;
    }
}

console.log("Cantidad de positivos =", positivos);
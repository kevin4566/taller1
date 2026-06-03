let numeros = [5, 8, 2, 10, 7];
let pares = 0;

for(let i = 0; i < numeros.length; i++){
    if(numeros[i] % 2 == 0){
        pares++;
    }
}

console.log("Pares =", pares);
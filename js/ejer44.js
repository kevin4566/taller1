let numeros = [5, 8, 2, 10, 7];

let menor = numeros[0];

for(let i = 1; i < numeros.length; i++){
    if(numeros[i] < menor){
        menor = numeros[i];
    }
}

console.log("Menor =", menor);
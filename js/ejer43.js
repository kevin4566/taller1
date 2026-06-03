let numeros = [5, 8, 2, 10, 7];

let mayor = numeros[0];

for(let i = 1; i < numeros.length; i++){
    if(numeros[i] > mayor){
        mayor = numeros[i];
    }
}

console.log("Mayor =", mayor);
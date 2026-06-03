let secreto = 7;
let intentos = [3, 9, 5, 7];

for (let i = 0; i < intentos.length; i++) {
    let intento = intentos[i];

    if (intento < secreto) {
        console.log(intento + ": Más alto");
    } else if (intento > secreto) {
        console.log(intento + ": Más bajo");
    } else {
        console.log(intento + ": ¡Correcto!");
        break;
    }
}
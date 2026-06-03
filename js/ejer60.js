let votos = {
    cepeda:9688361,
    Abelardo:10361499 ,
    Paloma:1637690
};

let ganador = "cepeda";

if(votos.Abelardo > votos[ganador]) ganador = "Abelardo";
if(votos.Paloma > votos[ganador]) ganador = "Paloma";

console.log("Ganador =", ganador);
console.log("segunda vuelta abelardo y cepeda")
let usuarios = [
    {nombre:"Juan", edad:20},
    {nombre:"Ana", edad:15},
    {nombre:"Pedro", edad:30}
];

for(let usuario of usuarios){
    if(usuario.edad >= 18){
        console.log(usuario.nombre);
    }
}
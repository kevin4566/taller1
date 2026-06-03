let contraseña = "Kevin123";

let tieneNumero = /\d/.test(contraseña);

if(contraseña.length >= 8 && tieneNumero){
    console.log("Contraseña válida");
}else{
    console.log("Contraseña inválida");
}
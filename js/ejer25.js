opcion = 3

if(opcion == 1){
    console.log("¡Hola! Bienvenido")
}

else if(opcion == 2){
    console.log("Fecha simulada: 15/05/2026")
}

else if(opcion == 3){

    tipoCliente = 1
    monto = 200000

    if(tipoCliente == 1){

        descuento = monto * 0.20
        total = monto - descuento

        console.log("Cliente VIP")
        console.log("Descuento: " + descuento)
        console.log("Total a pagar: " + total)
    }

    else if(tipoCliente == 2){

        descuento = monto * 0.05
        total = monto - descuento

        console.log("Cliente Normal")
        console.log("Descuento: " + descuento)
        console.log("Total a pagar: " + total)
    }

    else{
        console.log("Tipo de cliente inválido")
    }
}

else if(opcion == 4){
    console.log("Saliendo...")
}

else{
    console.log("Opción inválida")
}
opcion = 3

if opcion == 1:
    print("¡Hola! Bienvenido")

elif opcion == 2:
    print("Fecha simulada: 15/05/2026")

elif opcion == 3:

    tipoCliente = 1
    monto = 400000

    if tipoCliente == 1:

        descuento = monto * 0.20
        total = monto - descuento

        print("Cliente VIP")
        print("Descuento:", descuento)
        print("Total a pagar:", total)

    elif tipoCliente == 2:

        descuento = monto * 0.05
        total = monto - descuento

        print("Cliente Normal")
        print("Descuento:", descuento)
        print("Total a pagar:", total)

    else:
        print("Tipo de cliente inválido")

elif opcion == 4:
    print("Saliendo...")

else:
    print("Opción inválida")
secreto = 7
intentos = [3, 9, 5, 7]

for intento in intentos:
    if intento < secreto:
        print(intento, ": Mas alto")
    elif intento > secreto:
        print(intento, ": Mas bajo")
    else:
        print(intento, ": ¡Correcto!")
        break
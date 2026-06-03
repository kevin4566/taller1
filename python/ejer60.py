votos = {
    "cepeda":9688361,
    "Abelardo":10361499 ,
    "Paloma":1637690
}

ganador = max(votos, key=votos.get)

print("Ganador =", ganador)
print("segunda vuelta abelardo y cepeda")
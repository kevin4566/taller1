numeros = [5, 8, 2, 10, 7]

pares = 0

for numero in numeros:
    if numero % 2 == 0:
        pares += 1

print("Pares =", pares)
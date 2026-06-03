notas = [4.0, 3.5, 2.5, 5.0, 4.2]

promedio = sum(notas)/len(notas)

print("Promedio =", promedio)

if promedio >= 3:
    print("Aprobado")
else:
    print("Reprobado")
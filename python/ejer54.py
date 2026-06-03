usuarios = [
    {"nombre":"Juan","edad":20},
    {"nombre":"Ana","edad":15},
    {"nombre":"Pedro","edad":30}
]

for usuario in usuarios:
    if usuario["edad"] >= 18:
        print(usuario["nombre"])
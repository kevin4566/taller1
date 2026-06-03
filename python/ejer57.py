contraseña = "Kevin123"

tiene_numero = any(c.isdigit() for c in contraseña)

if len(contraseña) >= 8 and tiene_numero:
    print("Contraseña valida")
else:
    print("Contrasena invalida")
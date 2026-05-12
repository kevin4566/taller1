#a=1000000
#a=1500000
a=3000000

if a<=1499999:
    print("no hay impuestos")
    t=a

elif a>=1500000 and a<=2999999:
    t = a - (a * 0.10)
    print("el impuesto es del 10%")
else:
    t = a - (a * 0.20)
    print("el impuesto es del 20%")

print("total a pagar:", t)
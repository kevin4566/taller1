a=192 
b=293 
c=384 
mayor=a,b,c

if a>=b & a>=c:
    mayor=a
elif b>=a & b>=c:
    mayor=b
else:
    mayor=c
print("el numero mayor es: ", mayor)

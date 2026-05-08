a=26
b=73
c=29
mayor=a,b,c

if(a>=b && a>=c){
    mayor=a
}
else if(b>=a && b>=c){
    mayor=b
}
else{
    mayor=c
}
console.log("el numero mayor es: " + mayor)
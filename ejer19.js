a=1000000
b=1500000
c=3000000
t=a,b,c

if(a<=1499999){
    console.log("no hay impuestos")
}
else if(b>=1500000 && b<=2999999){
    t = b -(b * 0.10)
    console.log("el impuesto es del 10%")
}
else{
    t = c (c*0.20)
}

console.log("total a pagar:" + t)
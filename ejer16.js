c=50.000
t=c
if(c >= 100000){
    t = c - (c * 0.10)
    console.log("tiene 10% de descuento")
}

else{
    t = c
    console.log("no tiene descuento")
}

console.log("total a pagar :" + t)
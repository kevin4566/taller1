//a=1000000
//a=1500000
a=3000000


if(a<=1499999){
    console.log("no hay impuestos")
    t=a
}
else if(a>=1500000 && a<=2999999){
    t = a -(a * 0.10)
    console.log("el impuesto es del 10%")
}
else{
    t = a -(a * 0.20)
    console.log("el impuesto es del 20%")
}

console.log("total a pagar:" + t)
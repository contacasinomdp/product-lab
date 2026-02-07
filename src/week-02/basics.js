console.log("Hola Mundo");
let edad=44;
console.log(edad);  
const iva=0.21;
console.log(iva);  

const precioBase=1000;
const montoIva=precioBase *iva;
const precioFinal=precioBase + montoIva;

console.log("El precio base es: ", precioBase);
console.log("El monto de IVA es: ", montoIva);
console.log("El precio final es: ", precioFinal);

//edad minima requerida
const edadMinima=16;
let edadUsuario=20;
console.log( edadUsuario >= edadMinima);

if(edadUsuario >= edadMinima){
    console.log("Acceso Permitido");
}   else{
    console.log("Acceso Denegado");
}

//Ejercicio 1   

const precio=1000;
let edadCliente=20;
const IVA=0.10;
let tieneDescuento=true;

const edadMini=18;

if (edadCliente<edadMini){
    console.log("El cliente no tiene edad suficiente para comprar el producto");
}
else {
    console.log("El cliente tiene edad suficiente para comprar el producto");

}

const montoIVA=precio*IVA;
const precioFin=precio+montoIVA;  

if (tieneDescuento){
    const descuento=0.20;
    const montoDescuento=precioFin*descuento;
    const precioConDescuento=precioFin-montoDescuento;
    
}
console.log("El precio base del producto es: ", precio);
console.log("El monto de IVA es: ", montoIVA);
console.log("El precio final del producto es: ", precioFin);
    
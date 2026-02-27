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
    
function esMayorDeEdad(edad){
    const EDAD_MINIMA=18;

    if(edad>=EDAD_MINIMA){
        return true;
    }  else{
        return false;
    }   
}

function esMayorDeEdad(edad){
    return edad >= 18;
}

function calcularPrecioConIva(precio){
    const IVA=0.21;
    return precio +(precio*IVA);
}

function aplicarDescuento(precio, tieneDescuento){
    if(tieneDescuento){
        const DESCUENTO=0.01;
        return precio -(precio*DESCUENTO);
    }
    return precio;
}

const edadCliente2=22;
const precioBase2=1000;
const tieneDescuento2=true;

if(esMayorDeEdad(edadCliente2)){
    let precioFinal2=calcularPrecioConIva(precioBase2);
    precioFinal2=aplicarDescuento(precioFinal2, tieneDescuento2);
    console.log("El precio final del producto es: ", precioFinal2);     

}   else{
    console.log("El cliente no tiene edad suficiente para comprar el producto");
}   

function esMayorDeEdad(edad){
    return edad>=18;
    
}
function calcularIva(precio){
    const IVA=0.21;
    return precio*IVA;
}

function calcularDescuento(precio,tipoCliente){
    if(tipoCliente==="Premium"){
        return precio*0.20;
    }
    if(tipoCliente==="Regular"){
        return precio*0.01;
    }
    return 0;
}

function procesarCompra(edad,precioBase,tipoCliente){
    if(!esMayorDeEdad(edad)){
        return("Acceso Denegado:Menor de Edad");
    }
    const iva=calcularIva(precioBase);
    let precioFinal=precioBase+iva;

    const descuento=calcularDescuento(precioFinal,tipoCliente);
    precioFinal= precioFinal-descuento;

    return {
        precioBase,
        iva,
        descuento,
        precioFinal
    };
}
const resultadoCompra= procesarCompra(22,1000,"Premium");
console.log("Resultado de la compra: ", resultadoCompra);   


const cliente={
    nombre:"Juan",
    edad:44,
    tipo:"Premium"
};

const producto={
    nombre:"Servicio Digital",
    precioBase:1000
};

function procesarCompra(cliente,producto){
    if(!esMayorDeEdad(cliente.edad)){
        return "Acceso Denegado: Menor de Edad";
    }
    const iva=calcularIva(producto.precioBase);
    let precioFinal=producto.precioBase+iva;

    const descuento=calcularDescuento(precioFinal,cliente.tipo);
    precioFinal=precioFinal-descuento;

    return{
        cliente: cliente.nombre,
        producto: producto.nombre,
        precioBase: producto.precioBase,
        iva,
        descuento,
        precioFinal
    };
    
}



const resultado=procesarCompra(cliente,producto);
console.log("Resultado de la compra: ", resultado);

clientes=[
    {nombre:"Juan", edad:44, tipo:"Premium"},
    {nombre:"Maria", edad:30, tipo:"Regular"},
    {nombre:"Pedro", edad:17, tipo:"Regular"}
];  

const producto3={
    nombre:"Producto 3",
    precioBase:1500
};

for(let cliente of clientes){
    const resultado=procesarCompra(cliente,producto3);
    console.log("Resultado para: ", cliente,producto3);       
    console.log(resultado);
    console.log("-------------");
}


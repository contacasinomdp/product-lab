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

const nombre="Juan";
nombre="Pedro"; // Esto genera un error porque 'nombre' es una constante
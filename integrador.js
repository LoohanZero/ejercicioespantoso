// Una clienta nos pidió que hagamos un programa para su tienda online.


// ⬇️ El flujo del programa debería ser el siguiente:


//    1. Mostrar un saludo de bienvenida y preguntar el nombre de la clienta
//    2. Mostrarle los productos en promoción (2 productos)
//    3. Preguntarle si quiere comprar el producto 1.
//       a. Si acepta preguntar cuántas unidades va a llevar
//    4. Preguntarle si quiere comprar el producto 2.
//       a. Si acepta preguntar cuántas unidades va a llevar
//    5. Si no quiere llevar ningún producto, terminar el programa y mostrar un saludo de despedida   
//    6. Si lleva alguno, mostrar el detalle de la compra con:
//       - subtotales de cada producto (precio x cantidad) 
//       - total (suma de subtotales)
//    7. Preguntar si desea abonar con tarjeta de crédito
//       a. Si acepta preguntar en cuántas cuotas desea abonar
//         - Sólo puede pagar en 3, 6 o 12 cuotas
//         - Si ingresa un número equivocado, debe continuar el programa como si no utilizara tarjeta de crédito
//         - 3 cuotas tiene un interés de 5%, 6 de 10% y 12 de 25%
//    8. Mostrar el detalle de la compra con:
//       - subtotales de cada producto (precio x cantidad) 
//       - total (suma de subtotales)
//       - si abona con tarjeta, cantidad de cuotas y monto de cada cuota a pagar
//    9. Preguntar si tiene un código de descuento
//       - si dice que sí, pedir que ingrese el código
//       - mostrar si el código ingresado es correcto o incorrecto
//    10. Mostrar el detalle de la compra con:
//       - subtotales de cada producto (precio x cantidad) 
//       - total (suma de subtotales)
//       - si tiene código y lo ingresó bien, mostrar el descuento y el total final
//       - si abona con tarjeta, cantidad de cuotas y monto de cada cuota a pagar
//    10. Mostrar un saludo de despedida     

// ❗ Se requiere definir variables para los siguientes valores (para poder utilizarlas luego)

// Nombre de la tienda
// Nombre de producto 1
// Nombre de producto 2
// Precio de producto 1
// Precio de producto 2
// Código de descuento
// Valor de descuento

// ✔️ Todos los valores y mensajes que se requieran son libres (pueden poner cualquier cosa)


// 🔓 No es requerido validar los datos que se ingresan, por ejemplo, si en vez de ingresar una cantidad de un producto se ingresa un dato no válido, como una palabra


// 👍 Tips, consejos y buenas prácticas:

// ⚙️ Encarar un punto a la vez, probarlo bien, y cuando esté funcionando y cumpla con lo necesario, seguir adelante
// 🐪 Utilizar buenos nombres de variables y camelCase
// ♻️ Poner todo lo que se pueda dentro de variables, y reutilizarlas
// 📝 Espaciar los bloques de código en secciones y poner comentarios para que sea más legible
// 🔎 Si tenemos algún problema, usar la consola para inspeccionar los valores de las variables
// 🔀 Probar bien todos los caminos posibles


const nombre = prompt("Bienvenida, indique su nombre");
let precio1 = 15000;
let precio2 = 10000;
const promos = alert(`Los productos en promocion son Televisor a $${precio1} y Celular a $${precio2}`);
const producto1 = confirm("Desea adquirir un televisor?");

let mensaje = "";


if(producto1){
    const cantidadProducto1 = Number(prompt("Cuantas unidades desea llevar"));
    precio1 = precio1*cantidadProducto1;
    mensaje+= `\n Televisor subtotal $${precio1} `    
} else {
    precio1=0;
}
const producto2 = confirm("Desea adquirir un celular?");
if(producto2){
    const cantidadProducto2 = Number(prompt("Cuantas unidades desea llevar"));
    precio2 = precio2*cantidadProducto2;
    mensaje+= `\n Celular subtotal $${precio2}`
} else{
    precio2=0;
}

let precioTotal = precio1 + precio2;
const nada = !producto1 && !producto2;
if(nada){
    alert("Muchas Gracias " + nombre);
    
}

if(producto1||producto2){
    alert(`Ud ha comprado: ${mensaje}, el total de su compra es $${precioTotal}`);


    const codigoCorrecto = "DescuentoPorRata";
    let descuento = 0.1;
    let codigo = confirm(`Tiene codigo de descuento?`);
    let nuevoPrecio = precioTotal - (precioTotal * descuento) 

    if(codigo){
        codigoIngresado = prompt("Ingrese el codigo de descuento");
        if(codigoIngresado===codigoCorrecto){
            alert(`Bien Rata! obtuviste el descuento, Detalle de la compra: ${mensaje} \n El descuento es de 10%, y el total a pagar es de $${nuevoPrecio}`);

        } else {
            nuevoPrecio = precioTotal
            alert(`Tu codigo es incorrecto, no obtuviste descuento, ${mensaje}`);
        }
    
        const pago = confirm("Desea abonar con tarjeta de credito?");
            if(pago){
            let cuotas = Number(prompt("Desea abonar en 3, 6 o 12 cuotas?"));
            if(isNaN(cuotas)){
            alert("No ingreso el numero de cuotas, intente la compra nuevamente");
            
            } 
            else if(cuotas===3){
            alert(`Detalle de la compra: ${mensaje} \n El descuento es de 10%, y el total a pagar es de $${nuevoPrecio} \n Por pagar en 3 cuotas tiene un interes de 5% \n
            Total $${nuevoPrecio*1.05}
            Muchas gracias por su compra ${nombre}`);
            }   
            else if(cuotas===6){
                alert(`Detalle de la compra: ${mensaje} \n El descuento es de 10%, y el total a pagar es de $${nuevoPrecio} \n Por pagar en 6 cuotas tiene un interes de 10% \n
                Total $${nuevoPrecio*1.10}
                Muchas gracias por su compra ${nombre}`);
            } 
            else if(cuotas===12){
                alert(`Detalle de la compra: ${mensaje} \n El descuento es de 10%, y el total a pagar es de $${nuevoPrecio} \n Por pagar en 12 cuotas tiene un interes de 15% \n
                Total $${nuevoPrecio*1.15}
                Muchas gracias por su compra ${nombre}`);
            }

        } else {
            if(codigoIngresado===codigoCorrecto){
            alert(`Detalle de la compra: ${mensaje} \n El descuento es de 10%, y el total a pagar es de $${nuevoPrecio} en efectivo\n 
            Total $${nuevoPrecio}
            Muchas gracias por su compra ${nombre}`)
            }
            else{
                alert(`Detalle de la compra: ${mensaje} \n No posee codigo de descuento o el mismo es incorrecto \n 
                Total $${nuevoPrecio} \n Muchas gracias por su compra ${nombre}`)  
            }
            
        }
    } else {    
    const pago = confirm("Desea abonar con tarjeta de credito?");
    if(pago){
    let cuotas = Number(prompt("Desea abonar en 3, 6 o 12 cuotas?"));
    if(isNaN(cuotas)){
    alert("No ingreso el numero de cuotas");
} else if(cuotas===3){
alert(`Detalle de la compra: ${mensaje} \n Por pagar en 3 cuotas tiene un interes de 5% \n
Total $${precioTotal*1.05}`);
}

else if(cuotas===6){
alert(`Detalle de la compra: ${mensaje} \n  Por pagar en 6 cuotas tiene un interes de 10% \n
Total $${precioTotal*1.1}`);
}

else if(cuotas===12){
alert(`Detalle de la compra: ${mensaje} \n Por pagar en 12 cuotas tiene un interes de 15% \n
Total $${precioTotal*1.15}`);
}

} 
else{
    alert(`Detalle de la compra: ${mensaje} \n No posee codigo de descuento o el mismo es incorrecto \n 
    Total $${precioTotal} \n Muchas gracias por su compra ${nombre}`)  
}  
}
}
// Script para determinar el precio total de un pedido con gastos de envío
let precio_pedido = prompt("Introduce el precio de tu pedido:");

if (precio_pedido >= 50) {
    gastos_envio = 0;
} 
else {
    gastos_envio = 10;
} 
let total = Number(precio_pedido) + Number(gastos_envio);
alert("Pedido: " + precio_pedido + "€. Gastos de envío: " + gastos_envio + "€. Total a pagar: " + total + "€.");
// Script para encontrar el mayor de dos números
let numero1 = prompt("Dime un número:");
let numero2 = prompt("Dime otro número:");

if 
(numero1 > numero2) {
    alert("El número " + numero1 + " es mayor que " + numero2);
} 
else if (numero2 > numero1) {
    alert("El número " + numero2 + " es mayor que " + numero1);
}
else {
    alert("Los dos números son iguales: " + numero1 + " = " + numero2);
}
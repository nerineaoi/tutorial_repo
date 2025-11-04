// Calcula la suma de los numeros del 1 al 100
let total = 0;
for (let contador = 1; contador <= 100; contador++) {
    total += contador;
}
console.log("El total de la suma de los números del 1 al 100 es: " + total);

//Alternativa del profesor
let suma = 0;
for (contador = 1; contador <= 100; contador++) {
    suma = contador + suma;
}
alert("El total de la suma de los números del 1 al 100 es: " + suma);

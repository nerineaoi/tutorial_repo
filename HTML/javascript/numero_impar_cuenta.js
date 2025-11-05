//Pide un número 
//Calcula cuántos números impares hay desde 1 hasta ese número

let numero = Number(prompt("Dame un numerito:"));
let total_impares = 0;
let contador = 1;

while (contador <= numero) {
    if (contador % 2 !== 0) { // Si el número es impar. Tb se podría usar (contador % 2 === 1)
        total_impares++; // Incrementa el contador de impares. Tb se podría usar total_impares = total_impares + 1;
    }
    contador++; // Incrementa el número para la siguiente iteración. Tb se podría usar contador = contador + 1;
}
alert("La cantidad de números impares desde 1 hasta el número " + numero + " es: " + total_impares);
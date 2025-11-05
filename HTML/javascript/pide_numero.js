//Pide un número 
//Calcula la suma de todos los números desde 1 hasta ese número

let numero = Number(prompt("Dame un numerito:"));
let cuenta = 0;
let num = 1;
while (num <= numero) {
    cuenta += num;
    num++;
}
alert("La suma desde 1 hasta el número " + numero + " es: " + cuenta);
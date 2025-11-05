//Pide un número en un prompt.
//Repite hasta que el número sea positivo.

let numero;

do{
    numero = Number(prompt("Dame un número positivo ^^ :"))
}
while (numero < 0);
alert("¡Gracias! el " + numero + " es positivo :)");
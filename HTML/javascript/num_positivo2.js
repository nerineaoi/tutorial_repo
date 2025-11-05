//Pide un número en un prompt.
//Repite hasta que el número sea positivo.
let numero;
do{
    numero =  prompt("Dame un número positivo ^^ :");
}
while (numero <= 0|| isNaN(numero));
alert("¡Gracias! el " + numero + " es positivo :)");
//Escribir un script que me pida un número del 1 al 10 y me muestre la tabla de multiplicar de ese número.
let numero = prompt ("Introduce un número del 1 al 10");
if (numero >= 1 && numero <= 10){
 for (let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        console.log(numero + " x " + i + " = " + resultado);
    }
} else {
    alert("Por favor, introduce un número entre 1 y 10.");
}


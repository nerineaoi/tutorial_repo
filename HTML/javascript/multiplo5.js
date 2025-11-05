//Escribir una función que pida un número
//y diga si es múltiplo de 5 o no.

function multiplo_5() {
    let numero = Number(prompt("Dame un numerito:"));
    if (numero % 5 === 0) {
        alert ("El número " + numero + " es múltiplo de 5.");
    }
    else {
        alert ("El número " + numero + " no es múltiplo de 5.");
    }
}

multiplo_5();
//Escribir una función que recibe 2 parámetros
//El primero es la frase a escribir
//El segundo, el número de veces que se va a repetir la frase

function repetir_frase(frase, veces) {
    for (let i = 1; i <= veces; i++) {
        console.log(frase);
    }
}
repetir_frase("Backstreet's Back", 3);

//Ecribir una funciñon que reciba el precio de un producto
//y DEVUELVA el precio con IVA (21%)

function precio_IVA(precio) {
    let precio_IVA = precio * 1.21;
    return precio_IVA;
}
resultado = precio_IVA(100);
alert("El precio con IVA es: " + resultado);

//Crear una función que calcule el IMC de una persona, a partir de su peso y su estatura
//El IMC = peso / altura * altura
//Si IMC < 18.5 -> "Bajo peso"
//Si IMC entre 18.5 y 25 -> "Peso normal"
//Si IMC mayor de 25 -> "Sobrepeso"
function calcular_imc(peso, altura){
    let imc = peso / (altura * altura);
    if (imc < 18.5){
        return "Estás canijo"; // tb se puede hacer un "alert" en vez de un "return"
    } else if (imc >= 18.5 && imc <= 25){
        return "Estás perfecto";
    } else {
        return "Estás gordo";
    }
}
resultado_imc = calcular_imc(70, 1.75); // en el caso de usar "alert" en la función, aquí no haría falta asignarlo a una variable
alert(resultado_imc);
//El programa nos pide una altura y una anchura 
//debemos pintar en la consola 
//un rectángulo de asteriscos
//con esa anchura y altura

let alto = Number(prompt("Introduce la altura deseada del rectángulo"));
let ancho = Number(prompt("Introduce la anchura deseada del rectángulo"));

for (let i = 1; i <= alto; i++) {
    let fila = "";
    for (let j = 1; j <= ancho; j++) {
        fila += "*";
    }
    console.log(fila);
}
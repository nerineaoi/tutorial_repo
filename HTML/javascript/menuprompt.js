//Vamos a crear un menú con 4 opciones
//1. Saludar
//2. Decir cual es el tiempo esta mañana
//3. Darte un mensaje de ánimo
//4. Salir
//El menú se repetirá hasta que elija salir

let opcion;

do {
    opcion = prompt(
        "Elige una opción:\n1. Saludar\n2. Decir cuál es el tiempo esta mañana\n3. Darte un mensaje de ánimo\n4. Salir"
    );

    switch (opcion) {
        case "1":
            alert("¡Bonjour! ¡Hola! ¡Ciao!");
            break;
        case "2":
            alert("El grajo vuela bajo. Hace un frío del carajo.");
            break;
        case "3":
            alert("¡Eres lo más grande! ¡Tú puedes con todo!");
            break;
        case "4":
            alert("¡Hasta luego, cocodrilo!");
            break;
        default:
            alert("Opción no válida.");
    }

} while (opcion !== "4");

//otra opción:
//let opcion = "";
//while (opcion !== "4") {
//    opcion = prompt("Elige una opción:\n1. Saludar\n2. Decir cuál es el tiempo esta mañana\n3. Darte un mensaje de ánimo\n4. Salir");
//    if (opcion === "1") {
//        alert("¡Bonjour! ¡Hola! ¡Ciao!");
//    } else if (opcion === "2") {
//        alert("El grajo vuela bajo. Hace un frío del carajo.");
//    } else if (opcion === "3") {
//        alert("¡Eres lo más grande! ¡Tú puedes con todo!");
//    } else if (opcion === "4") {
//        alert("¡Hasta luego, cocodrilo!");
//        break;
//    } else {
//        alert("Opción no válida.");
//    }
//}
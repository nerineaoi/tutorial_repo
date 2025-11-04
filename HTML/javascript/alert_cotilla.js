// Pedir datos al usuario
    let nombre = prompt("¿Cuál es tu nombre?");
    let edad = prompt("¿Cuál es tu edad?");
    let ciudad = prompt("¿Cuál es tu ciudad de nacimiento?");
    
    // Verificar que se ingresaron todos los datos
    if (nombre && edad && ciudad) {
        // Mostrar mensaje de bienvenida personalizado
        alert("¡Bienvenido/a " + nombre + "! Tienes " + edad + " años y naciste en " + ciudad + ". ¡Esperamos que disfrutes de nuestra página web!");
    } else {
        alert("Por favor, completa todos los datos para recibir tu mensaje de bienvenida personalizado.");
    }
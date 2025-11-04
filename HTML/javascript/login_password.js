let login = prompt("Introduce tu login:");
let password = prompt("Introduce tu password:");

if (login === "admin" && password === "1234") 
{
    alert("Usuario correcto. Bienvenid@.");
} 
else {
    alert("Usuario incorrecto. Acceso denegado.");
}
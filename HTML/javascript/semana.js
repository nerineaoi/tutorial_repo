//Mensaje según el día de la semana

const dia = "Martes";

switch (dia) {
    case "Lunes":
        alert("Uff, paciencia, que pasará rápido el lunes.  Ánimo!");
        break;
    case "Martes":
        alert("Es martes, sigue adelante! Ánimo!");
        break;
    case "Miércoles":
        alert("Ya estamos a mitad de semana. Ánimo!");
    case "Jueves":
        alert("Es juernes! No queda ná. Ánimo!");
        break;
    case "Viernes":
        alert("Por fin es viernes! Ánimo, que ya casi es fin de semana!");
        break;
    case "Sábado":
        alert("Es sábado! Disfruta del fin de semana!");
        break;
    default:
        alert("Es domingo! Descansa y prepárate para la semana que viene!");
        break;
}
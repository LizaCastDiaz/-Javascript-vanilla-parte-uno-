
    // 11 Crea una aplicación que nos pida un día de la semana y que nos diga si es un día
    // laboral o no. Usa un switch para ello.

    let dia = prompt("introduce un dia de la semana");
    switch(dia){
        case "Lunes":
        case "Martes":
        case "Miercoles":
        case "Jueves":
        case "Viernes":
            console.log(dia + " es un dia entre semana");
        break;
        case "Sabado":
        case "Domingo":
            console.log(dia + " es un dia de fin de semana");
        break;
        default : console.log ("Esto no es un dia");

    }


 // 10 Realiza una aplicación que nos pida un número de ventas a introducir, después
    // nos pedirá tantas ventas por teclado como número de ventas se hayan indicado.
    // Al final mostrara la suma de todas las ventas. Piensa que es lo que se repite y lo
    // que no.

    let nVentas = prompt("introduce el numero de ventas");
    let suma = 0;
    let total = 0;

    while(nVentas != 0){
        suma = prompt("Ingresa el precio de cada venta");
        total = total + parseFloat(suma);
        nVentas--;


    }
    console.log(total);

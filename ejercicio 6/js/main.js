// 6. Lee un número por teclado que pida el precio de un producto (puede tener
//     decimales) y calcule el precio final con IVA. El IVA sera una constante que sera
//     del 21%

var precio = parseInt( prompt("Escribe el precio del producto, para sacarle el precio final del iba"))
console.log((precio / 100 ) * 21 );


// 7.Muestra los números del 1 al 100 (ambos incluidos). Usa un bucle while.

// let numero1 = 0;
// let x = 100;


// while (numero1 <= x){
//     console.log(numero1)
//     numero1 ++;
// }

// var n = 0;
// var x = 100;

// while (n <= 100){
//     console.log(n)
//     n ++;}

// 8. Haz el mismo ejercicio anterior con un bucle for.
 


// for (let i = 0; i <= 100;  i++) {
//     console.log(i);
// }


// 9 Muestra los números del 1 al 100 (ambos incluidos) divisibles entre 2 y 3. Utiliza
// el bucle que desees. 



// for (i = 1; i <= 20; i++){
//     // console.log(i);
//     if (i % 2 == 0){
//         console.log( i + " es divisor entre 2");
//     }else if  (i % 3 == 0){
//         console.log( i + " es divisible entre 3" );
//     }else {
//         console.log(" es divisible por 1");
//     }
    
// }


// for (let i = 0; i <= 100;  i++) {
//          console.log(i);
//         }



    // for (let i = 1; i < 100; i++){
    //     console.log(i);
    //     if (i % 2 == 0){
    //         console.log( i + "Es divisible por 2");
    //     } else if (i % 3 == 0){
    //         console.log( i + "Es divisible por 3");
    //     }}


    // 10 Realiza una aplicación que nos pida un número de ventas a introducir, después
    // nos pedirá tantas ventas por teclado como número de ventas se hayan indicado.
    // Al final mostrara la suma de todas las ventas. Piensa que es lo que se repite y lo
    // que no.

    // let nVentas = prompt("introduce el numero de ventas");
    // let suma = 0;
    // let total = 0;

    // while(nVentas != 0){
    //     suma = prompt("Ingresa el precio de cada venta");
    //     total = total + parseFloat(suma);
    //     nVentas--;


    // }
    // console.log(total);

    // 11 Crea una aplicación que nos pida un día de la semana y que nos diga si es un día
    // laboral o no. Usa un switch para ello.

    // let dia = prompt("introduce un dia de la semana");
    // switch(dia){
    //     case "Lunes":
    //     case "Martes":
    //     case "Miercoles":
    //     case "Jueves":
    //     case "Viernes":
    //         console.log(dia + " es un dia entre semana");
    //     break;
    //     case "Sabado":
    //     case "Domingo":
    //         console.log(dia + " es un dia de fin de semana");
    //     break;
    //     default : console.log ("Esto no es un dia");

    // }

    // 12 Escribe una aplicación con un String que contenga una contraseña cualquiera.
// Después se te pedirá que introduzcas la contraseña, con 3 intentos. Cuando
// aciertes ya no pedirá más la contraseña y mostrará un mensaje diciendo
// “Enhorabuena”. Piensa bien en la condición de salida (3 intentos y si acierta sale,
// aunque le queden intentos).



//<3  let pass = "uno";

// for (let i = 3; i > 0; i--){
//     console.log (passdos = prompt("Ingresa tu contraseña"));
//     if (passdos !== pass){
//         console.log("Es invalida, intentalo de nuevo");
//         break;
//     }else (pass === passdos){
//         console.log("En hora buena, este es tu pass");
//     } break;

// }



// 13. Crea una aplicación llamada CalculadoraInversa, nos pedirá 2 operandos (int) y
// un signo aritmético (String), según este último se realizará la operación
// correspondiente. Al final mostrara el resultado en un cuadro de dialogo.
// Los signos aritméticos disponibles son:
// +: suma los dos operandos.
// -: resta los operandos.
// *: multiplica los operandos.
// /: divide los operandos, este debe dar un resultado con decimales (double)
// ^: 1o operando como base y 2o como exponente.
// %: módulo, resto de la división entre operando1 y operando2.

// let num1 = parseInt(prompt("Escribe un numero"));
// let signo = prompt("suma, resta, multiplicacion, division, restante");
// let num2 = parseInt(prompt("Escribe un segundo numero"));


// switch (signo){
//     case "suma":
//     alert ("la suma de estos 2 numeros es " + (num1 + num2 ));
//     break;
//     case "resta":
//     alert ("la resta de estos 2 numeros es " + (num1 - num2 ));
//     break;
//     case "multiplicacion":
//     alert  ("la multiplicacion de estos 2 numeros es " + (num1 * num2 ));
//     break;
//     case "division":
//     alert  ("la division de estos 2 numeros es " + (num1 / num2 ));
//     break;
//     case "restante":
//     alert  ("la restante de estos 2 numeros es " + (num1 % num2 ));
//     break;
//     default : ("Esto no es un numero");
// }


/////////////////////////////////////////////////////////////////////

// Crea un programa el cual te pregunte por una
// nota del 0 al 10 y dependiendo del número, te
// devuelva la siguiente clasificación.
// Nota: Debes de usar el If.
// 0 - 4: Insuficiente.
// 5 - 6: Suficiente.
// 7 - 8: Notable.
// 9 - 10: Sobresaliente.

// let nota = parseInt(prompt("Escribe en numero de tu nota"));

// switch(nota){
//     case 1:
//     case 2:
//         alert ("Tu nota es insuficiente");
//     break;
//     case  3:
//     case  4:
//         alert("Tu nota es suficiente");
//         break;
//     case 5:
//     case 6:
//         alert("Tu nota es aceptable");
//         break;
//     case 8:
//     case 9:
//     case 10:
//         alert("Tu nota es sobresalienet");
//         break;
//         default : alert("esto no es un numero");

// }

// Crea un programa que pida al usuario un
// número, y de este, generé su tabla de multiplicar
// del 0 al 10.
// Nota: Debes de usar un While.

// let num = parseInt(prompt("Escribe un numero"));

// while (num < 20) {
//     console.log ((num * 1)) ;
//     num ++;
// }

// let tabla = parseInt(prompt("Escribe el numero que quieres multiplicar"));
// let multiplicador = parseInt(prompt("Por cual numero quieres multiplicarlo"));

// while (( multiplicador > 0) && (multiplicador < 10)){
//      console.log( tabla + "*"+ multiplicador + "=" + (tabla * multiplicador));
//     ++multiplicador;
// }

// Mediante un prompt() pediremos qué número
// quieres mostrar la tabla de multiplicar del 1 al
// 10.
// Usando FOR

// let numero = parseInt(prompt("Escribe el numero que quieras multiplicar"));

// for (let i = 0 ; i <= 10; i ++){
//     console.log(numero + "*" + i + "=" + (numero * i ) );
// }

// FUCTIONS

// Vamos a refactorizar la kata para crear una
// calculadora más inteligente.
// El programa empezará preguntando qué
// operación vamos a usar.
// Luego el programa pide los dos números para
// hacer la operación asignada y mostrarla en un
// alert()

// FORMA 1
// let signo = prompt("Que operador quieres ulitzar?");
// function suma (num1, num2){
//     return num1 + num2;
// }
// console.log(suma (num1 = parseInt((prompt("Escribe un numero"))), num2 = parseInt(((prompt("Escribe un numero"))))));

// FORMA 2
// function operacion (n){
//     for (let i = 1 ; i <= 10 ; i++){
//         console.log(n * i);

//     }
// }
// operacion (3); 

// FORMA 3 CON TODAS LAS OPERACIONES

// let operacion = prompt("Que operacion quieres: suma, resta, multi, divi, restante?");
// let num1 = parseInt( prompt("Introducir numero"));
// let num2 = parseInt( prompt("Introducir otro numero"));

// function suma (num1,num2){
//     return num1 + num2;
// }
// function resta (num1,num2){
//     return num1 - num2;
// }
// function multi (num1,num2){
//     return num1 * num2;
// }
// function divi (num1,num2){
//     return num1 / num2;
// }
// function restante (num1,num2){
//     return num1 % num2;
// }

// switch (operacion){
//     case "suma":
//         console.log (suma(num1, num2));
//         break;
//     case "resta":
//         console.log ( resta(num1, num2));
//         break;
//     case "multi":
//         console.log  (multi(num1, num2));
//         break;
//     case "divi":
//         console.log (divi(num1, num2));
//         break;
//     case "restante":
//         console.log (restante(num1, num2));
//         break;
//         default : console.log ("no es una operacion");

// }

var numeros = [1, 24, 456, 5];
var deportes = ["rugby", "tennis", "football"];

console.log(numeros); // 4
for (var i = 0; i < numeros.length; i++) {
console.log(numeros[i]);
}

var nuevo = numeros.concat(deportes);
console.log(nuevo);

nuevo.push (299,3);
console.log(nuevo[0]);






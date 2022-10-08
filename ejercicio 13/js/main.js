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

let num1 = parseInt(prompt("Escribe un numero"));
let signo = prompt("suma, resta, multiplicacion, division, restante");
let num2 = parseInt(prompt("Escribe un segundo numero"));


switch (signo){
    case "suma":
    alert ("la suma de estos 2 numeros es " + (num1 + num2 ));
    break;
    case "resta":
    alert ("la resta de estos 2 numeros es " + (num1 - num2 ));
    break;
    case "multiplicacion":
    alert  ("la multiplicacion de estos 2 numeros es " + (num1 * num2 ));
    break;
    case "division":
    alert  ("la division de estos 2 numeros es " + (num1 / num2 ));
    break;
    case "restante":
    alert  ("la restante de estos 2 numeros es " + (num1 % num2 ));
    break;
    default : ("Esto no es un numero");
}



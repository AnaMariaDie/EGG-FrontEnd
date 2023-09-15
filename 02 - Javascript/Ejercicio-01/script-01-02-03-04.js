/*1. Escribir un algoritmo en el cual se consulte al usuario que ingrese ¿cómo está el día de
hoy? (soleado, nublado, lloviendo). A continuación, mostrar por pantalla un mensaje que
indique “El día de hoy está ...”, completando el mensaje con el dato que ingresó el usuario.*/
// let re = prompt("Como se encuentra el dia de hoy?", "(soleado, llueve, etc)");
// confirm(`el dia de hoy esta ${re}`);

/*2. Conocido el número en matemática PI π, pedir al usuario que ingrese el valor del radio
de una circunferencia y calcular y mostrar por pantalla el área y perímetro. Recuerde que
para calcular el área y el perímetro se utilizan las siguientes fórmulas:
area = PI * radio2
perimetro = 2 * PI * radio*/
// let radio = prompt("Ingresa un valor para el radio de una circunferencia", 
// "(puede ser un numero entero)");
// let area = Math.PI*Math.pow(radio,2);
// let perimetro = 2*(Math.PI*radio);
// confirm(`El area del circulo es: ${area}
// El perimetro del circulo es: ${perimetro}`);

/*3. Escriba un programa en donde se pida la edad del usuario. Si el usuario es mayor de
edad se debe mostrar un mensaje indicándolo.*/
// let edad = prompt("Ingresa tu edad", "(ejemplo 15)");
// let mensaje;
// function esMayor(edad) {
//     return (edad>=18) ? mensaje = "es mayor de edad" : mensaje = "es menor de edad"};
// esMayor(edad);
// confirm(`con ${edad} años usted: ${mensaje}`);

/*4. Realiza un programa que sólo permita introducir los caracteres ‘S’ y ‘N’. Si el usuario
ingresa alguno de esos dos caracteres se deberá de imprimir un mensaje por pantalla
que diga “CORRECTO”, en caso contrario, se deberá imprimir “INCORRECTO”.*/
let char = prompt("Ingresa un caracter", "(ejemplo a, b)").toUpperCase();
function evaluarChar(char) {
    if (char == "S" || char == "N") {
        alert("CORRECTO");
    } else {alert("INCORRECTO")}
};
evaluarChar(char);
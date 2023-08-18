/*6. Realizar un programa que, dado un número entero, visualice en pantalla si es par o impar.
En caso de que el valor ingresado sea 0, se debe mostrar “el número no es par ni impar”.*/
// let numero = prompt("Ingrese un numero entero", "(Ejemplo: 10)");
// numero = parseInt(numero);
// if (numero == 0) {
//     alert("El numero ingresado no es par ni impar");
// } else if (numero % 2 == 0) {
//     alert("El numero ingresado es par");
// } else {
//     alert("El numero ingresado es impar");
// }

/*7. Escriba un programa en el cual se ingrese un valor límite positivo, y a continuación
solicite números al usuario hasta que la suma de los números introducidos supere el
límite inicial.*/
// let limite = prompt("Ingrese un valor maximo", "Ejemplo: 50");
// limite = parseInt(limite);
// let num;
// let sum = 0;
// do {
//     num = parseInt(prompt("Ingrese un numero entero"));
//     sum += num;
//     alert(`Llevamos una suma de: ${sum}`);
// } while (sum <= limite);
// alert(`Hemos superado el valor limite ${limite}, llegamos a: ${sum}`);

/*8. Escribir un programa que lea números enteros hasta teclear 0 (cero). Al finalizar el
programa se debe mostrar el máximo número ingresado, el mínimo, y el promedio de
todos ellos.*/
function operaciones() {
    let max = 0;
    let min = 0;
    let sum = 0;
    let prom;
    let i = 0;
    alert("Vamos a sumar numero enteros!");
    let num;
    do {
        num = parseInt(prompt("Ingrese un numero entero"));
        if (num == 0) {
            break;
        }
        if (min != 0 && max != 0) {
            if (num < min) {
                min = num;
            }
            if (num > max) {
                max = num;
            }
        } else {
            min = num;
            max = num;
        }
        sum += num;
        i++;
    } while (num != 0);
    prom = sum / i;
    // alert(`Ingresaste un 0\nLos totales son:\nValor Maximo: ${max}
    // nValor Minimo: ${min}\nPromedio: ${prom}`);
    document.body.innerHTML = `
    <h2>Resultados</h2>
    <ul>
    <li>Valor Maximo: ${max}</li>
    <li>Valor Minimo: ${min}</li>
    <li>Suma de Numeros: ${sum}</li>
    <li>Promedio: ${prom}</li>
    </ul>
`};
document.addEventListener("DOMContentLoaded", operaciones());
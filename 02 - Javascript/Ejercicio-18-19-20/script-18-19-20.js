/*18. A partir del siguiente array: var valores = [true, 5, false, "hola", "adios", 2]:
a) Determinar cual de los dos elementos de texto es mayor
b) Utilizando exclusivamente los dos valores booleanos del array, determinar los
operadores necesarios para obtener un resultado true y otro resultado false
c) Determinar el resultado de las cinco operaciones matemáticas realizadas con los
dos elementos numéricos.*/
// var valores = [true, 5, false, "hola", "adios", 2];
// let t1 = valores[3];
// let t2 = valores[4];
// let b1 = valores[0];
// let b2 = valores[2];
// let v1 = valores[1];
// let v2 = valores[5];

// compare(t1, t2);
// bandera(b1, b2);
// operation(v1, v2);

// function compare(t1, t2) {
//     let result = t1.localeCompare(t2);
//     switch (result) {
//         case -1:
//             alert(`El elemento ${t1} es mayor que el elemento ${t2}`);
//             break;
//         case 0:
//             alert(`Los elementos ${t1} y ${t2} son iguales`);
//             break;
//         case 1:
//             alert(`El elemento ${t2} es mayor que el elemento ${t1}`);
//             break;
//     }
// }

// function bandera(b1, b2) {
//     let r1 = (b1 && b2);
//     let r2 = (b1 || b2);
//     alert(`${b1} && ${b2} = ` + r1);
//     alert(`${b1} || ${b2} = ` + r2);
// }

// function operation(v1, v2) {
//     let sum = v1 + v2;
//     let res = v1 - v2;
//     let mul = v1 * v2;
//     let div = v1 / v2;
//     let mod = v1 % v2;
//     alert(`Los resultados de las operaciones con los valores: ${v1} y ${v2} son:\nSuma: ${sum}\nResta: ${res}\nMultiplicacion: ${mul}\nDivision: ${div}\nModulo: ${mod}`);
// }

/*19. Realizar un programa en Java donde se creen dos arreglos: el primero será un arreglo A
de 50 números reales, y el segundo B, un arreglo de 20 números, también reales. El
programa deberá inicializar el arreglo A con números aleatorios y mostrarlo por pantalla.
Luego, el arreglo A se debe ordenar de menor a mayor y copiar los primeros 10 números
ordenados al arreglo B de 20 elementos, y rellenar los 10 últimos elementos con el valor
0.5. Mostrar los dos arreglos resultantes: el ordenado de 50 elementos y el combinado de 20.*/
// let fill = (a) => {
//     for (let i = 0; i < 50; i++) {
//         a.push(Math.floor(Math.random() * 100));
//     }
// };

// let a = [];
// window.onload = fill(a);
// console.log(`Array A pre: ` + a);
// a.sort();
// console.log(`Array A pos: ` + a);
// let b = a.slice(0, 10).concat(Array(10).fill(0.5));
// console.log(`Array A:` + a);
// console.log(`Array B:` + b);

/*20. Realizar un programa que obtenga la siguiente matriz [[3], [6], [9], [12], [15]] y devuelve y muestre el siguiente array [6, 9, 12, 15, 18].*/
let matriz = [[3], [6], [9], [12], [15]];
let result = matriz.map(e => e[0]);
function create(matriz) {
    let e0 = parseInt(matriz.shift());
    result.push(e0 + result[result.length-1]);
    return result;
}
create(matriz);
console.log("Matriz original: " + matriz);
console.log("Matriz resultante: " + result);


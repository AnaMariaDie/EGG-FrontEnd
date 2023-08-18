/*9. Realizar un programa que pida una frase y el programa deberá mostrar la frase con un
espacio entre cada letra. La frase se mostrara así: H o l a. Nota: recordar el
funcionamiento de la función Substring().*/
// function separarFrase() {
//     let frase = prompt("Ingresa una frase");
//     let nuevaFrase = "";
//     let arrayFrase = frase.split("");
//     for (let i = 0; i < arrayFrase.length; i++) {
//         nuevaFrase += arrayFrase[i] + " ";
//     }

//     document.body.innerHTML = `
//     <h3>La Frase que escribio es:</h3>
//     <p>${frase}</p>
//     <h3>La Frase con los espacios quedo:</h3>
//     <p>${nuevaFrase}</p>
// `};
// document.addEventListener("DOMContentLoaded", separarFrase());

/*10. Escribir una función flecha que reciba una palabra y la devuelva al revés.*/
// function backWord() {
//     let palabra = prompt("Escribe una palabra");
//     let modPalabra = "";
//     let array = palabra.split("");
// // Lo hacemos con un bucle e incorporamos un espacio en blanco.
//         for(let i = array.length - 1; i >= 0; i--) {
//         modPalabra += array[i] + " ";
//     }
// // Lo hacemos con el metodo reverse del array que devuelve un array.
//         modPalabra = array.reverse();
//     document.body.innerHTML = `
// <h2>La palabra que escribio es:</h2>
// <p>${palabra}</p>
// <h2>Ya modificada quedo:</h2>
// <p>${modPalabra}</p>
// `};

// Usando una Funcion Flecha
// let array = (palabra) => palabra.split("").reverse().join("");

// document.addEventListener("DOMContentLoaded", () => {
//     let backWord = array(prompt("Escribe una palabra"));
//     document.body.innerHTML = `
//     <h2>Ya modificada quedo:</h2>
//     <p>${backWord}</p>
//     `});

/*11. Escribir una función que reciba un String y devuelva la palabra más larga.
String Ejemplo: “Guia de JavaScript”
Resultado esperado : “JavaScript”*/
// window.onload = beggin;

// function beggin() {
//     let frase = prompt("Escriba una frase");
//     let findWord = longestWord(frase);
//     document.body.innerHTML = `
//     <h2>La palabra mas larga es:</h2>
//     <p>${findWord}</p>
//     <p>${findWord}</p>
//     <p>${findWord}</pid=>
//     `;
// }

// function longestWord(frase) {
//     let array = frase.split(" ");
//     let findWord = array[0];
//     for (let i = 1; i < array.length; i++) {
//         if (array[i].length > findWord.length) {
//             findWord = array[i];
//         }
//     }
//     return findWord;
// };

/*12. Escribir una función flecha de JavaScript que reciba un argumento y retorne el tipo de
dato.*/
let elemento = prompt("Ingrese un dato");
let tipo = (e) => typeof(e);
console.log(tipo(elemento));
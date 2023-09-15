/*13. Crear un objeto persona, con las propiedades nombre, edad, sexo ('H' hombre, 'M' mujer,
'O' otro), peso y altura. A continuación, muestre las propiedades del objeto JavaScript.*/
// let persona = {
//     nombre: "leonardo",
//     edad: 18,
//     sexo: "h",
//     peso: 65,
//     altura: 1.75
// };
// console.log(`
//     <p>${persona.nombre}</p>
//     <p>${persona.edad}</p>
//     <p>${persona.sexo}</p>
//     <p>${persona.peso}</p>
//     <p>${persona.altura}</p>
// `);

/*14. Crear un objeto libro que contenga las siguientes propiedades: ISBN, Título, Autor,
Número de páginas. Crear un método para cargar un libro pidiendo los datos al usuario
y luego informar mediante otro método el número de ISBN, el título, el autor del libro y el
numero de páginas.*/
// let book = loadLibro();
// showLibro(book);

// function Libro(isbn, titulo, autor, numero_paginas){ 
//     this.isbn = isbn,
//     this.titulo = titulo,
//     this.autor = autor,
//     this.numero_paginas = numero_paginas
// };

// function loadLibro(){
//     let isbn = prompt("Ingrese el ISBN del Libro");
//     let titulo = prompt("Ingrese el Titulo del Libro");
//     let autor = prompt("Ingrese el Autor del Libro");
//     let numero_paginas = prompt("Ingrese el Numero de Paginas del Libro");
//     return new Libro(isbn, titulo, autor, numero_paginas);
// };
// function showLibro(libro) {
//     console.log(`ISBN: ${libro.isbn}\nTitulo: ${libro.titulo}\nAutor: ${libro.autor}\nNumero de Paginas: ${libro.numero_paginas}`);
// };

/*15. Escribe un programa JavaScript para calcular el área y el perímetro de un objeto Círculo
con la propiedad radio. Nota: Cree dos métodos para calcular el área y el perímetro. El
radio del círculo lo proporcionará el usuario.*/
// let radio = parseFloat(prompt("Ingrese el Radio"));

// const area = (radio) => Math.PI*Math.pow(radio,2);
// const perimetro = (radio) => 2*(Math.PI*radio);

// console.log(`El area es: ${area(radio).toFixed(2)}\nEl perimetro es: ${perimetro(radio).toFixed(2)}`);

/*16. Realizar un programa que rellene dos vectores al mismo tiempo, con 5 valores aleatorios
y los muestre por pantalla.*/
// let fill = (a, b) => { 
//     for (let i = 0; i < 5; i++) {
//         a.push(Math.floor(Math.random()*100));
//         b.push(Math.floor(Math.random()*100));
//     }
//     console.log(a,b);
// };

// let show = (a) => {
//     for (let i = 0; i < a.length; i++) {
//         console.log(a[i]);
//     }
// }

// let a = [];
// let b = [];
// window.onload = fill(a, b);
// show(a);
// console.log("");
// show(b);

/*17. Realizar un programa que elimine los dos últimos elementos de un array. Mostrar el
resultado*/
let fill = (a) => {
    for (let i = 0; i < 5; i++) {
        a.push(Math.floor(Math.random() * 100));
    }
    console.log(a);
};
let a = [];
window.onload = fill(a);
alert(`Array con todos los elementos: ${a.join()}`);
a.pop();
a.pop();
alert(`Array con dos elementos ya eliminados: ${a.join()}`);

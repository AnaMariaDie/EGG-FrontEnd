// Con templateString podemos incluir variables en el mensaje a mostrar
// var edad = prompt("Que edad tienes?");
// var mensaje = `la edad del sujeto es
// ... ${edad}`;
// alert(mensaje);

// Declaracion de un objeto con = {} 
// dentro se coloca el json que indica la variable y : el valor sepados por coma
// DATE lo toma yy/mm/dd
// var persona = {
//     apellido: "dieguez",
//     nombre: "ana maria",
//     nacimiento: new Date("1983-10-20"),
//     dni: 30591818,
//     mascotas: {
//         apodo: "kira",
//         nacim: new Date("2018-05-31")
//     }
// };

// Si Quisieramos un array de mascotas
//     mascotas: [{
//         apodo: "kira",
//         nacim: new Date("2018-05-31")
//         }, {
//         apodo: "melisa",
//         nacim: new Date("2012-04-15")
//         }]
// };
// console.log(persona);

// var personas = [{
//     apellido: "dieguez",
//     nombre: "ana maria",   
// }, {
//     apellido: "gomez",
//     nombre: "lorena",
// },{
//     apellido: "martinez",
//     nombre: "gabriela",
// }];
// console.log(personas[0], personas[1], personas[2]);
// For Each
// personas.forEach( (e)=> console.log(e.nombre));

// Funcion sin valor por defecto
// function coolName(name) {
//     return `--**${name}**--`;
// }
// Funcion con valor por defecto
// function coolName(name = "z") {
//     return `--**${name}**--`;
// }
// console.log(coolName("Ana"));
// console.log(coolName("Lorena"));

// Podemos asignar una funcion a una variable y tambien llamar a una funcion
// dentro de otra funcion
// recibe una funcion y un nombre
// let superCoolName = function (f, name) {
//     return `..${f(name)}..`;
// }
// una vez resuelta la funcion con valor por defecto
// let coolName = function (name = "z") {
//     return `--**${name}**--`;
// }
// llamamos la funcion
// let mensaje = superCoolName(coolName, "Ana");
// console.log(mensaje);

// funcion flecha puede resolver en una linea de ser posible
// la flecha explicita el return
// let coolName = (nombre = "z") => `--**${nombre}**--`;
// let mensaje = coolName("Ana");
// console.log(mensaje);

// convertir string a array de letras
// let array = "Agustin".split("");
// le pasamos al foreach una funcion flecha para que funcione
// array.forEach((e) => console.log("- " + e));

// array = array.map((e) => `..${e}..`);

// funcion asicronica
function resolverEn3Segundos() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            // resolve("2. Hola, perdon por la demora");
            reject(new Error("2. Ups, ocurrio un error"));
        }, 3000);
    });
}
// dos formas de resolver con async y await
// async function saludo() {
//     const respuesta = await resolverEn3Segundos();
//     console.log(respuesta);
// }
// con las palaras then(luego de que la promesa se resuelva hace algo) 
// catch(por si hay error) y finally(lo hace sin importar que suceda)
function saludo() {
    resolverEn3Segundos()
    .then((e)=> console.log(e))
    .catch((e)=> console.error(e));
}

console.log("1. Esto es antes del saludo");
saludo();
console.log("3. Esto es despues del saludo");
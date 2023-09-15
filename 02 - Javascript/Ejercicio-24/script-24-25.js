/*24. Escribir un programa de JavaScript que a través de un formulario calcule el radio de un
circulo y lo muestre en el HTML.*/
// document.addEventListener("DOMContentLoaded", () => {
//     let form = document.createElement("form");
//     let label = document.createElement("label");
//     label.textContent = "Ingrese el Area del Circulo";
//     let input = document.createElement("input");
//     input.setAttribute("type", "text");
//     let button = document.createElement("input");
//     button.setAttribute("type", "submit");
//     button.setAttribute("value", "Calcular");
//     button.setAttribute("id", "btn");
//     let salto1 = document.createElement("br");
//     let p = document.createElement("p");

//     form.appendChild(label);
//     form.appendChild(salto1);
//     form.appendChild(input);
//     form.appendChild(p);
//     form.appendChild(button);
//     document.body.appendChild(form);
//     document.addEventListener("submit", (evento) => {
//         // Para que se borre la info que escribio
//         evento.preventDefault();
//         let area = parseFloat(input.value);
//         input.value = "";
//         // Verificamos que no sera 0 o no venga un numero
//         if (!isNaN(area) && area != 0) {
//             let radio = Math.sqrt(area / Math.PI).toFixed(2);

//             let text = document.createElement("p");
//             let valor = `El radio de la circunferencia es ${radio}`;
//             text.textContent = valor;
//             console.log(text)
//             document.body.appendChild(text);
//         } else {
//             // En caso de que el numero no sea valido
//             let text = document.createElement("p");
//             let valor = `Ingrese un número válido`;
//             text.textContent = valor;
//             console.log(text)
//             document.body.appendChild(text);
//         }
//     });
// })

/*25. Escriba una función de JavaScript para obtener los valores de Nombre y Apellido del
siguiente formulario.*/
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const btnSubmit = document.getElementById("btnsubmit");
const getFormValores = (e) => {
    alert(`Nombre: ${nombre.value}\nApellido: ${apellido.value}`);
}
btnSubmit.addEventListener("click", getFormValores());
/*21. Escribir un programa para obtener un array de las propiedades de un objeto Persona.
Las propiedades son nombre, edad, sexo ('H' hombre, 'M' mujer, 'O' otro), peso y altura.*/
// let persona = {
//         nombre: "leonardo",
//         edad: 18,
//         sexo: "h",
//         peso: 65,
//         altura: 1.75
//     };
// let arrayPer = JSON.stringify(persona);
// console.log(arrayPer);

/*22. Escribir un programa de JavaScript que al clickear un botón muestre un mensaje a
elección.*/
document.getElementById("btn").onclick = clickButton;

function clickButton() {
    const div = document.getElementById("div");
    div.textContent = "Hiciste click en el boton!!!";
    div.style.color = "gold";
    div.style.backgroundColor = "green";
}

/*23. Resalte todas las palabras de más de 8 caracteres en el texto del párrafo (con un fondo
amarillo, por ejemplo).*/
const TEXTO = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident quos eveniet non, iste, suscipit minus repellendus quis adipisci nemo cum sit expedita. Unde veniam numquam explicabo. Distinctio architecto eveniet, possimus nam laborum provident unde similique minima explicabo? Repellat voluptates id voluptatibus earum molestiae est voluptas repellendus pariatur ea quod fuga odio autem adipisci ratione incidunt quibusdam debitis rerum quidem animi fugit, veritatis magnam obcaecati. Enim repellat sint, sit fuga quis nesciunt eos eius, est ut placeat hic totam quia laborum dicta culpa aperiam neque sed quod earum perferendis modi. At sunt aut assumenda quisquam libero, aperiam quas reiciendis dolor facilis laudantium molestiae accusamus aspernatur dolorum dolore qui ratione voluptates iure error et, pariatur quos fuga provident ad laborum. Eligendi reiciendis incidunt dolorem nulla nihil voluptas quaerat placeat mollitia corrupti quis odio obcaecati enim, consequuntur possimus veritatis consectetur dicta sapiente error in inventore suscipit magnam rerum ea. Qui magni dignissimos quasi amet a temporibus accusamus aspernatur, provident iusto. Esse fugit facere quo magnam nisi amet corrupti repellat, sed ea debitis nobis ipsa laudantium illo quisquam dicta officiis autem, enim deserunt et pariatur numquam reiciendis. Minima vitae ex, eum eaque ratione rem non, magnam possimus dignissimos enim nostrum odit explicabo itaque et!";
let array = TEXTO.split(" ");
buscar(array);
document.addEventListener("DOMContentLoaded", buscar());

function buscar(array) {
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if(element.length >= 8){
            array[i] = `<span style="background: yellow">${element}</span>`;
        }        
    }
    const PARAGRAPH = document.createElement("p");
    PARAGRAPH.innerHTML = array.join(" ");
    document.body.appendChild(PARAGRAPH);
}
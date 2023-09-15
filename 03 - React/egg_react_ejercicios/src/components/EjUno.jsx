import React from 'react'

export const Ejemplo = (props) => {
  return (
    <h3> Este es: {props.name} </h3>
  )
}

// Ejemplo 1
// export const Ejemplo = () => {
//   const titulo = "Hello Dog";
//   const subtitulo = "Sub Titulo";
//   return (
//     <div>
//       <h1 className="text">{titulo}</h1>
//       <h2 className="text">{subtitulo}</h2>
//     </div>
//   );
// };
import { useEffect, useState } from 'react';
import { Ejemplo } from './EjUno';

export const Body = () => {

  const[visit, setVisit] = useState(0);
  const[visible, setVisible] = useState(false);

  function sumVisit() {
    setVisit(visit + 1);
  }

  useEffect(() => {
    setVisible(!visible);
  }, [visit])

  return (
    <div id="body">
      <div className="mb-6">
        <Ejemplo name="Chiquito"/>
        <Ejemplo name="Filomena"/>
      </div>
      <div className="mb-6">
        <label className="row justify-content-center mb-3">{visit}</label>
        <button className="btn btn-outline-danger opacity-75 shadow-lg row" onClick={sumVisit} >Sumar Visitante</button>
      </div>
      <div className="mb-6">
        <label className="row justify-content-center mb-3">{visible && "Texto Oculto"}</label>
      </div>
    </div>
  );
}

export default Body;
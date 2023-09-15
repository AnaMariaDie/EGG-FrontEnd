import React, { useEffect, useState } from "react";
import { Character } from "./Character";
import RyMService from "../services/RyMService";

export const Characters = () => {
  const [arrays, setArrays] = useState([]);

  useEffect(() => {
    RyMService.getAllCaracters()
      .then((data) => setArrays(data.results))
      .catch((error) => console.log(error));
  }, [arrays]);

  const arrayList = arrays.map((a) => <Character array={a} key={a.id} />);

  return (
    <div className="album py-2 row">
      <div className="d-block justify-content-around align-items-center">
        <div className="row row-cols-auto row-cols-sm-2 row-cols-md-3 g-2 main">
          {arrayList}
        </div>
      </div>
    </div>
  );
};
export default Characters;

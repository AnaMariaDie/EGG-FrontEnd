import React from "react";
// import { Link } from "react-router-dom";

export const Character = ({ array }) => {
  return (
    <div className="card shadow p-2 col-md-4 justify-content-around">
      <div className="d-flex justify-content-around align-items-center">
        <div className="col-5">
          <img
            className="rounded-start img"
            alt="img"
            width="100%"
            src={array.image}
          />
        </div>
        <div className="col-6 text">
          <h3 className="card-title">{array.name}</h3>
          <p className="card-text">{array.gender}</p>
        </div>
      </div>
      <div class="btn-group mt-2">
        <button type="button" class="btn btn-sm btn-outline-danger opacity-50">
          View
        </button>
        <button type="button" class="btn btn-md btn-outline-info opacity-50">
          Edit
        </button>
      </div>
    </div>
  );
};
export default Character;

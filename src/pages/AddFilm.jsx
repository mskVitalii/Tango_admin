import React from "react";
import FilmView from "../components/FilmView";

export default function AddFilm() {
  return (
    <div> 
      <FilmView />
      <button className="btn btn-success" type="button">Сохранить</button>
    </div>
  );
}

import React from "react";

export default function PopUp({ selected, closePopUp }) {
  return (
    <section className="popup">
      <div className="content">
        <h2>
          {selected.Title} <span>({selected.Year})</span>
        </h2>
        <p className="rating">Rating: {selected.imdbRating}</p>
        <div className="plot">
          <img src={selected.Poster} />
          <p>{selected.Plot}</p>
        </div>
        <button className="close" onClick={closePopUp}>close</button>
      </div>
    </section>
  );
}

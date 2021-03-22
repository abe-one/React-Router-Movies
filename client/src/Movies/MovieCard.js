import React from "react";
import { useHistory, useRouteMatch } from "react-router-dom";

export default function MovieCard({ title, director, metascore, stars }) {
  const history = useHistory();
  const routeToHome = () => history.replace("");
  const url = useRouteMatch();

  return (
    <div className="movie-card" onClick={routeToHome}>
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <h3>Actors</h3>

      {stars &&
        stars.map((star) => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      <div className="save-button">Save</div>
    </div>
  );
}

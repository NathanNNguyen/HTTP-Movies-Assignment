import React from 'react';

const MovieCard = props => {
  const { title, director, metascore, stars } = props.movie;

  // console.log(props)
  const handleUpdate = e => {
    e.preventDefault();
    props.history.push(`/update-form/${props.movie.id}`);
  }
  return (
    <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <h3>Actors</h3>

      {stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
      <button onClick={handleUpdate}>Edit</button>
      <button>Delete</button>
    </div >
  );
};

export default MovieCard;

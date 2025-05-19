// MovieDetails.js
import { useParams, useNavigate } from "react-router-dom";

const MovieDetails = ({ movies }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies.find((movie) => movie.id === Number(id));

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className="movie-details">
      <button onClick={() => navigate("/")}>Back to Home</button>
      <h2>{movie.title}</h2>
      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src={movie.trailerLink}
          title={`${movie.title} Trailer`}
          style={{ border: "0" }}
          allowFullScreen
        ></iframe>
      </div>
      <p>{movie.description}</p>
      <p>Rating: {movie.rating}/5</p>
    </div>
  );
};

export default MovieDetails;

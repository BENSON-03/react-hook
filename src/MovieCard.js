import React from "react";
import { Link } from "react-router-dom";
function MovieCard({ movie }) {
  return (
    <div
      style={{
        padding: "16px",
        background: "#fff",
        display: "flex",
      }}
    >
      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "16px",
          maxWidth: "250px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          textAlign: "center",
          background: "#fff",
          margin: "10px",
        }}
      >
        <Link to={`/movies/${movie.id}`}>
          {" "}
          <img
            src={movie.posterUrl}
            alt={movie.title}
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "4px",
              marginBottom: "12px",
            }}
          />
          <h3 style={{ margin: "8px 0" }}>{movie.title}</h3>
        </Link>
        <p style={{ color: "#555", fontSize: "14px" }}>{movie.description}</p>
        <p style={{ fontWeight: "bold", color: "#f39c12" }}>
          Rating: {movie.rating}/5
        </p>
      </div>
    </div>
  );
}
export default MovieCard;

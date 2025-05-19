import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

import MovieList from "./MovieList.js";

import Filter from "./filter";
import "./App.css";
import AddMovie from "./AddMovie.js";
import MovieDetails from "./MovieDetails.js";

function App() {
  let [movies, setMovies] = useState([
    {
      title: "Night",
      description:
        "A suspenseful thriller about a mysterious event that unfolds over the course of one night.",
      posterUrl: "/aleksandr-popov-Vy2Bttl96_E-unsplash.jpg",
      rating: 5,
    },
    {
      title: "Stormseeker",
      description:
        "An epic adventure following a crew as they brave supernatural storms to find a lost civilization.",
      posterUrl: "/stormseeker-rX12B5uX7QM-unsplash.jpg",
      rating: 4,
    },
    {
      title: "Late drive",
      description:
        "A late-night road trip turns into a journey of self-discovery and unexpected encounters.",
      posterUrl: "/valentin-salja-b8BhaRP9Dug-unsplash.jpg",
      rating: 3,
    },
    {
      title: "Illusion",
      description:
        "A mind-bending drama where reality and fantasy blur, challenging the perceptions of everyone involved.",
      posterUrl: "/yiran-ding-Hrd3WPrnGzE-unsplash.jpg",
      rating: 2,
    },
    {
      title: "Red tunnel",
      description:
        "A psychological thriller set in a remote town, where a mysterious red-lit tunnel is rumored to cause hallucinations and reveal hidden fears. As a group of strangers is drawn to the tunnel, they must confront their darkest secrets to escape its grip.",
      posterUrl: "/javier-garcia-J3sivicMj8Y-unsplash.jpg",
      rating: 1,
    },
  ]);
  let [titleFilter, setTitleFilter] = useState("");
  let [rateFilter, setRateFilter] = useState(0);
  let [newTitle, setNewTitle] = useState("");
  let [newDescription, setNewDescription] = useState("");

  let [newPosterURL, setNewPosterURL] = useState("");

  let [newRating, setNewRating] = useState("");
  let filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rating >= rateFilter
  );
  // ading new movie
  let handleAddMovie = (e) => {
    e.preventDefault();

    let newMovie = {
      title: newTitle,
      description: newDescription,
      posterUrl: newPosterURL,
      rating: Number(newRating),
    };
    setMovies([...movies, newMovie]);

    //Reset form

    setNewTitle("");

    setNewDescription("");

    setNewPosterURL("");

    setNewRating("");
  };
  return (
    <Router>
      {" "}
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "24px" }}>
        <nav
          style={{ display: "flex", justifyContent: "flex-end", gap: "3px" }}
        >
          <Link to="/">Home</Link>
          <Link to="/add-movie">add Movie</Link>
        </nav>
        <Routes
          path="/"
          element={
            <>
              <h1
                style={{
                  color: "GrayText",
                  display: "flex",
                  justifyContent: "center",
                  fontSize: "2.5rem",
                  letterSpacing: "2px",
                  marginBottom: "24px",
                }}
              >
                MOVIES
              </h1>

              <Filter
                titleFilter={titleFilter}
                rateFilter={rateFilter}
                setTitleFilter={setTitleFilter}
                setRateFilter={setRateFilter}
              />
            </>
          }
        >
          <Route
            path="/add-movie"
            element={<AddMovie setMovies={setMovies} />}
          />
          <Route
            path="/movies/:id"
            element={<MovieDetails movies={movies} />}
          />
        </Routes>

        <h2 style={{ color: "orangered", marginTop: "32px" }}>
          Add New Movies
        </h2>
        <form
          onSubmit={handleAddMovie}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            background: "#f9f9f9",
            padding: "20px",
            borderRadius: "8px",
            marginBottom: "32px",
          }}
        >
          <input
            type="text"
            placeholder="Title"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            required
            style={{
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
          <input
            type="text"
            placeholder="Description"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            required
            style={{
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
          <input
            type="url"
            placeholder="Poster url"
            value={newPosterURL}
            onChange={(e) => setNewPosterURL(e.target.value)}
            required
            style={{
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
          <input
            type="number"
            placeholder="Rating(0-5)"
            min="0"
            max="5"
            value={newRating}
            onChange={(e) => setNewRating(e.target.value)}
            required
            style={{
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              width: "120px",
            }}
          />
          <button
            type="submit"
            style={{
              background: "orangered",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              padding: "10px 0",
              fontWeight: "bold",
              cursor: "pointer",
              marginTop: "8px",
            }}
          >
            Add Movie
          </button>
        </form>
        <MovieList movies={filteredMovies} />
      </div>
    </Router>
  );
}
export default App;

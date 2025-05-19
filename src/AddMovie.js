// AddMovie.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddMovie = ({ setMovies }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: 0,
    trailerLink: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = {
      id: Date.now(),
      ...formData,
      rating: Math.min(5, Math.max(0, Number(formData.rating))),
    };
    setMovies((prev) => [...prev, newMovie]);
    navigate("/");
  };

  return (
    <div className="add-movie">
      <h2>Add New Movie</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required
        />
        <textarea
          placeholder="Description"
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          required
        />
        <input
          type="url"
          placeholder="Poster URL"
          value={formData.posterURL}
          onChange={(e) =>
            setFormData({ ...formData, posterURL: e.target.value })
          }
          required
        />
        <input
          type="number"
          placeholder="Rating (0-5)"
          min="0"
          max="5"
          value={formData.rating}
          onChange={(e) =>
            setFormData({ ...formData, rating: Number(e.target.value) })
          }
          required
        />
        <input
          type="url"
          placeholder="Trailer Embed URL"
          value={formData.trailerLink}
          onChange={(e) =>
            setFormData({ ...formData, trailerLink: e.target.value })
          }
          required
        />
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
};

export default AddMovie;

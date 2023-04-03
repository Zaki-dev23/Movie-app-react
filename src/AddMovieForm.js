import React, { useState } from 'react';

function AddMovieForm({ addMovie }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [posterURL, setPosterURL] = useState('');
  const [rating, setRating] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    const newMovie = { title, description, posterURL, rating };
    addMovie(newMovie);
    setTitle('');
    setDescription('');
    setPosterURL('');
    setRating('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={event => setDescription(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="posterURL">Poster URL:</label>
        <input
          id="posterURL"
          type="text"
          value={posterURL}
          onChange={event => setPosterURL(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="rating">Rating:</label>
        <input
          id="rating"
          type="number"
          min="1"
          max="10"
          value={rating}
          onChange={event => setRating(event.target.value)}
        />
      </div>
      <button type="submit">Add Movie</button>
    </form>
  );
}

export default AddMovieForm;

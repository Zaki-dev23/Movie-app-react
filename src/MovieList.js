import React, { useState } from 'react';
import MovieCard from './MovieCard';

function MovieList({ movies }) {
  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');

  const filteredMovies = movies.filter(movie => {
    return movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rating >= ratingFilter;
  });

  const handleTitleFilterChange = event => {
    setTitleFilter(event.target.value);
  };

  const handleRatingFilterChange = event => {
    setRatingFilter(event.target.value);
  };

  return (
    <div>
      <div>
        <label htmlFor="title-filter">Title:</label>
        <input
          id="title-filter"
          type="text"
          value={titleFilter}
          onChange={handleTitleFilterChange}
        />
      </div>
      <div>
        <label htmlFor="rating-filter">Rating:</label>
        <input
          id="rating-filter"
          type="number"
          min="1"
          max="10"
          value={ratingFilter}
          onChange={handleRatingFilterChange}
        />
      </div>
      <div>
        {filteredMovies.map(movie => (
          <MovieCard key={movie.title} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default MovieList;
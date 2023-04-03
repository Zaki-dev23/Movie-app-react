import React, { useState } from 'react';
import MovieList from './MovieList';
import AddMovieForm from './AddMovieForm';
import './App.css';

function App() {
  const [movies, setMovies] = useState([
    {
      title: 'The Shawshank Redemption',
      description:
        'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
      posterURL:
        'https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg',
      rating: 9.3,
    },
    {
      title: 'The Godfather',
      description:
        'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
      posterURL:
        'https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg',
      rating: 9.2,
    },
    {
      title: 'The Dark Knight',
      description:
        'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept',
        rating: 9.0,
      },
      ]);
      
      const addMovie = newMovie => {
      setMovies([...movies, newMovie]);
      };
      
      const [titleFilter, setTitleFilter] = useState('');
      const [ratingFilter, setRatingFilter] = useState('');
      
      const filteredMovies = movies.filter(
      movie =>
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rating >= ratingFilter
      );
      
      return (
      <div className="app">
      <h1>My Movie List</h1>
      <AddMovieForm addMovie={addMovie} />
      <div className="filters">
      <label htmlFor="title-filter">Title:</label>
      <input
      id="title-filter"
      type="text"
      value={titleFilter}
      onChange={event => setTitleFilter(event.target.value)}
      />
      <label htmlFor="rating-filter">Rating:</label>
      <select
      id="rating-filter"
      value={ratingFilter}
      onChange={event => setRatingFilter(event.target.value)}
      >
      <option value="">--Select Rating--</option>
      <option value="8">8+</option>
      <option value="7">7+</option>
      <option value="6">6+</option>
      <option value="5">5+</option>
      </select>
      </div>
      <MovieList movies={filteredMovies} />
      </div>
      );
      }
      
      export default App;
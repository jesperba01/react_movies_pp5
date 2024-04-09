import React, { useState } from 'react';
import axios from 'axios';
import { Movie } from './Api';
import MovieCard from './MovieCard'; 

interface SearchProps {
  onAddToFavorites: (movie: Movie) => void;
}

// Search component for searching movies
const Search: React.FC<SearchProps> = ({ onAddToFavorites }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Function to handle movie search
  const handleSearch = async () => {
    if (!searchQuery.trim()) {
      return;
    }
    
    try {
      setIsLoading(true);
      // Fetch movies based on search query
      const response = await axios.get<{ results: Movie[] }>(`https://api.themoviedb.org/3/search/movie?api_key=4ba04b36da1b0f7da8622918c9908ef8&query=${searchQuery}`);
      setSearchResults(response.data.results);
    } catch (error) {
      console.error('Error searching for movies:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Function to handle adding a movie to favorites
  const handleAddToFavorites = (movie: Movie) => {
    onAddToFavorites(movie);
  };

  return (
    <div>
      {/* Search input and button */}
      <div className="container mt-4">
        <div className="text-center mb-4">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search movies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              className="btn btn-primary"
              type="button"
              onClick={handleSearch}
              disabled={isLoading}
            >
              {isLoading ? 'Searching...' : 'Search'}
            </button>
          </div>
          {/* Display search results */}
          <div className="row">
            {searchResults.map((movie) => (
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={movie.id}>
                <MovieCard
                  movie={movie}
                  isFavorite={false}
                  onAddToFavorites={() => handleAddToFavorites(movie)}
                  onRemoveFromFavorites={() => {}}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
import React from 'react';
import Card from 'react-bootstrap/Card';
import Pie from './Pie';
import { Movie } from './Api';
import './MovieCard.css';
import { faHeart, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Interface for MovieCard component props
interface MovieCardProps {
  movie: Movie;
  isFavorite: boolean;
  onAddToFavorites: (movie: Movie) => void;
  onRemoveFromFavorites: (movieId: number) => void;
}

// Component for displaying a movie card
const MovieCard: React.FC<MovieCardProps> = ({ movie, isFavorite, onAddToFavorites, onRemoveFromFavorites }) => {
  const handleClick = () => {
    if (isFavorite) {
      handleRemoveFromFavorites();
    } else {
      handleAddToFavorites();
    }
  };

  const handleAddToFavorites = () => {
    onAddToFavorites(movie);
  };

  const handleRemoveFromFavorites = () => {
    onRemoveFromFavorites(movie.id);
  };

  return (
    <Card className="shadow movie-card">
      <div className="movieImageContainer">
        {movie.poster_path && (
          <img
            className="movieImage img-fluid"
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.name || movie.title} Poster`}
          />
        )}
        <Pie className="pieOverlay" percentage={movie.vote_average * 10} />
        <button onClick={handleClick} className="heart-overlay">
          {isFavorite ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faHeart} />}
        </button>
      </div>
      <Card.Body className="movieContainer-p">
        <Card.Title>{movie.name || movie.title}</Card.Title>
        <Card.Text>{movie.release_date || movie.first_air_date}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
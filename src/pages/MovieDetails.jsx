import { Link, useParams } from 'react-router-dom';
import { useSearchMovie } from '../hooks/trendingMoviesHook';
import { useMovieDetails } from '../hooks/MoviesDetails';
import { getMoviesDetails, getMoviesCredits, getMoviesReviews } from '../API';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const { movie, error, isLoading } = useMovieDetails(movieId);
  return (
    <>
      <button type="button">Go back</button>
      <div>
        <img src={movie.backdrop_path} alt={movie.title} />
        <h1>
          {movie.title}({movie.release_date})
        </h1>
        <p>User score: {movie.vote_average}</p>
        <h2>Overview</h2>
        <p>{movie.overview}</p>
        <h3>Genres</h3>
        {/* <p>{movie.genres.map(genre => genre.name).join(', ')}</p> */}
        <div>
          <p>Additional information</p>
          {/* <a href={getMoviesCredits}>Cast</a> */}
          {/* <a href={getMoviesReviews}>Reviews</a> */}
        </div>
      </div>
    </>
  );
};

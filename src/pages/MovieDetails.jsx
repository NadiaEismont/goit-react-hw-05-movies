import { Link, useParams } from 'react-router-dom';
import { useSearchMovie } from '../hooks/trendingMoviesHook';
import { useMovieDetails } from '../hooks/MoviesDetails';
import { getMoviesDetails, getMoviesCredits, getMoviesReviews } from '../API';
import { Outlet, useLocation } from 'react-router-dom';
import { Pane, Text, Heading, majorScale } from 'evergreen-ui';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const { movie, error, isLoading } = useMovieDetails(movieId);
  return (
    <>
      <Link to={location.state.from}>Go Back</Link>
      <Pane>
        <img src={movie.backdrop_path} alt={movie.title} />
        <Heading>
          {movie.title}({movie.release_date})
        </Heading>
        <Text>User score: {movie.vote_average}</Text>
        <h2>Overview</h2>
        <Text>{movie.overview}</Text>
        <h3>Genres</h3>
        {/* <p>{movie.genres.map(genre => genre.name).join(', ')}</p> */}
        <div>
          <Text>Additional information</Text>
          <Link to="cast" state={{ from: location }}>
            Cast
          </Link>
          <Link to="reviews" state={{ from: location }}>
            Reviews
          </Link>
          <Outlet />
        </div>
      </Pane>
    </>
  );
};

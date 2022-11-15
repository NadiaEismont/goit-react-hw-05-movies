import { Link, useParams } from 'react-router-dom';
import { useSearchMovie } from '../hooks/trendingMoviesHook';
import { useMovieDetails } from '../hooks/MoviesDetails';
import { getMoviesDetails, getMoviesCredits, getMoviesReviews } from '../API';
import { Outlet, useLocation } from 'react-router-dom';
import { Pane, Text, Heading, HandLeftIcon, Icon } from 'evergreen-ui';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const { movie, error, isLoading } = useMovieDetails(movieId);

  return (
    <>
      <Link to={location.state ? location.state.from : '/'}>
        <Icon icon={HandLeftIcon} size={30} />
        <Text size={600}>Go Back</Text>
      </Link>
      <Pane>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt=""
        />
        <Heading size={400}>
          {movie.title}({movie.release_date})
        </Heading>
        <Text>User score: {movie.vote_average}</Text>
        <Heading size={400}>Overview</Heading>
        <Text>{movie.overview}</Text>
        <Heading size={400}>Genres</Heading>
        <p>{movie.genres && movie.genres.map(gen => gen.name + ' ')}</p>
        <Pane>
          <Heading size={700}>Additional information</Heading>
          <Link to="cast" state={{ from: location }}>
            Cast
          </Link>
          <Link to="reviews" state={{ from: location }}>
            Reviews
          </Link>
          <Outlet />
        </Pane>
      </Pane>
    </>
  );
};

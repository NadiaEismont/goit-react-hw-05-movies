import { Link, useParams } from 'react-router-dom';
import { useMovieDetails } from '../hooks/MoviesDetails';
import { Outlet, useLocation } from 'react-router-dom';
import { Pane, Text, Heading, HandLeftIcon, Icon } from 'evergreen-ui';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const { movie } = useMovieDetails(movieId);

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
        <Heading size={600}>
          {movie.title}({movie.release_date})
        </Heading>
        <Text size={600}>User score: {movie.vote_average}</Text>
        <Heading size={600}>Overview</Heading>
        <Text size={600}>{movie.overview}</Text>
        <Heading size={600}>Genres</Heading>
        <Text size={600} marginBottom={80}>
          {movie.genres && movie.genres.map(gen => gen.name + ', ')}
        </Text>
        <Pane>
          <Heading size={700}>Additional information</Heading>
          <Link to="cast" state={{ from: location?.state?.from }}>
            <Text size={600} marginRight={30}>
              Cast
            </Text>
          </Link>
          <Link to="reviews" state={{ from: location?.state?.from }}>
            <Text size={600} marginRight={30}>
              Reviews
            </Text>
          </Link>
          <Outlet />
        </Pane>
      </Pane>
    </>
  );
};

export default MovieDetails;

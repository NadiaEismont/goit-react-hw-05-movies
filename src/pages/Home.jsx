import { Link } from 'react-router-dom';
import { useFetchMovies } from '../hooks/trendingMoviesHook';
import Loader from 'components/Loader';
import { useLocation } from 'react-router-dom';
import { Pane, Text, Heading } from 'evergreen-ui';

export const Home = () => {
  const { movies, error, isLoading } = useFetchMovies();
  const location = useLocation();
  return (
    <main>
      <Heading size={900}>Trending today</Heading>
      {error && <p textAlign="center"> OOOPS! Something went wrong! </p>}
      {isLoading && <Loader />}
      <ul>
        {movies.map(({ id, title }) => (
          <li>
            <Link to={`movies/${id}`} state={{ from: location }}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

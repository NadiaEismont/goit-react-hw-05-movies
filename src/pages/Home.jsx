import { Link } from 'react-router-dom';
import { useFetchMovies } from '../hooks/trendingMoviesHook';
import Loader from 'components/Loader';

export const Home = () => {
  const { movies, error, isLoading } = useFetchMovies();
  return (
    <main>
      <h1>Trending today</h1>
      {error && <p textAlign="center"> OOOPS! Something went wrong! </p>}
      {isLoading && <Loader />}
      <ul>
        {movies.map(({ id, title }) => (
          <li>
            <Link to={`movies/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

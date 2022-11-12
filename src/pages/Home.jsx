import { Link } from 'react-router-dom';
import { useFetchMovies } from '../hooks/trendingMoviesHook';

export const Home = () => {
  const { movies, error, isLoading } = useFetchMovies();
  return (
    <main>
      <h1>Home</h1>
      {error && <p textAlign="center"> OOOPS! Something went wrong! </p>}
      {/* {isLoading && <Loader />} */}
      <ul>
        {movies.map(({ id, title }) => (
          <li>
            <Link to={`${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

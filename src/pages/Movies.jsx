import Loader from 'components/Loader';
import Searchbar from 'components/SearchBar';
import { useSearchMovie } from 'hooks/searchMoviesHook';
import {
  Routes,
  Route,
  Navigate,
  Link,
  useSearchParams,
} from 'react-router-dom';

export const Movies = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');
  const { movies, error, isLoading } = useSearchMovie(query);

  return (
    <>
      <Searchbar
      // onSubmit={handleSubmit}
      ></Searchbar>
      {isLoading && <Loader />}
      {movies && !isLoading && (
        <ul>
          {movies.map(({ id, title }) => (
            <li>
              <Link to={`movies/${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
      )}
      {error && <div>{error}</div>}
    </>
  );
};

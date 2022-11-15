import Loader from 'components/Loader';
import Searchbar from 'components/SearchBar';
import { useSearchMovie } from 'hooks/searchMoviesHook';
import { Link, useSearchParams, useLocation } from 'react-router-dom';

export const Movies = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q');
  const { movies, error, isLoading } = useSearchMovie(query);
  const handleSubmit = async evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const input = form.elements.search.value;
    setSearchParams({ q: input });
    form.reset();
  };
  return (
    <>
      <Searchbar onSubmit={handleSubmit}></Searchbar>
      {isLoading && <Loader />}
      {movies && !isLoading && (
        <ul>
          {movies.map(({ id, title }) => (
            <li>
              <Link to={`movies/${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
      {error && <div>{error}</div>}
    </>
  );
};

import { Link } from 'react-router-dom';
import { useFetchMovies } from '../hooks/trendingMoviesHook';
import Loader from 'components/Loader';
import { useLocation } from 'react-router-dom';
import { Heading, UnorderedList, ListItem } from 'evergreen-ui';

const Home = () => {
  const { movies, error, isLoading } = useFetchMovies();
  const location = useLocation();
  return (
    <main>
      <Heading size={900} is="h1">
        Trending today
      </Heading>
      {error && <p textAlign="center"> OOOPS! Something went wrong! </p>}
      {isLoading && <Loader />}
      <UnorderedList>
        {movies.map(({ id, title }) => (
          <ListItem size={600} key={id}>
            <Link to={`/movies${id}`} state={{ from: location }}>
              {title}
            </Link>
          </ListItem>
        ))}
      </UnorderedList>
    </main>
  );
};

export default Home;

import { Routes, Route, Navigate, Link } from 'react-router-dom';
import { Home } from 'pages/Home';
import { MovieDetails } from 'pages/MovieDetails';
import { Movies } from 'pages/Movies';
import { Cast } from './Cast';
import { Reviews } from './Reviews';
import { Icon, HomeIcon, Text, FilmIcon, minorScale } from 'evergreen-ui';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <div>
        <nav>
          <Link to="/">
            <Icon icon={HomeIcon} size={30} />{' '}
            <Text size={minorScale(2)} marginRight={30}>
              Home
            </Text>
          </Link>
          <Link to="/movies">
            <Icon icon={FilmIcon} size={30} />
            <Text size={minorScale(3)}>Movies</Text>
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </div>
  );
};

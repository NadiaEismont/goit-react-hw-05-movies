import { Routes, Route, Navigate, Link } from 'react-router-dom';
import { Home } from 'pages/Home';
import { MovieDetails } from 'pages/MovieDetails';
import { Movies } from 'pages/Movies';
import { Cast } from './Cast';
import { Reviews } from './Reviews';
import { Icon, HomeIcon, Text, FilmIcon, minorScale } from 'evergreen-ui';

import styled from '@emotion/styled';

const MyLink = styled(Link)`
  &:hover {
    color: #fff !important;
  }
`;

export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <div>
        <nav>
          <MyLink to="/">
            <Icon icon={HomeIcon} size={30} />{' '}
            <Text size={minorScale(2)} marginRight={30}>
              Home
            </Text>
          </MyLink>
          <Link to="/movies">
            <Icon icon={FilmIcon} marginRight={20} size={30} />
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

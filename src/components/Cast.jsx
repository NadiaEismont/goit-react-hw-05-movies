import { useMovieCredits } from '../hooks/MovieCredits';
import { useParams } from 'react-router-dom';

export const Cast = () => {
  const { movieId } = useParams();
  const { credits, error, isLoading } = useMovieCredits(movieId);
  return (
    <ul>
      {credits.map(({ name, character, profile_path }) => (
        <li>
          <img href={profile_path} />
          <h3>{name}</h3>
          <p>{character}</p>
        </li>
      ))}
    </ul>
  );
};

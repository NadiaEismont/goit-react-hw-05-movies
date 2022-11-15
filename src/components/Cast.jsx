import { useMovieCredits } from '../hooks/MovieCredits';
import { useParams } from 'react-router-dom';
import { Text, Heading, UnorderedList, ListItem } from 'evergreen-ui';
export const Cast = () => {
  const { movieId } = useParams();
  const { cast, error, isLoading } = useMovieCredits(movieId);
  return (
    <UnorderedList>
      {cast &&
        cast.map(({ name, character, profile_path }) => (
          <ListItem>
            <img src={`https://image.tmdb.org/t/p/w500${profile_path}`} />
            <Heading size={500}>{name}</Heading>
            <Text>{character}</Text>
          </ListItem>
        ))}
    </UnorderedList>
  );
};

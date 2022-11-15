import { useMovieCredits } from '../hooks/MovieCredits';
import { useParams } from 'react-router-dom';
import { Text, Heading, UnorderedList, ListItem } from 'evergreen-ui';
export const Cast = () => {
  const { movieId } = useParams();
  const { credits, error, isLoading } = useMovieCredits(movieId);
  return (
    <UnorderedList>
      {credits.map(({ name, character, profile_path }) => (
        <ListItem>
          <img href={profile_path} />
          <Heading size={500}>{name}</Heading>
          <Text>{character}</Text>
        </ListItem>
      ))}
    </UnorderedList>
  );
};

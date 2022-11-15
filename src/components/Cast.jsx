import { useMovieCredits } from '../hooks/MovieCredits';
import { useParams } from 'react-router-dom';
import { Text, Heading, UnorderedList, ListItem } from 'evergreen-ui';
export const Cast = () => {
  const { movieId } = useParams();
  const { cast } = useMovieCredits(movieId);
  return (
    <UnorderedList>
      {cast &&
        cast.map(({ id, name, character, profile_path }) => (
          <ListItem key={id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${profile_path}`}
              alt=""
            />
            <Heading size={600}>{name}</Heading>
            <Text>{character}</Text>
          </ListItem>
        ))}
    </UnorderedList>
  );
};

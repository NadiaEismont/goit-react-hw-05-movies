import { useFetchMovieReviews } from '../hooks/getMoviesReviewsHook';
import { useParams } from 'react-router-dom';
import { Text, Heading, UnorderedList, ListItem } from 'evergreen-ui';

export const Reviews = () => {
  const { movieId } = useParams();
  const { reviews, error, isLoading } = useFetchMovieReviews(movieId);
  return (
    <UnorderedList>
      {reviews.map(({ author, content }) => (
        <ListItem>
          <Heading size={500}>Author: {author}</Heading>
          <Text>{content}</Text>
        </ListItem>
      ))}
      {/* // .length !== 0 ?? <p>Sorry, we haven't reviews yet</p>} */}
    </UnorderedList>
  );
};

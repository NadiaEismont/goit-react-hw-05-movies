import { useFetchMovieReviews } from '../hooks/getMoviesReviewsHook';
import { useParams } from 'react-router-dom';
import { Text, Heading, UnorderedList, ListItem } from 'evergreen-ui';

const Reviews = () => {
  const { movieId } = useParams();
  const { reviews } = useFetchMovieReviews(movieId);

  return (
    <UnorderedList>
      {reviews.map(({ id, author, content }) => (
        <ListItem key={id}>
          <Heading size={800}>Author: {author}</Heading>
          <Text size={600}>{content}</Text>
        </ListItem>
      ))}
      {reviews.length === 0 && <p>Sorry, we haven't reviews yet</p>}
    </UnorderedList>
  );
};

export default Reviews;

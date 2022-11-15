import { fetchMovieReviews } from '../hooks/getMoviesReviewsHook';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const { movieId } = useParams();
  const { reviews, error, isLoading } = fetchMovieReviews(movieId);
  return (
    <ul>
      {reviews.map(({ author, content }) => (
        <li>
          <h3>Author: {author}</h3>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};

import { useEffect, useState } from 'react';
import { getMoviesReviews } from 'API'
import PropTypes from 'prop-types';

export const useFetchMovieReviews = (movieId) => {
    const [reviews, setReviews] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsloading] = useState(false);

    useEffect(() => {
        setIsloading(true);

        const fetchData = async () => {
            try {
                const data = await getMoviesReviews(movieId);
                setReviews(data);
            } catch (error) {
                console.error(error);
                setError(error.message);
            } finally {
                setIsloading(false);
            }
        };

        fetchData();
    }, [movieId]);

    return { reviews, error, isLoading };
};

useFetchMovieReviews.propTypes = {
    movieId: PropTypes.number.isRequired,
};
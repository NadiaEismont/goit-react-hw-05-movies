import { useEffect, useState } from 'react';
import { getMoviesCredits } from 'components/service/api'
import PropTypes from 'prop-types';


export const useMovieCredits = (movieId) => {
    const [cast, setCast] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsloading] = useState(false);

    useEffect(() => {
        setIsloading(true);

        const fetchData = async () => {
            try {
                const data = await getMoviesCredits(movieId);
                setCast(data);
            } catch (error) {
                console.error(error);
                setError(error.message);
            } finally {
                setIsloading(false);
            }
        };

        fetchData();
    }, [movieId]);

    return { cast, error, isLoading };
};

useMovieCredits.propTypes = {
    movieId: PropTypes.integer.isRequired,
};
import { useEffect, useState } from 'react';
import { getMoviesDetails } from 'API'


export const useMovieDetails = (movieId) => {
    const [movie, setMovie] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsloading] = useState(false);

    useEffect(() => {
        setIsloading(true);

        const fetchData = async () => {
            try {
                const data = await getMoviesDetails(movieId);
                setMovie(data);
            } catch (error) {
                console.error(error);
                setError(error.message);
            } finally {
                setIsloading(false);
            }
        };

        fetchData();
    }, []);

    return { movie, error, isLoading };
};
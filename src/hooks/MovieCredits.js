import { useEffect, useState } from 'react';
import { getMoviesCredits } from 'API'


export const useMovieCredits = (movieId) => {
    const [movie, setMovie] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsloading] = useState(false);

    useEffect(() => {
        setIsloading(true);

        const fetchData = async () => {
            try {
                const data = await getMoviesCredits(movieId);
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
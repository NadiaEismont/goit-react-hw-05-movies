import { useEffect, useState } from 'react';
import { getMoviesCredits } from 'API'


export const useMovieCredits = (movieId) => {
    const [cast, setCast] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsloading] = useState(false);

    useEffect(() => {
        setIsloading(true);

        const fetchData = async () => {
            try {
                const data = await getMoviesCredits(movieId);
                console.log(data);
                setCast(data);
            } catch (error) {
                console.error(error);
                setError(error.message);
            } finally {
                setIsloading(false);
            }
        };

        fetchData();
    }, []);

    return { cast, error, isLoading };
};
import { useEffect, useState } from 'react';
import { searchMovies } from 'API'


export const useSearchMovie = () => {
    const [movie, setMovie] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsloading] = useState(false);

    useEffect(() => {
        setIsloading(true);

        const fetchData = async () => {
            try {
                const data = await searchMovies();
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
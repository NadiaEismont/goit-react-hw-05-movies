import { useEffect, useState, } from 'react';
import { searchMovies } from 'components/service/api'

export const useSearchMovie = (query) => {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsloading] = useState(false);

    useEffect(() => {
        setIsloading(true);

        const fetchData = async () => {
            try {
                const data = await searchMovies(query);
                setMovies(data);
            } catch (error) {
                console.error(error);
                setError(error.message);
            } finally {
                setIsloading(false);
            }
        };

        fetchData();
    }, [query]);

    return { movies, error, isLoading };
};
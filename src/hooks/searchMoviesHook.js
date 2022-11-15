import { useEffect, useState, } from 'react';
import { searchMovies } from 'API'
import { useSearchParams, useLocation } from 'react-router-dom';

export const useSearchMovie = (query) => {
    const [movie, setMovie] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsloading] = useState(false);

    useEffect(() => {
        setIsloading(true);

        const fetchData = async () => {
            try {
                const data = await searchMovies(query);
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
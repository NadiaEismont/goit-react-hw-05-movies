import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const key = '92dbc0754448974a4268873a5b560372';

export const fetchMovies = async () => {
    const response = await axios.get(
        `/trending/movie/day?api_key=${key}`,

    );
    console.log(response)
    return response.data.results;
}

export const searchMovies = async (query) => {
    const response = await axios.get(
        `/search/movie/?api_key=${key}&query=${query}&page=1`,
    );
    return response.data.results;
}

export const getMoviesDetails = async (movie_id) => {
    const response = await axios.get(
        `/movie/${movie_id}?api_key=${key}&page=1`,
    );
    return response.data;
}

export const getMoviesCredits = async (movie_id) => {
    const response = await axios.get(
        `/movie/${movie_id}/credits?api_key=${key}&page=1`,
    );
    return response.data.results;
}

export const getMoviesReviews = async (movie_id) => {
    const response = await axios.get(
        `/movie/${movie_id}/reviews?api_key=${key}&page=1`,
    );
    return response.data.results;
}
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


import axios from 'axios';
const API_KEY = '09c19d7ce5a3381da6cc74d65419a492';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.params = {
  api_key: API_KEY,
  language: 'en-US',
};

export const getTrending = async () => {
  const response = await axios.get('trending/all/day');
  return response.data;
};
export const getMovieDetails = async id => {
  const response = await axios.get(`movie/${id}`);
  return response.data;
};
export const getActorsDetails = async id => {
  const response = await axios.get(`movie/${id}/credits`);
  return response.data; //get credits
};
export const getMovieReviews = async id => {
  const response = await axios.get(`movie/${id}/reviews`);
  return response.data; //get reviews
};
export const searchMovie = async query => {
  const response = await axios.get(
    `search/movie?query=${query}&include_adult=false&page=1`
  ); // get include adult
  return response.data;
};

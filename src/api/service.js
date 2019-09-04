import axios from 'axios';

axios.defaults.params = {
	'api_key': 'd1652866a0537f066c5080d3e73c1c55'
};

export const Client = axios.create({
	baseURL: 'https://api.themoviedb.org/3/',
	crossDomain: true,
	headers: { 'Content-Type': 'application/json' }
});

export const getMovie = (movieId) => Client.get(`movie/${movieId}`, { params: { 'api_key': 'd1652866a0537f066c5080d3e73c1c55' } });

export const getDiscover = () => Client.get('discover/movie', { params: { 'api_key': 'd1652866a0537f066c5080d3e73c1c55' } });
import axios from "axios";

const API_KEY = '44429769-5cdd23654e6c944851dfe4e78';

export function fetchImages(query, page) {
  axios.defaults.headers = ['Access-Control-Allow-Origin'];

  return axios({
    method: 'get',
    url: `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&per_page=100&page=${page}`,
    responseType: 'json',
  });
}

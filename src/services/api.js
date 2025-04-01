import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com/';
const API_ACCESS_KEY = 'JyWenOpLSfUPKLaUAYDW3GJ8AubwbN6A8dNOfTrM8rQ';

export default async function getImages (searchedQuery, currentPage = 1, perPage = 12){
  const axiosOptions = {
    headers: {
      Authorization: `Client-ID ${API_ACCESS_KEY}`,
    },
    params: {
      query: searchedQuery,
      page: currentPage,
      per_page: perPage,
    },
  };
  const response = await axios.get('search/photos', axiosOptions);
  return {
    images: response.data.results,
    total: response.data.total,
  };
};
import axios from 'axios';
import { Data } from '../types/data';

axios.defaults.baseURL = 'https://api.unsplash.com/';
const API_ACCESS_KEY = 'JyWenOpLSfUPKLaUAYDW3GJ8AubwbN6A8dNOfTrM8rQ';

export default async function getImages(
  searchedQuery: string,
  currentPage: number = 1,
  perPage: number = 12): Promise<Data> {
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
  return response.data;
};
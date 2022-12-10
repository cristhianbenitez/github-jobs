import axios from 'axios';

const apiKey =
  'f4803975c904d66a3bb0add869c1aed92a948ef2837242d2f01cc2e8a2429f23';
const baseUrl = 'https://cors-anywhere.herokuapp.com/https://serpapi.com/';

const jobsApi = axios.create({ baseURL: baseUrl });
jobsApi.interceptors.request.use((config) => {
  config.params = {
    engine: 'google_jobs',
    api_key: apiKey,
    ...config.params
  };
  return config;
});

export const locationApi = axios.create({ baseURL: baseUrl });

export default jobsApi;

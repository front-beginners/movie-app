import axios from 'axios'

const BASE_URL = 'https://challenge.outsera.tech/api/movies'
export const axiosInstance = axios.create({ baseURL: BASE_URL })

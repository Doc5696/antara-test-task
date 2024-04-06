import axios from 'axios'

import apiConfig from 'src/config/api'

const axiosInstance = axios.create({
  baseURL: apiConfig.apiBase,
})

export default axiosInstance

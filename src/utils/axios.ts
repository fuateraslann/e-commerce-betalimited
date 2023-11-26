import axios from 'axios'

const baseURL = process.env.REACT_APP_BASE_URL
const axiosInstance = axios.create({
  baseURL,
})

axiosInstance.interceptors.request.use(
  async (config) => {
    const sessionId = await getSessionId()
    config.headers['Session-ID'] = sessionId
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

const getSessionId = async () => {
  const response = await axios.get(baseURL + '/createsession')
  return response.data
}

export default axiosInstance

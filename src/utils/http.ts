import toast from 'react-hot-toast'
import axios, { AxiosError, AxiosInstance, HttpStatusCode } from 'axios'

const http: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

http.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    if (error instanceof AxiosError) {
      if (error.response?.status !== HttpStatusCode.UnprocessableEntity) {
        const message = error.response?.data.message || error.message
        toast.error(message, { id: 'axios-error' })
      }
    }
    return Promise.reject(error)
  }
)

export default http

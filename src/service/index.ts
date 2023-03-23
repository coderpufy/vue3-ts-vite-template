import { BASE_URL, TIME_OUT } from './config'
import CYRequest from './request'

const cyRequest = new CYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})

export default cyRequest

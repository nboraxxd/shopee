import { AuthRequestBody, AuthResponse } from '@/types/auth.type'
import http from '@/utils/http'

const authApi = {
  register: (body: AuthRequestBody) => http.post<AuthResponse, AuthResponse>('/register', body),

  login: (body: AuthRequestBody) => http.post<AuthResponse, AuthResponse>('/login', body),
}

export default authApi

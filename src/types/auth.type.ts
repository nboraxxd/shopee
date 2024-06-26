import { User } from '@/types/user.type'
import { SuccessResponse } from '@/types/utils.type'

export type AuthRequestBody = {
  email: string
  password: string
}

export type AuthResponse = SuccessResponse<{
  access_token: string
  expires: number
  refresh_token: string
  expires_refresh_token: number
  user: User
}>

import { useMutation } from '@tanstack/react-query'

import authApi from '@/apis/auth.api'

export function useRegister() {
  return useMutation({ mutationFn: authApi.register })
}

export function useLogin() {
  return useMutation({ mutationFn: authApi.login })
}

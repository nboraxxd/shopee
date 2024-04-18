import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { ErrorResponse } from '@/types/utils.type'
import { isAxiosUnprocessableEntityError } from '@/utils/error'
import { useLogin } from '@/lib/react-query'
import { LoginSchemaType, loginSchema } from '@/lib/schemas/auth.schema'
import { Input } from '@/components/shared/input'
import { Button } from '@/components/shared/button'

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const { mutate } = useLogin()

  function onValid(data: LoginSchemaType) {
    const { email, password } = data

    mutate(
      { email, password },
      {
        onSuccess: (data) => {
          console.log(data)
        },
        onError: (error) => {
          if (isAxiosUnprocessableEntityError<ErrorResponse<LoginSchemaType>>(error)) {
            const formErrors = error.response?.data.data

            if (formErrors) {
              Object.keys(formErrors).forEach((key) => {
                const formError = formErrors[key as keyof typeof formErrors]
                setError(key as keyof LoginSchemaType, {
                  type: 'server',
                  message: formError,
                })
              })
            }
          }
        },
      }
    )
  }

  return (
    <form noValidate onSubmit={handleSubmit(onValid)}>
      <p className="text-xl">Đăng nhập</p>
      {/* Email */}
      <Input
        register={register('email')}
        errorMessage={errors.email?.message}
        type="email"
        placeholder="Email"
        autoComplete="email"
        classNameWrapper="mt-8"
        classNameInput="py-3 pl-3 pr-8 focus:border-gray-400"
      />
      {/* Password */}
      <Input
        register={register('password')}
        errorMessage={errors.password?.message}
        placeholder="Password"
        type="password"
        autoComplete="new-password"
        classNameWrapper="relative mt-2"
        classNameInput="py-3 pl-3 pr-8 focus:border-gray-400"
        classNameEye="absolute right-2 top-3 size-5 cursor-pointer text-gray-500"
      />
      {/* Button */}
      <Button className="mt-2 min-h-10 w-full px-2.5 text-sm uppercase">Đăng nhập</Button>
    </form>
  )
}

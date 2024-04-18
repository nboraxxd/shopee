import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { ErrorResponse } from '@/types/utils.type'
import { isAxiosUnprocessableEntityError } from '@/utils/error'
import { useRegister } from '@/lib/react-query'
import { RegisterSchemaType, registerSchema } from '@/lib/schemas/auth.schema'
import { Input } from '@/components/shared/input'
import { Button } from '@/components/shared/button'

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<RegisterSchemaType>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: '',
      password: '',
      confirm_password: '',
    },
  })

  const { mutate } = useRegister()

  function onValid(data: RegisterSchemaType) {
    const { email, password } = data

    mutate(
      { email, password },
      {
        onSuccess: (data) => {
          console.log(data)
        },
        onError: (error) => {
          if (isAxiosUnprocessableEntityError<ErrorResponse<Omit<RegisterSchemaType, 'confirm_password'>>>(error)) {
            const formErrors = error.response?.data.data

            if (formErrors) {
              Object.keys(formErrors).forEach((key) => {
                const formError = formErrors[key as keyof typeof formErrors]
                setError(key as keyof Omit<RegisterSchemaType, 'confirm_password'>, {
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
      <p className="text-xl">Đăng ký</p>
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
      {/* Confirm password */}
      <Input
        register={register('confirm_password')}
        errorMessage={errors.confirm_password?.message}
        placeholder="Confirm password"
        type="password"
        autoComplete="new-password"
        classNameWrapper="relative mt-2"
        classNameInput="py-3 pl-3 pr-8 focus:border-gray-400"
        classNameEye="absolute right-2 top-3 size-5 cursor-pointer text-gray-500"
      />
      {/* Button */}
      <Button className="mt-2 min-h-10 w-full px-2.5 text-sm uppercase">Đăng ký</Button>
    </form>
  )
}

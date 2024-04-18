import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { registerSchema } from '@/lib/schemas/auth.schema'
import { Input } from '@/components/shared/input'
import { Button } from '@/components/shared/button'

export default function RegisterForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: '',
      password: '',
      confirm_password: '',
    },
  })

  function onValid(data: z.infer<typeof registerSchema>) {
    console.log(data)
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
      <Button className="mt-2 w-full text-sm uppercase">Đăng ký</Button>
    </form>
  )
}

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { loginSchema } from '@/lib/schemas/auth.schema'
import { Input } from '@/components/shared/input'
import { Button } from '@/components/shared/button'

export default function LoginForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  function onValid(data: z.infer<typeof loginSchema>) {
    console.log(data)
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
      <Button className="mt-2 w-full text-sm uppercase">Đăng nhập</Button>
    </form>
  )
}

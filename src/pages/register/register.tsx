import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

import { PATH } from '@/constants/path'
import { Button } from '@/components/shared/button'
import { Input } from '@/components/shared/input'

export default function Register() {
  return (
    <div className="bg-primary">
      <Helmet>
        <title>Đăng ký | Shopee clone</title>
        <meta name="description" content="Đăng ký tài khoản để vào dự án Shopee Clone" />
      </Helmet>

      <div className="container">
        <div className="grid grid-cols-1 py-12 lg:grid-cols-5 lg:py-32 lg:pr-10">
          <div className="lg:col-span-2 lg:col-start-4">
            <form className="rounded bg-white p-10 shadow-sm" noValidate>
              <p className="text-xl">Đăng ký</p>
              {/* Email */}
              <Input
                placeholder="Email"
                autoComplete="email"
                classNameWrapper="mt-8"
                classNameInput="py-3 pl-3 pr-8 focus:border-gray-400"
              />

              {/* Password */}
              <Input
                placeholder="Password"
                type="password"
                autoComplete="new-password"
                classNameWrapper="relative mt-2"
                classNameInput="py-3 pl-3 pr-8 focus:border-gray-400"
                classNameEye="absolute right-2 top-3 size-5 cursor-pointer text-gray-500"
              />

              {/* Confirm password */}
              <Input
                placeholder="Confirm password"
                type="password"
                autoComplete="new-password"
                classNameWrapper="relative mt-2"
                classNameInput="py-3 pl-3 pr-8 focus:border-gray-400"
                classNameEye="absolute right-2 top-3 size-5 cursor-pointer text-gray-500"
              />

              {/* Button */}
              <Button className="mt-2 w-full text-sm uppercase">Đăng ký</Button>
              {/* Redirect link */}
              <div className="mt-8 flex items-center justify-center">
                <span className="text-gray-400">Bạn đã có tài khoản?</span>
                <Link to={PATH.LOGIN} className="ml-1 text-primary">
                  Đăng nhập
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

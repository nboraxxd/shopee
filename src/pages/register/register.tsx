import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

import { PATH } from '@/constants/path'
import { RegisterForm } from '@/components/shared/form'

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
            <div className="rounded bg-white p-10 shadow-sm">
              <RegisterForm />
              {/* Redirect link */}
              <div className="mt-8 flex items-center justify-center">
                <span className="text-gray-400">Bạn đã có tài khoản?</span>
                <Link to={PATH.LOGIN} className="ml-1 text-primary">
                  Đăng nhập
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

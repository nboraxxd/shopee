import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

import { PATH } from '@/constants/path'
import { LoginForm } from '@/components/shared/form'

export default function Login() {
  return (
    <div className="bg-primary">
      <Helmet>
        <title>Đăng nhập | Shopee clone</title>
        <meta name="description" content="Đăng nhập vào dự án Shopee Clone" />
      </Helmet>

      <div className="container">
        <div className="grid grid-cols-1 py-12 lg:grid-cols-5 lg:py-32 lg:pr-10">
          <div className="lg:col-span-2 lg:col-start-4">
            <div className="rounded bg-white p-10 shadow-sm">
              <LoginForm />

              {/* Redirect Link */}
              <div className="mt-8 flex items-center justify-center">
                <span className="text-gray-400">Bạn mới biết đến Shopee?</span>
                <Link to={PATH.REGISTER} className="ml-1 text-primary">
                  Đăng ký
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

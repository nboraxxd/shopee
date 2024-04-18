import { Link, useMatch } from 'react-router-dom'
import { PATH } from '@/constants/path'

export default function AuthHeader() {
  const isRegister = useMatch(PATH.REGISTER)

  return (
    <header className="py-5">
      <div className="container">
        <nav className="flex items-end justify-center gap-4 lg:justify-start">
          <Link to={PATH.HOMEPAGE}>
            <img src="/icons/logo.png" alt="Shopee logo" className="filter-primary h-11" />
          </Link>
          <p className="hidden text-2xl text-[#222] lg:block">{isRegister ? 'Đăng ký' : 'Đăng nhập'}</p>
        </nav>
      </div>
    </header>
  )
}

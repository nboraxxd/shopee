import { Outlet } from 'react-router-dom'
import { AuthHeader } from '@/components/shared/header'
import { Footer } from '@/components/shared/footer'

export default function AuthLayout() {
  return (
    <>
      <AuthHeader />
      <Outlet />
      <Footer />
    </>
  )
}

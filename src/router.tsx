import { createBrowserRouter } from 'react-router-dom'

import { PATH } from '@/constants/path'
import { MainLayout } from '@/layouts/main-layout'
import { AuthLayout } from '@/layouts/auth-layout'
import { NotFound } from '@/pages/not-found'
import { Homepage } from '@/pages/homepage'
import { Register } from '@/pages/register'
import { Login } from '@/pages/login'

export const router = createBrowserRouter([
  {
    path: PATH.HOMEPAGE,
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
    ],
  },
  {
    element: <AuthLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: PATH.REGISTER,
        element: <Register />,
      },
      {
        path: PATH.LOGIN,
        element: <Login />,
      },
    ],
  },
])

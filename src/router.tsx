import { createBrowserRouter } from 'react-router-dom'

import { PATH } from '@/constants/path'
import { MainLayout } from '@/layouts/main-layout'
import { NotFound } from '@/pages/not-found'
import { Homepage } from '@/pages/homepage'

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
])

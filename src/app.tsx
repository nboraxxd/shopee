import { Toaster } from 'react-hot-toast'
import { RouterProvider } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

import { router } from '@/router'
import { QueryProvider } from '@/lib/react-query'
import '@/globals.css'

export default function App() {
  return (
    <>
      <QueryProvider>
        <HelmetProvider>
          <RouterProvider router={router} />
          <Toaster />
        </HelmetProvider>
      </QueryProvider>
    </>
  )
}

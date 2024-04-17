import { RouterProvider } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { router } from '@/router'
import '@/globals.css'

export default function App() {
  return (
    <>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </>
  )
}

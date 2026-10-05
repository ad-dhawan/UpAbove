import { createBrowserRouter } from 'react-router'
import { MainLayout } from '@/layouts/MainLayout/MainLayout'
import { BookSessionPage } from '@/pages/BookSession/BookSessionPage'
import { HomePage } from '@/pages/Home/HomePage'
import { NotFoundPage } from '@/pages/NotFound/NotFoundPage'

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'book', element: <BookSessionPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])

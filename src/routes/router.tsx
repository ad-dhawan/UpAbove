import { createBrowserRouter } from 'react-router'
import { MainLayout } from '@/layouts/MainLayout/MainLayout'
import { BookDatesPage } from '@/pages/BookDates/BookDatesPage'
import { BlogPostPage } from '@/pages/BlogPost/BlogPostPage'
import { BlogsPage } from '@/pages/Blogs/BlogsPage'
import { BookSessionPage } from '@/pages/BookSession/BookSessionPage'
import { HomePage } from '@/pages/Home/HomePage'
import { NotFoundPage } from '@/pages/NotFound/NotFoundPage'
import { CancellationPolicyPage } from '@/pages/Policies/CancellationPolicyPage'
import { PricingPage } from '@/pages/Policies/PricingPage'

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'book', element: <BookSessionPage /> },
      { path: 'book/:slug', element: <BookDatesPage /> },
      { path: 'blogs', element: <BlogsPage /> },
      { path: 'blogs/:slug', element: <BlogPostPage /> },
      { path: 'pricing', element: <PricingPage /> },
      { path: 'cancellation-policy', element: <CancellationPolicyPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])

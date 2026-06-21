import { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PublicLayout from '@/layouts/PublicLayout'

// Lazy-loaded page components
const HomePage = lazy(() => import('@/pages/public/HomePage'))
const AboutPage = lazy(() => import('@/pages/public/AboutPage'))
const MembershipPage = lazy(() => import('@/pages/public/MembershipPage'))
const TrainersPage = lazy(() => import('@/pages/public/TrainersPage'))
const TrainerProfilePage = lazy(() => import('@/pages/public/TrainerProfilePage'))
const ClassesPage = lazy(() => import('@/pages/public/ClassesPage'))
const BookingPage = lazy(() => import('@/pages/public/BookingPage'))
const GalleryPage = lazy(() => import('@/pages/public/GalleryPage'))
const BlogPage = lazy(() => import('@/pages/public/BlogPage'))
const ArticlePage = lazy(() => import('@/pages/public/ArticlePage'))
const ContactPage = lazy(() => import('@/pages/public/ContactPage'))
const LoginPage = lazy(() => import('@/pages/auth/LoginPage'))
const RegisterPage = lazy(() => import('@/pages/auth/RegisterPage'))

// Loading fallback for lazy-loaded pages
function PageFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 rounded-full border-2 border-transparent border-t-neon-orange border-r-neon-red animate-spin" />
        <p className="text-sm text-muted-foreground">Loading...</p>
      </div>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<PageFallback />}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: 'about',
        element: (
          <Suspense fallback={<PageFallback />}>
            <AboutPage />
          </Suspense>
        ),
      },
      {
        path: 'membership',
        element: (
          <Suspense fallback={<PageFallback />}>
            <MembershipPage />
          </Suspense>
        ),
      },
      {
        path: 'trainers',
        element: (
          <Suspense fallback={<PageFallback />}>
            <TrainersPage />
          </Suspense>
        ),
      },
      {
        path: 'trainers/:id',
        element: (
          <Suspense fallback={<PageFallback />}>
            <TrainerProfilePage />
          </Suspense>
        ),
      },
      {
        path: 'classes',
        element: (
          <Suspense fallback={<PageFallback />}>
            <ClassesPage />
          </Suspense>
        ),
      },
      {
        path: 'classes/book/:id',
        element: (
          <Suspense fallback={<PageFallback />}>
            <BookingPage />
          </Suspense>
        ),
      },
      {
        path: 'gallery',
        element: (
          <Suspense fallback={<PageFallback />}>
            <GalleryPage />
          </Suspense>
        ),
      },
      {
        path: 'blog',
        element: (
          <Suspense fallback={<PageFallback />}>
            <BlogPage />
          </Suspense>
        ),
      },
      {
        path: 'blog/:id',
        element: (
          <Suspense fallback={<PageFallback />}>
            <ArticlePage />
          </Suspense>
        ),
      },
      {
        path: 'contact',
        element: (
          <Suspense fallback={<PageFallback />}>
            <ContactPage />
          </Suspense>
        ),
      },
      {
        path: 'login',
        element: (
          <Suspense fallback={<PageFallback />}>
            <LoginPage />
          </Suspense>
        ),
      },
      {
        path: 'register',
        element: (
          <Suspense fallback={<PageFallback />}>
            <RegisterPage />
          </Suspense>
        ),
      },
    ],
  },
])

export default function AppRouter() {
  return <RouterProvider router={router} />
}

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
    <div className="min-h-screen pt-24 pb-20 px-5 lg:px-8 max-w-7xl mx-auto w-full">
      {/* Hero Skeleton */}
      <div className="flex flex-col items-center justify-center text-center mb-16 pt-12">
        <div className="h-6 w-32 bg-slate-200 rounded-full animate-pulse mb-6" />
        <div className="h-14 md:h-20 w-3/4 max-w-2xl bg-slate-200 rounded-2xl animate-pulse mb-6" />
        <div className="h-4 w-2/3 max-w-lg bg-slate-200 rounded-full animate-pulse mb-2" />
        <div className="h-4 w-1/2 max-w-md bg-slate-200 rounded-full animate-pulse" />
      </div>

      {/* Grid Skeleton */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <div className="w-full h-52 bg-slate-200 rounded-2xl animate-pulse mb-6" />
            <div className="h-6 w-3/4 bg-slate-200 rounded-lg animate-pulse mb-4" />
            <div className="h-4 w-full bg-slate-200 rounded-full animate-pulse mb-2" />
            <div className="h-4 w-5/6 bg-slate-200 rounded-full animate-pulse mb-6" />
            <div className="flex justify-between items-center pt-5 border-t border-slate-100">
              <div className="h-10 w-28 bg-slate-200 rounded-full animate-pulse" />
              <div className="h-10 w-10 bg-slate-200 rounded-full animate-pulse" />
            </div>
          </div>
        ))}
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

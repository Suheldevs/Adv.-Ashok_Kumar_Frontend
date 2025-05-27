import React, { lazy, Suspense } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import DisclaimerModal from './components/DisclaimerModal'
import Loader from './components/Loader' // golden spinner

// Lazy-loaded pages
const Home = lazy(() => import('./pages/Home'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const Gallery = lazy(() => import('./pages/Gallery'))
const BlogPage = lazy(() => import('./pages/BlogPage'))
const BlogDetail = lazy(() => import('./pages/BlogDetail'))
const ContactUs = lazy(() => import('./pages/ContactUs'))
const ServicesPage = lazy(() => import('./pages/ServicePage'))
const Disclaimer = lazy(() => import('./pages/DisclaimerPage'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const PageNotFound = lazy(() => import('./pages/PageNotFound'))

function App() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <DisclaimerModal />

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>

      <Footer />
    </>
  )
}

export default App

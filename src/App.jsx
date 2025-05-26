import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Gallery from './pages/Gallery'
import PageNotFound from './pages/PageNotFound'
import BlogPage from './pages/BlogPage'
import ContactUs from './pages/ContactUs'
import Footer from './components/Footer'
import ServicesPage from './pages/ServicePage'
// import ServiceDetail from './pages/ServiceDetailPage'
import ScrollToTop from './components/ScrollToTop'
import AboutPage from './pages/AboutPage'
import Disclaimer from './pages/DisclaimerPage'
import PrivacyPolicy from './pages/PrivacyPolicy'
import BlogDetail from './pages/BlogDetail'
import DisclaimerModal from './components/DisclaimerModal'
function App() {
  return (
    <>

    <Header/>
    <ScrollToTop/>
    <DisclaimerModal/>
   <Routes>
    <Route path='*' element={<PageNotFound/>}/>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<AboutPage/>}/>
    <Route path='/gallery' element={<Gallery/>}/>
    <Route path='/blog' element={<BlogPage/>}/>
    <Route path='/blog/:slug' element={<BlogDetail/>}/>
    <Route path='/contact' element={<ContactUs/>}/>
    <Route path='/services' element={<ServicesPage/>}/>
    {/* <Route path='/services/:slug' element={<ServiceDetail/>}/> */}
    <Route path='/disclaimer' element={<Disclaimer/>}/>
    <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
   </Routes>
   <Footer/>
       </>
  )
}

export default App
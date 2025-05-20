import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Gallery from './pages/Gallery'
import PageNotFound from './pages/PageNotFound'
import BlogPage from './pages/BlogPage'
import ContactUs from './pages/ContactUs'
function App() {
  return (
    <>

    <Header/>
   <Routes>
    <Route path='*' element={<PageNotFound/>}/>
    <Route path='/' element={<Home/>}/>
    <Route path='/gallery' element={<Gallery/>}/>
    <Route path='/blog' element={<BlogPage/>}/>
    {/* <Route path='/blog/:slug' element={<BlogPage/>}/> */}
    <Route path='/contact' element={<ContactUs/>}/>
   </Routes>
       </>
  )
}

export default App
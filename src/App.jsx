import React from 'react'
import {Routes, Route } from 'react-router-dom'
import Layout from './components/layouts/Layout'
import Home from './pages/Home'
import AboutUs from "./pages/AboutPage"
import ContactUs from './pages/ContactPage'
import ServicePage from './pages/ServicePage'
function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/contact' element={<ContactUs/>} />
        {/* Dropdown pages */}
        {/* :type dynamic route */}
        <Route path='/:type' element={<ServicePage/>}/>
      </Routes>
    </Layout>

  )
}

export default App
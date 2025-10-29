import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/layouts/Layout'
import Home from './pages/Home'
import CategoryPage from './pages/CategoryPage'
import TypeDetailPage from './pages/TypeDetailPage'
import AboutUs from "./pages/AboutPage"
import ContactUs from './pages/ContactPage'
import ServicePage from './pages/ServicePage'
import Projects from './pages/Projects'
import ProjectDetails from './pages/ProjectDetails'
import VideoShowcase from './components/common/VideoShowcase'
import Gallery from './pages/Gallery'
function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/category/:id" element={<CategoryPage />} />
        <Route path="/category/:id/type/:typeId" element={<TypeDetailPage />} />

        <Route path='/about' element={<AboutUs />} />
        <Route path='/video' element={<VideoShowcase />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/contact' element={<ContactUs />} />
        {/* Dropdown pages */}
        {/* :type dynamic route */}
        <Route path='/:type' element={<ServicePage />} />
        <Route path='/projects' element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
      </Routes>
    </Layout>

  )
}

export default App
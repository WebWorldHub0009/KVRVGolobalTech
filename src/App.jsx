import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/layouts/Layout'
import Home from './pages/Home'
import AboutUs from "./pages/AboutPage"

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
      </Routes>
    </Layout>

  )
}

export default App
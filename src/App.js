import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Header from './component/Header'
import { Toolbar } from '@mui/material'
import Contact from './pages/Contact'
import Footer from './component/Footer'
import ProjectDetail from './pages/ProjectDetail'

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Header/>
      <Toolbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/project/:id' element={<ProjectDetail/>} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
import React from 'react';
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import { Route, Routes } from 'react-router-dom';
import DemoAppBar from './components/Navbar';

function App() {
  return (
    <div>
      <DemoAppBar />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
      </Routes>
    </div>
  )
}

export default App

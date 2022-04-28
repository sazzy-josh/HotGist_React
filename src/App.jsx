import { useState } from 'react'
import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import Navbar from './navbar'
import Home from './home'
import Create from './create'
import Services from './services'
import './App.css'
import BlogList from './bloglist'
import Blogdetails from './bloglist.details'


function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Navbar />
        <div className='Content'>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/create' element={<Create />} />
            <Route path='/services' element={<Services />} />
            <Route path='/blogs/:id' element={<Blogdetails />} />
          </Routes>
        </div>
          
        </BrowserRouter>  
    </div>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import AddBlog from './components/AddBlog'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
function App() {
  

  return (
    <>
      <div>
       <Navbar/>
       <Routes>
        <Route path="/addblog"element={<AddBlog/>}/>
        <Route path="/home"element={<Home/>}/>
       </Routes>
      </div>
      
    </>
  )
}

export default App

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home/Home'

const Allroutes = () => {
  return (
    <Routes>
        <Route to="/" element={<Home/>}></Route>
    </Routes>
      
    
  )
}

export default Allroutes

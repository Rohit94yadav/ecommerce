import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home></Home>}></Route>
    </Routes>
  )
}

export default AllRoutes
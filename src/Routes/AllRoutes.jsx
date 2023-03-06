import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import SingleProductPage from './SingleProductPage'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/product/:singleProduct" element={<SingleProductPage></SingleProductPage>}></Route>
    </Routes>
  )
}

export default AllRoutes
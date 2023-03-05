import React from 'react'
import { Routes, Route } from 'react-router-dom'
import SliderHeader from '../pages/header/SliderHeader'

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<SliderHeader />} />
    </Routes>
  )
}

export default Routers
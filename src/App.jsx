import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import Features from './Components/Features'
import Product from './Components/Product'
import MoreFeatures from './Components/MoreFeatures'

const App = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <Features/>
      <Product/>
      <MoreFeatures/>
    </div>
  )
}

export default App

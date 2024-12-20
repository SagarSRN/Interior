import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Brand from './components/Brand/Brand'
import './App.css'
import Services from './components/Service/Services'
import Banner from './components/Banner/Banner'
import Banner2 from './components/Banner/Banner2'
import Banner3 from './components/Banner/Banner3'
import Testamonial from './components/Testamonial/Testamonial'
import Newsletter from './Newslettter/Newsletter'
import Footer from './components/Footer/Footer'

function App() {
  

  return (
    <main className="overflow-x-hidden">
     <Navbar/>
     <Hero/>
     <Brand/>
     <Services/>
     <Banner/>
     <Banner2/>
      <Banner3/>
      <Testamonial/>
      <Newsletter/>
      <Footer/>
    </main>
  )
}

export default App

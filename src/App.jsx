import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import FurniturePromo from './Components/Hero'
import AboutProduct from './Components/AboutProduct'
import MarqueeSlider from './Components/Marque'
import Browseroom from './Components/Browseroom'
import Risk from './Components/Risk'
import Hassle from './Components/Hassle'
import WaterFree from './Components/WaterFree'
import ShopWN from './Components/ShopWN'
import Footer from './Components/Footer'
import Testing from './Components/Testing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      < Navbar />
      <FurniturePromo />
      <MarqueeSlider />
      <AboutProduct />
      <Browseroom />
      <Hassle />
      <Risk />
      <WaterFree />
      <ShopWN />
      <Footer />
      {/* <Testing /> */}
      
    </>
  )
}

export default App

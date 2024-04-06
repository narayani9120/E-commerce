import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes , Route } from 'react-router-dom'
import Home from './Pages/Home'
import Header from './Components/Header'
import Westernwear from './Pages/Westernwear'
import Indian from './Pages/Indian'
import Footwear from './Pages/Footwear'
import Watches from './Pages/Watches'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routes>
     <Route path="/Header" element={<Header/>}></Route>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/Westernwear" element={<Westernwear/>}></Route>
      <Route path="/Indian" element={<Indian/>}></Route>
      <Route path="/Footwear" element={<Footwear/>}></Route>
      <Route path="/Watches" element={<Watches/>}></Route>
     </Routes>
        
    </>
  )
}

export default App

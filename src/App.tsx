// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Home from './component/Home'
import Welcome from './component/Welcome'
import {Routes,Route, BrowserRouter} from 'react-router-dom'
function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/welcome" element={<Welcome/>}/>
      <Route path="/" element={<Home/>}/>
    </Routes>
    </BrowserRouter>
     
      
    </>
  )
}

export default App

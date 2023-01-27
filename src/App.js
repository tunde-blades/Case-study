import {Route, Routes } from "react-router-dom"
import React from 'react'
import Portfolio from "./pages/Portfolio"
import Credentials from "./pages/Credentials"
import Payments from "./pages/Payments"




const App = () => {
  return (
    <div>
      <Routes>
         <Route path="/" element={<Portfolio/>}/>
         <Route path="/credentials" element={<Credentials/>}/>
          <Route path="/payments" element={<Payments/>}/>
      </Routes>
      
    </div>
  )
}

export default App
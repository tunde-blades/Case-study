import {Route, Routes } from "react-router-dom"
import React from 'react'
import Portfolio from "./pages/Portfolio"
import Credentials from "./pages/Credentials"
import Payments from "./pages/Payments"
import Logistics from "./pages/Logistics"




const App = () => {
  return (
    <div>
      <Routes>
         <Route path="/" element={<Portfolio/>}/>
         <Route path="/credentials" element={<Credentials/>}/>
          <Route path="/payments" element={<Payments/>}/>
            <Route path="/logistics" element={<Logistics/>}/>
      </Routes>
      
    </div>
  )
}

export default App
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import FebreTifoide from '../pages/FebreTifoide'
import HepatiteB from '../pages/HepatiteB'
import Home from '../pages/Home'
import Vaccines from '../pages/Vaccines'

const routes = () => {
    return (
       <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/vaccines" element={<Vaccines />} />
           <Route path="/vaccines/febretifoide" element={<FebreTifoide />} />
           <Route path="/vaccines/hepatiteb" element={<HepatiteB />} />
       </Routes>
    )
}

export default routes

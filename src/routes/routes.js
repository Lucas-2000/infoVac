import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import BCG from '../pages/BCG'
import Covid from '../pages/Covid'
import FebreAmarela from '../pages/FebreAmarela'
import FebreTifoide from '../pages/FebreTifoide'
import HepatiteB from '../pages/HepatiteB'
import Home from '../pages/Home'
import HPV from '../pages/HPV'
import Poliomielite from '../pages/Poliomielite'
import Vaccines from '../pages/Vaccines'

const routes = () => {
    return (
       <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/vaccines" element={<Vaccines />} />
           <Route path="/vaccines/febretifoide" element={<FebreTifoide />} />
           <Route path="/vaccines/hepatiteb" element={<HepatiteB />} />
           <Route path="/vaccines/febreamarela" element={<FebreAmarela />} />
           <Route path="/vaccines/poliomielite" element={<Poliomielite />} />
           <Route path="/vaccines/bcg" element={<BCG />} />
           <Route path="/vaccines/hpv" element={<HPV />} />
           <Route path="/vaccines/covid" element={<Covid />} />
       </Routes>
    )
}

export default routes

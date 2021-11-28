import React from 'react'
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import BCG from '../pages/BCG'
import Covid from '../pages/Covid'
import FebreAmarela from '../pages/FebreAmarela'
import FebreTifoide from '../pages/FebreTifoide'
import HepatiteB from '../pages/HepatiteB'
import Historia from '../pages/Historia'
import Home from '../pages/Home'
import HPV from '../pages/HPV'
import Poliomielite from '../pages/Poliomielite'
import Vaccines from '../pages/Vaccines'
import Projeto from '../pages/Projeto'

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
           <Route path="/Historia" element={<Historia />} />
           <Route path="/Projeto" element={<Projeto />} />
       </Routes>
    )
}

export default routes

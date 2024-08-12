import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/home/Home'
import Apropos from '../pages/apropos/Apropos'
import NotFound from '../pages/404/404'
import Logement from '../pages/logement/Logement'
import Header from '../utilities/Header'
import Footer from '../utilities/Footer'
const Router = () => {
  return (
        <BrowserRouter>
        <Header/>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/apropos' element={<Apropos/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/logement' element={<Logement/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>
  )
}

export default Router

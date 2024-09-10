import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Contact from './pages/Contact'
import Menu from './components/Menu'

const Rutas = () => {
    return (
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path='/contact' element={<Contact />} />
                <Route path='/' element={<Home />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rutas
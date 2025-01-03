import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import ArabicLayout from './layouts/ArabicLayout'
import ArabicHome from './pages/ArabicHome'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route index element={<Home/>} />
                </Route>
                <Route path='/ar' element={<ArabicLayout />}>
                    <Route index element={<ArabicHome />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../components/Login';
import NotFound from '../components/NotFound';
import Home from '../components/Home';
import { About } from '../components/About';


const AppRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='*' element={<Login />}/>
    </Routes>
  )
}

export default AppRouter;
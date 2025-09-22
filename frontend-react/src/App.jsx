import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './assets/css/style.css'
import Register from './components/Register'
import Home from './components/home'
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './components/Login'

function App() {


  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route path='/register' element = {<Register/>}/>
          <Route path='/login' element = {<Login/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
      
    </>
  )
}

export default App

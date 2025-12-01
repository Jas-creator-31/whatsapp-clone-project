import React from 'react'
import './App.css'
import ReactInteractivityTestPage from './pages/reactInteractivityTestPage'
import Home from './pages/home'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </>
  )
}

export default App

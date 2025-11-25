import React from 'react'
import '/src/App.css'
import HomePage from './pages/homePage'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>} />
      </Routes>
    </>
  )
}

export default App

import React from 'react'
import '/src/App.css'
import HomePage from './pages/homePage'
import LoginPage from './pages/loginPage'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/login' element={<LoginPage/>}/>
      </Routes>
    </>
  )
}

export default App

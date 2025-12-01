import React from 'react'
import './App.css'
import HomePage from './pages/homePage'
import LoginPage from './pages/loginPage'
import ChatBotPage from './pages/chatBotPage'
import ReactInteractivityTestPage from './pages/reactInteractivityTestPage'
import WhatsappMokeupPage from './pages/whatsappMokeupPage'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/chatbot' element={<ChatBotPage/>}/>
        <Route path='/reacttestpage' element={<ReactInteractivityTestPage/>}/>
        <Route path='/whatsapp' element={<WhatsappMokeupPage />} />
      </Routes>
    </>
  )
}

export default App

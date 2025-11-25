import React from 'react'
import './App.css'
import Navbar from './navbar.jsx'
import Sidebar from './sidebar.jsx'

function App() {

  return (
    <>
      <div>
        <div className='flex flex-row'>
          <Sidebar />
          <Navbar />
          
        </div>

      </div>
    </>
  )
}

export default App

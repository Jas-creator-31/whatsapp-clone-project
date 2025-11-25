import React from 'react'
import './App.css'
import Navbar from './navbar.jsx'
import Sidebar from './sidebar.jsx'
import Contant from './contant.jsx'

function App() {

  return (
    <>
      <div>
        <div className='h-screen w-full'>
          <div className='flex flex-row scroll-m-0 fixed w-full'>
            <Sidebar />
            <Navbar />
          </div>
          <div className='pl-32 pt-16 pr-10'>
            <div className=''>
              <Contant />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

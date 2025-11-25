import React from 'react'
import Navbar from './navbar.jsx'
import Sidebar from './sidebar.jsx'

function AppShall() {

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

export default AppShall

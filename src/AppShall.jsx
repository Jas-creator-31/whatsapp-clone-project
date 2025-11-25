import React from 'react'
import Navbar from './components/navbar.jsx'
import Sidebar from './components/sidebar.jsx'
// import Contant from './contant.jsx'

function AppShall() {

  return (
    <>
      <div>
        <div>
          <div className='flex flex-row scroll-m-0 fixed w-full'>
            <Sidebar />
            <Navbar />
          </div>
          
        </div>
      </div>
    </>
  )
}

export default AppShall

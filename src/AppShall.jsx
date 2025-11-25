import React from 'react'
import Navbar from './components/navbar.jsx'
import Sidebar from './components/sidebar.jsx'
import Contant from './contant.jsx'

function AppShall() {

  return (
    <>
      <div>
        <div className='h-screen w-full'>
          <div className='flex flex-row scroll-m-0 fixed w-full'>
            <Sidebar />
            <Navbar />
          </div>
          <div className='pl-3 pb-14 pr7 sm:pl-32 pt-16 sm:pr-10'>
            <div className=''>
              <Contant />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AppShall

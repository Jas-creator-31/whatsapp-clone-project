import React from 'react'
import AppShall from '../AppShall.jsx'
import Contant from '../components/contant.jsx'

function HomePage() {

    return (
        <>
            <div>
                <div className='h-screen w-full'>
                    <div>
                        <AppShall />
                    </div>
                    <div className='pl-3 pb-14 pr7 sm:pl-32 pt-16 sm:pr-10'>
                        <Contant />
                    </div>


                </div>
            </div>

        </>
    )
}

export default HomePage

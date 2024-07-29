import React from 'react'
import { Nav } from '../Nav/Nav'
import { Footer } from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

export  function Layout() {
  return (
    <>
        <Nav/>
            <Outlet/>
        <Footer/>
    
    </>
  )
}

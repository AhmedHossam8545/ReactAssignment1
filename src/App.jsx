import { useState } from 'react'
import './App.css'
import { Home } from './Components/Home/home'
import { Nav } from './Components/Nav/Nav'
import { Portfolio } from './Components/Portfolio/Portfolio'
import { About } from './Components/About/About'
import { Contact } from './Components/Contact/Contact'
import { Footer } from './Components/Footer/Footer'
import { createBrowserRouter ,RouterProvider } from 'react-router-dom'
import { Layout } from './Components/Layout/Layout'

function App() {
  let router = createBrowserRouter([
    {
      path : "/ReactAssignment1/" , element : <Layout/> ,children : [
        {index : true , element : <Home/>},
        {path : "about" , element : <About/> },
        {path : "contact" , element : <Contact/> },
        {path : "portfolio" , element : <Portfolio/> }
      ]
    }
  ])

  
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    
    </>
  )
}

export default App

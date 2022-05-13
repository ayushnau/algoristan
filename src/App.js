import React from 'react'
import Navbar from './Components/navbar/Navbar'
import Header from './Components/header/Header'
import Courses from './Components/Courses/Courses'
import Footer from './Components/footer/Footer'
import Intro from './Components/Inroduction/Intro'


const App = () => {
  return (
  <>
   <Navbar/>
   <Header/>
   <Intro/>
   <Courses/>
   <Footer/>
   
  </>
  )
}

export default App
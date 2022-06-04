import React from 'react'
import Navbar from './Components/navbar/Navbar'
import Header from './Components/header/Header'
import Courses from './Components/Courses/Courses'
import Footer from './Components/footer/Footer'
import Intro from './Components/Inroduction/Intro'
import Team from './Components/Team/Team'
import Contactus from './Components/Contactus/Contactus'
import Project from './Components/Projectss/Project'
import Articles, { ArticleSpecific } from './Components/Articles/Articles'
import PrivacyPolicy from './Components/PrivacyPolicy/PrivacyPolicy'
import {
  BrowserRouter ,
  Routes,
  Route,
} from "react-router-dom";


const App = () => {
  return (
    <>
      <BrowserRouter >
      <Navbar />
        <Routes>
          <Route path={process.env.PUBLIC_URL+ '/'} element={<>
            <Header />
            <Intro />
            <Courses />
          </>} />
          <Route path='/Contactus' element={<Contactus />}/>
          <Route path='/Team' element={<Team />}/>
          <Route path='/Project' element={<Project />}/>
          <Route path='/PrivacyPolicy' element={<PrivacyPolicy />}/>
          <Route path='/Articles' element={<Articles />}/>
          <Route path='/Articles/:id' element={<ArticleSpecific id="1"/>}/>
        </Routes>
      <Footer />
      </BrowserRouter >

    </>
  )
}

export default App
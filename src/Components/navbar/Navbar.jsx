import React, { useState } from 'react'
import './Navbar.css'
import Logo from '../../Static/algo.png'

const Navbar = () => {
  const handleClick = (e) =>{
    const check = document.getElementById('navbar_listcontainer');
    console.log(window.getComputedStyle(check));
   if(window.getComputedStyle(check).display === 'flex')
   {
     check.style.display = 'none'
   }
   else{
     check.style.display  = 'flex'
   }
 }
  return (
  <>
    <nav id='navid'>
        <div className="navbar_image"><a href="#"><img src={Logo} alt="" /></a></div>
        <div className="navbar_listcontainer" id='navbar_listcontainer'>
            <ul className='navbar_list'>
                <li className="navbar_listitem"><a href="#">Home</a></li>
                <li className="navbar_listitem"><a href="#">Team</a></li>
                <li className="navbar_listitem"><a href="#">ContactUs</a></li>
                <li className="navbar_listitem"><a href="#">Project</a></li>
            </ul>
            <button className='Loginbtn'>Login</button>
        </div>
        <div className="responsive">
          <button className="Loginbtn">Login</button>
          <div onClick={handleClick} className="hamburger"> <span className="hamburger"><i className="fas fa-bars fa-2x"></i></span></div>
        </div>
    </nav>
  </>
  )
}

export default Navbar
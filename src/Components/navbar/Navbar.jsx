import React, { useState } from 'react'
import './Navbar.css'
import Logo from '../../Static/algo.png'
import { Link } from "react-router-dom";


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
        <div className="navbar_image"><Link to={process.env.PUBLIC_URL+ '/'}><img src={Logo} alt="" /></Link></div>
        <div className="navbar_listcontainer" id='navbar_listcontainer'>
            <ul className='navbar_list'>
                <li className="navbar_listitem"><Link to={process.env.PUBLIC_URL+ '/'}>Home</Link></li>
                <li className="navbar_listitem"><Link to="/Team">Team</Link></li>
                <li className="navbar_listitem"><Link to="/Contactus">Contact Us</Link></li>
                <li className="navbar_listitem"><Link to="/Project">Project</Link></li>
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
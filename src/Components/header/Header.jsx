import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../Static/vector5.png'
import './Header.css'


const Header = () => {
  return (
    <>
    <div className="headermasterContainer">  
      <div className="headerText">

        <h1>World's #1 Online Bootcamp</h1>
        <p>3,000,000 <span>careers advanced</span> </p>
        <p>1,500 <span>live classes every month</span> </p>
        <p>85% <span>report career benefits including promotion or a new job</span></p>

        <button className='headerbtn'> Explore Courses </button>

      </div> 
      <div className="headerphoto">
        <img src={logo} alt="" />
      </div> 
    </div> 
    <div className="downwardWrapper">
      <div className="downward">
        <Link to="#frontpage"><i className="fa fa-angle-down fa-4x"></i></Link>
      </div>
    </div> 
    </>
  )
}

export default Header

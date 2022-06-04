import React from 'react'
import { Link } from 'react-router-dom'
import './Card.css'


const Card = (props) => {
  return (
   <>
      <div className="cardmasterContainer">
        <div className="cardimage"><img src={props.Logo} alt="" /></div>
        <div className="cardText">
          <div className="cardheading"><Link to={props.id? `:${props.id}`:"#"}>{props.textheading}</Link> </div>
          <div className="cardpara"><Link to="#">{props.textpara}</Link></div>
        
        </div>
      </div>
   </>
  )
}

export default Card

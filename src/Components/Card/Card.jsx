import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
   <>
      <div className="cardmasterContainer">
        <div className="cardimage"><img src={props.Logo} alt="" /></div>
        <div className="cardText">
          <div className="cardheading"><a href={props.id? `:${props.id}`:"#"}>{props.textheading}</a> </div>
          <div className="cardpara"><a href="#">{props.textpara}</a></div>
        
        </div>
      </div>
   </>
  )
}

export default Card



// reduce the size of scroll bar
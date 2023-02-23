import React from 'react'
import { NavLink } from 'react-router-dom'


const Card = (props) => {
  return (
    <div className='cards'>
      <img src={props.src} alt={props.text}></img>
      <NavLink className="link" to={"/Logements/"+props.id} draggable="false">
      <p>{props.text}</p>
      </NavLink>
    </div>
  )
}

export default Card
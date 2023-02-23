import React from 'react'
import Header from '../components/Header'
import "../styles/header.css"
import "../styles/error.css"
import { NavLink } from 'react-router-dom';


const Error = () => {
  return (
    
    <div>
      <Header/>
      <div className='containererror'>
      <p className='error404'>404</p>
      <p className='error'>Oup's! La page que vous demandez n'existe pas.</p>
      <NavLink to={'/Home'} className='navhome'>Retourner sur la page d'accueil</NavLink>
      </div>
    </div>
  )
}

export default Error
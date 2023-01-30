import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import "../styles/header.css"
import "../styles/error.css"
import "../styles/footer.css"

const Error = () => {
  return (
    
    <div>
      <Header/>
      <h1 className='error'>Oup's la page que vous demandez n'existe pas !</h1>
      <Footer/>
    </div>
  )
}

export default Error
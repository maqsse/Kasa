import React from 'react'
import "../styles/footer.css"
import Logofooter from './Logofooter'



const Footer = () => {
  return (
    <footer>
      <Logofooter/>
      <p className='copyright'>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer
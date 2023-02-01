import { React } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import '../styles/header.css'
import '../styles/footer.css'
import Bannerabout from '../components/Bannerabout'

const About = () => {
  return (
    <div>
      <Header />
       <Bannerabout/>
      <Footer />
    </div>
  )
}

export default About

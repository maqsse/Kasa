import { React } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import '../styles/index.css'
import '../styles/header.css'
import '../styles/footer.css'
import '../styles/banner.css'
import '../styles/cards.css'
import Bannerhome from '../components/Bannerhome'
import Card from '../components/Card'
import { useState, useEffect } from 'react'



const Home = () => {
  const [error, setError] = useState(false)
  const [locationList, setLocationList] = useState([])

  useEffect(() => {
    async function fetchLocations () {
      try {
        const response = await fetch('../data/logements.json');
        const { locationList } = await response.json();
        setLocationList(locationList)
        
      } catch (err) {
        console.log('----- Error -----', err)
        setError(true)
      }
    }
    fetchLocations()
  }, [])
  if (error) {
    return <span> Oups il y a eu un problème </span>
  }
  
  return (
    <div>
      <Header />
      <Bannerhome />
      <div className='main'>
      {locationList.map(location => {
            return <Card text={location.title} src={location.cover} id={location.id} key={location.id} />
          })}
      </div>
      <Footer />
    </div>
  )
}

export default Home

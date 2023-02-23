import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, Routes, Route } from 'react-router-dom'
import Error from '../pages/Error';
import Footer from '../components/Footer'
import Header from '../components/Header'
import Tag from '../components/Tag'
import Etoiles from '../components/Etoiles'
import Dropdown from '../components/Dropdown'
import Slide from '../components/Slide'
import '../styles/logements.css'

const Logements = () => {
  const { idLogement } = useParams()
  const [error, setError] = useState(false)
  const [locationList, setLocationList] = useState([])
  

  useEffect(() => {
    async function fetchLocations() {
      
      try {
        const response = await fetch('../data/logements.json')
        const { locationList } = await response.json()
        setLocationList(locationList)
      } catch (err) {
        console.log('----- Error -----', err)
        setError(true)
      } 
      
    }
    fetchLocations()
  }, [])

  if (error) {
    <h1> Oups !! Une erreur est survenue </h1>
  }

  const logement = locationList.find((location) =>
    location.id.includes(idLogement)
  )

  return ( logement === undefined ? (
    <Routes>
      <Route path="/*" element={<Error />} />
    </Routes>
  ) 
  : (
    <div>
      <Header/>
      <Slide pictures={logement.pictures} />
      <div className='logement'>
      <div className="infoLogement">
        <h1> {logement.title} </h1>
        <h2> {logement.location} </h2>
        <section className='tags'>
                  {logement.tags.map((tag, index) => (
                    <Tag key={`${tag}-${index}`} tag={tag} />
                  ))}
                </section>
      </div>
      <section className='infoLoueur'>
      <div className="nomImageLoueur">
        <h3> {logement.host.name} </h3>
        <img src={logement.host.picture} alt={logement.host.name} />
      </div>
      <Etoiles key={`${logement.rating}-${logement.id}`} etoiles={logement.rating} />
</section>

      </div>
      <div className='divdropdowns'>
              <Dropdown key={`${'description'}-${logement.id}`} title='Description' description=
              {logement.description} />
              <Dropdown key={`${'equipements'}-${logement.id}`} title='Équipements' description={logement.equipments} />
            </div>
      <Footer/>
    </div>
    
    
  )
  )
}

export default Logements

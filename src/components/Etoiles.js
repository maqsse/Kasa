import React from 'react'
import star from '../star_rate.svg'
import starVide from '../star_rate-vide.svg'

const Etoiles = ({etoiles}) => {
  const etoilePleine = <img src={star} alt='star' />
  const etoileVide = <img src={starVide} alt='star' />
  const range = [1, 2, 3, 4, 5]
  return (
    <div className='blocetoiles'>
      {range.map((rangeElem) => etoiles >= rangeElem ? (<span className="spanetoiles" key={rangeElem.toString()}> {etoilePleine} </span>) : (<span className='spanetoiles' key={rangeElem.toString()}> {etoileVide} </span>))}
    </div>
  )
}

export default Etoiles

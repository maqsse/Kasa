import React from 'react'



const Dropdown = ({description, title}) => {
  

    return (
      <div className='containerdropdown'>
    <details className='dropdown'>
       <summary>{title}<i className="fas fa-chevron-up" aria-hidden="true"></i></summary>
        <p>{description}</p>
        </details>
    </div>
    
  )
}

export default Dropdown
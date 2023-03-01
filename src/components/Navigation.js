import React from 'react';
import { NavLink } from 'react-router-dom';


const Navigation = () => {

  return (
    <nav className="navigation">
      <ul>
        <NavLink to={'/home'} id="firstLinkNav" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>Accueils</li>
        </NavLink>
        <NavLink to={'/about'} className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>A Propos</li>
        </NavLink>
      </ul>
    </nav>
  )
}

export default Navigation



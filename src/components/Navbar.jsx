import React, { useState } from "react";
import { NavLink, withRouter } from "react-router-dom";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(true);

  return (
    <div id='container-navbar'>
      <nav className='navbar'>
        <button
          className='toggle-button'
          onClick={() => setShowLinks(!showLinks)}
        >
          <span className='bar'></span>
          <span className='bar'></span>
          <span className='bar'></span>
        </button>
        <div className='navbar-links'>
          <ul id={showLinks ? "hidden" : "show"}>
            <li>
              <NavLink to='home' activeClassName='active'>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to='estudios' activeClassName='active'>
                Estudios
              </NavLink>
            </li>
            <li>
              <NavLink to='habilidades' activeClassName='active'>
                Habilidades
              </NavLink>
            </li>
            <li>
              <NavLink to='contactame' activeClassName='active'>
                Contactame
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default withRouter(Navbar);

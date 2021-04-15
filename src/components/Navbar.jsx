import React from "react";
import { NavLink, withRouter } from "react-router-dom";

const Navbar = () => {
  return (
    <div id='container-navbar'>
      <nav className='navbar'>
        <li>
          <NavLink to='home'>Home</NavLink>
        </li>
        <li>
          <NavLink to='estudios'>Estudios</NavLink>
        </li>
        <li>
          <NavLink to='habilidades'>Habilidades</NavLink>
        </li>
        <li>
          <NavLink to='contactame'>Contactame</NavLink>
        </li>
      </nav>
    </div>
  );
};

export default withRouter(Navbar);

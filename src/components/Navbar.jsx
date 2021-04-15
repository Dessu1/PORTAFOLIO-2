import React from "react";
import { NavLink, withRouter } from "react-router-dom";

const Navbar = () => {
  return (
    <div id='container-navbar'>
      <nav className='navbar'>
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
      </nav>
    </div>
  );
};

export default withRouter(Navbar);

import React from "react";
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const AsideMenu = () => {
  return (
    <div id='aside-menu'>
      <nav className='nav-aside'>
        <li>
          <a
            href='https://twitter.com/BrianStivenAlv3'
            target='_blank'
            rel='noreferrer'
          >
            <FaTwitter />
          </a>
        </li>
        <li>
          <a
            href='https://www.linkedin.com/in/brian-alvarado-a81636196/'
            target='_blank'
            rel='noreferrer'
          >
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href='https://github.com/dessu1' target='_blank' rel='noreferrer'>
            <FaGithub />
          </a>
        </li>
        <li>
          <a
            href='https://www.instagram.com/dessu_1/'
            target='_blank'
            rel='noreferrer'
          >
            <FaInstagram />
          </a>
        </li>
      </nav>
    </div>
  );
};

export default AsideMenu;

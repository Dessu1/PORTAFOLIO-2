import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaPython,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { SiFirebase, SiRedux } from "react-icons/si";
import { ImGit } from "react-icons/im";
import { NavLink, withRouter } from "react-router-dom";

const ContentHome = () => {
  return (
    <div id='container-content-home'>
      <div className='content-home'>
        <div className='content-left'>
          <span>Brian Stiven Alvarado</span>
          <span>Front-end Developer</span>

          <NavLink to='/estudios'>Sobre mi</NavLink>
        </div>
        <div className='content-right'>
          <h2 className='tittle'>Conocimientos</h2>
          <div className='icons'>
            <div className='row'>
              <FaHtml5 title='HTML 5' />
              <FaCss3Alt title='CSS 3' />
              <FaSass title='SASS' />
              <FaPython title='PYTHON' />
            </div>
            <div className='row'>
              <DiJavascript1 title='JAVASCRIPT' />
              <FaReact title='REACT JS' />
              <SiFirebase title='FIREBASE' />
            </div>
            <div className='row'>
              <FaNodeJs title='NODE JS' />
              <ImGit title='GIT' />
            </div>
            <div className='row'>
              <SiRedux title='REDUX' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(ContentHome);

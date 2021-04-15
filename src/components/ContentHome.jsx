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

const ContentHome = () => {
  return (
    <div id='container-content-home'>
      <div className='content-home'>
        <div className='content-left'>
          <span>Brian Stiven Alvarado</span>
          <span>Front-end Developer</span>

          <button>Sobre mi</button>
        </div>
        <div className='content-right'>
          <h2 className='tittle'>Conocimientos</h2>
          <div className='icons'>
            <div className='row'>
              <FaHtml5 />
              <FaCss3Alt />
              <FaSass />
              <FaPython />
            </div>
            <div className='row'>
              <DiJavascript1 />
              <FaReact />
              <SiFirebase />
            </div>
            <div className='row'>
              <FaNodeJs />
              <ImGit />
            </div>
            <div className='row'>
              <SiRedux />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentHome;

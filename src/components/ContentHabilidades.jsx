import React from "react";
import { ImGit } from "react-icons/im";
import { DiJavascript1 } from "react-icons/di";
import { SiFirebase } from "react-icons/si";
import { FaHtml5, FaCss3Alt, FaSass, FaReact, FaNodeJs } from "react-icons/fa";

const ContentHabilidades = () => {
  return (
    <div id='container-habilidades'>
      <div className='content-habilidades'>
        <div className='left'>
          <li>
            <p>
              <FaHtml5 />
              HTML 5{" "}
              <span className='procentaje'>
                90<span>%</span>
              </span>
            </p>
            <span className='bar'>
              <span className='html'></span>
            </span>
          </li>
          <li>
            <p>
              <FaCss3Alt /> CSS{" "}
              <span className='procentaje'>
                75<span>%</span>
              </span>
            </p>
            <span className='bar'>
              <span className='css'></span>
            </span>
          </li>
          <li>
            <p>
              <FaSass /> SASS{" "}
              <span className='procentaje'>
                70<span>%</span>
              </span>
            </p>
            <span className='bar'>
              <span className='sass'></span>
            </span>
          </li>
          <li>
            <p>
              <ImGit /> GIT{" "}
              <span className='procentaje'>
                70<span>%</span>
              </span>
            </p>
            <span className='bar'>
              <span className='git'></span>
            </span>
          </li>
        </div>

        <div className='right'>
          <li>
            <p>
              <FaReact /> REACT JS{" "}
              <span className='procentaje'>
                70<span>%</span>
              </span>
            </p>
            <span className='bar'>
              <span className='reactjs'></span>
            </span>
          </li>
          <li>
            <p>
              <FaNodeJs />
              NODE JS{" "}
              <span className='procentaje'>
                55<span>%</span>
              </span>
            </p>
            <span className='bar'>
              <span className='nodejs'></span>
            </span>
          </li>
          <li>
            <p>
              <DiJavascript1 /> Javascript{" "}
              <span className='procentaje'>
                75<span>%</span>
              </span>
            </p>
            <span className='bar'>
              <span className='javascript'></span>
            </span>
          </li>
          <li>
            <p>
              <SiFirebase /> Firebase{" "}
              <span className='procentaje'>
                65<span>%</span>
              </span>
            </p>
            <span className='bar'>
              <span className='firebase'></span>
            </span>
          </li>
        </div>
      </div>
    </div>
  );
};

export default ContentHabilidades;

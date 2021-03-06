import React from "react";

const ContentEstudios = () => {
  return (
    <div id='container-content-estudios'>
      <div className='content-estudios'>
        <div className='content-left'>
          <div className='estudios'>
            <span className='tittle'>Bachiller Basico</span>
            <span className='university'>
              <a href='http://gidelpa.edu.co/' target='_blank' rel='noreferrer'>
                Gimnasio del Pacifico
              </a>
            </span>
            <span className='date'>2015</span>
          </div>

          <div className='estudios'>
            <span className='tittle'>Ingenieria de Sistemas</span>
            <span className='university'>
              <a href='https://usc.edu.co/' target='_blank' rel='noreferrer'>
                Santiago de Cali
              </a>
            </span>
            <span className='date'>2016 - activo</span>
          </div>

          <div className='estudios'>
            <span className='tittle'>Curso de ReactJS</span>
            <span className='university'>
              <a
                href='https://www.udemy.com/course/curso-react-js/'
                target='_blank'
                rel='noreferrer'
              >
                Udemy
              </a>
            </span>
            <span className='date'>2020</span>
          </div>
        </div>

        <div className='content-right'>
          <div className='content-top'>
            <img src='https://i.imgur.com/0W4iFfa.jpg' alt='icon-avatar' />
            <span className='name'>Brian Stiven Alvarado</span>
          </div>
          <div className='content'>
            <span>
              Hola mi nombre es Brian pero perfiero que me digan{" "}
              <span id='name'>Dessu</span>
            </span>
            <span>
              Actualmente soy estudiante de ingeniria de sistemas con enfoque en
              el desarrollo web <span>front-ent</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentEstudios;

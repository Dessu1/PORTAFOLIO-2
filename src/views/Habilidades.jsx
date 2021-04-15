import React from "react";
import Navbar from "../components/Navbar";
import AsideMenu from "../components/AsideMenu";
import ContentHabilidades from "../components/ContentHabilidades";

const Habilidades = () => {
  return (
    <div id='container-principal'>
      <Navbar />
      <AsideMenu />
      <ContentHabilidades />
      <div className='container-chika'>
        <a href='#'>
          <img src='https://i.imgur.com/Wh9cqBq.gif' alt='chika-dance' />
        </a>
      </div>
    </div>
  );
};

export default Habilidades;

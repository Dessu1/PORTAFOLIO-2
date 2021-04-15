import React from "react";
import Navbar from "../components/Navbar";
import AsideMenu from "../components/AsideMenu";

const Contactame = () => {
  return (
    <div id='container-principal'>
      <Navbar />
      <AsideMenu />
      <div className='container-chika'>
        <a href='#'>
          <img src='https://i.imgur.com/Wh9cqBq.gif' alt='chika-dance' />
        </a>
      </div>
    </div>
  );
};

export default Contactame;

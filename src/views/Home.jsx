import React from "react";
import Navbar from "../components/Navbar";
import AsideMenu from "../components/AsideMenu";
import ContentHome from "../components/ContentHome";

const Home = () => {
  return (
    <div id='container-principal'>
      <Navbar />
      <AsideMenu />
      <ContentHome />
      <div className='container-chika'>
        <a href='#'>
          <img src='https://i.imgur.com/Wh9cqBq.gif' alt='chika-dance' />
        </a>
      </div>
    </div>
  );
};

export default Home;

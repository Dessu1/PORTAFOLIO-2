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
    </div>
  );
};

export default Home;

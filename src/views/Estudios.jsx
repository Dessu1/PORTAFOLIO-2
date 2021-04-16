import React from "react";
import Navbar from "../components/Navbar";
import AsideMenu from "../components/AsideMenu";
import ContentEstudios from "../components/ContentEstudios";

const Estudios = () => {
  return (
    <div id='container-principal'>
      <Navbar />
      <AsideMenu />
      <ContentEstudios />
    </div>
  );
};

export default Estudios;

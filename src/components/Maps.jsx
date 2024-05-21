import Header from "./Header.jsx";
import NavComp from "./Navbar/NavComp.jsx";
import { LineGraph } from "./LineChart.jsx";
import Footer from "./Footer.jsx";
import React, {useState, useEffect} from "react";
import Canvas from '../../../../../Maps component/Maps-Page/Canvas.jsx';
import HeatMap from "../../../../../Maps component/Maps-Page/HeatMap.jsx";
import Axios from "axios";

export const Maps = () => {

  return (
    <div className="primary-frame">
      <div className="header-and-nav-container">
        <Header />
        <NavComp />
      </div>

      <div className="secondary-frame">
        <HeatMap />

      </div>
    </div>
  );
};
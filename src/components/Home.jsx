import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
import "bootstrap/dist/css/bootstrap.min.css";
import NavComp from "./Navbar/NavComp.jsx";
import PlotComponent from "./HomePage/PlotComponent.jsx";
import DropDownMenu from "./HomePage/Charting.jsx";
import MarketStatsTable from "./HomePage/MarketStatsTable.jsx";
import "../../public/HeaderStyle.css"
import "../../public/HomePage.css"
import SpyAbout from "./HomePage/SpyAbout.jsx";


export const Home = () => {

  const [frameHeight, setFrameHeight] = useState("100vh"); // Initial height set to viewport height
  const primaryFrameRef = useRef(null);

  useEffect(() => {
    const updateFrameHeight = () => {
      if (primaryFrameRef.current) {
        const height = `${primaryFrameRef.current.scrollHeight}px`; // Calculate the height of the content inside the primary frame
        setFrameHeight(height);
      }
    };

    // Update frame height whenever the content inside the primary frame changes
    window.addEventListener("resize", updateFrameHeight);
    updateFrameHeight(); // Initial update

    return () => {
      window.removeEventListener("resize", updateFrameHeight);
    };
  }, []);

  return (
    <div className="primary-frame">
      <div className="header-and-nav-container">
        <Header />
        <NavComp />
      </div>

      <div className="secondary-home">
        {/* Add your secondary content here */}
        <div className="left">
          <div>
          <SpyAbout /> </div>
          <div className="market-stats-table">
            <div className="market-stats-header">
              Market Stats
            </div>
          <MarketStatsTable />
          </div></div>
        <div className="timeseries-main right"><DropDownMenu />
        </div>
        </div>
    </div>
  );
};

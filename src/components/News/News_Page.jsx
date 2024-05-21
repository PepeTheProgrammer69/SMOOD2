import React, { useEffect, useRef, useState } from "react";
import Header from "../Header";
import { Link } from "react-router-dom";
import { LineGraph } from "../LineChart.jsx";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import NavComp from "../Navbar/NavComp.jsx";
import NewsTable from "./NewsTable.jsx"

export const News_Page = () => {

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


      <div className="secondary-frame my-2">
        <div className="news-table">
        <NewsTable />
        </div>
      </div>

    </div>
  );
};
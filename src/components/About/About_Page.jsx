import React, { useState, useLayoutEffect, useRef } from "react";
import Header from "../Header.jsx";
import NavComp from "../Navbar/NavComp.jsx";
import "../../../public/HeaderStyle.css";
import About_Content from "./About_Content.jsx"

export const About_Page = () => {
  const [frameHeight, setFrameHeight] = useState("100vh"); // Initial height set to viewport height
  const primaryFrameRef = useRef(null);

  useLayoutEffect(() => {
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
    <div className="primary-frame" style={{ height: frameHeight }} ref={primaryFrameRef}>
      <div className="header-and-nav-container">
        <Header />
        <NavComp />
      </div>
      <div className="container-fluid my-1">
        <About_Content/>
        {/* Add more image links as needed */}
      </div>
      {/* Add any other content here */}
    </div>
  );
};

import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./Home.jsx/";
import { Screener } from "./Screener.jsx";
import Footer from "./Footer.jsx";
import { News_Page } from "./News/News_Page.jsx";
import { About_Page } from "./About/About_Page.jsx";

function App() {

  const location = useLocation();

  const isNotHomeRoute = location.pathname !== "/";

  const pageComponents = [
    { path: "/screener", component: <Screener /> },
    { path: "/news", component: <News_Page /> },
    { path: "/about", component: <About_Page /> },
  ];

  return (
    <div className="primary-frame">
      {!isNotHomeRoute && <Home />}
      <Routes>
        {pageComponents.map((page, index) => (
          <Route key={index} path={page.path} element={page.component} />
        ))}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

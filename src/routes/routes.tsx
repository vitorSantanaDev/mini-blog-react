import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Articles from "../pages/Articles";
import Main from "../pages/Main";

const Routers = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/detalhando-artigo/:id" element={<Articles />}/>
        </Routes>
      </Router>
    </>
  );
};

export default Routers

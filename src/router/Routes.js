// src/router/Routes.js
import React from "react";
// Import your views
import HomeDark from "../views/all-home-version/HomeDark";
import NotFound from "../views/NotFound";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Uncomment and update other routes as needed */}
        {/* <Route path="/home-light" element={<HomeLight />} /> */}
        <Route path="/" element={<HomeDark />} />
        {/* <Route path="/rtl-home-light" element={<RtlHomeLight />} />
        <Route path="/rtl-home-dark" element={<RtlHomeDark />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;

import React from "react";
import { Routes, Route } from "react-router-dom";
import Books from "../pages/Books";
import Home from "../pages/Home";
import Movies from "../pages/Movies";
import News from "../pages/News";
import Popular from "../pages/Popular";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/news" element={<News />} />
      <Route path="/popular" element={<Popular />} />
      <Route path="/books" element={<Books />} />
      <Route path="/movies" element={<Movies />} />
    </Routes>
  );
};

export default AppRoutes;

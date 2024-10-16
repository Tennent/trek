import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from "../../components/Layout/Layout";
import Home from "../Home/Home"
import About from "../About/About";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

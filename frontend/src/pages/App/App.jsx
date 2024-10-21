import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from "../../components/Layout/Layout";
import Home from "../Home/Home"
import About from "../About/About";
import Contact from "../Contact/Contact";
import Signup from "../Signup/Signup";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

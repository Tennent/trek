import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Layout from "../../components/Layout/Layout";
import Home from "../Home/Home"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

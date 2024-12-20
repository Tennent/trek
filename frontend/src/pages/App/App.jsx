import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from "../../components/Layout/Layout";
import Home from "../Home/Home"
import About from "../About/About";
import Contact from "../Contact/Contact";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";
import Manage from "../Manage/Manage";
import Track from "../Track/Track";
import Save from "../Save/Save";
import PrivacyPolicy from "../Legal/PrivacyPolicy";
import TermsAndConditions from "../Legal/TermsAndConditions";

export default function App() {
  const [user, setUser] = useState({ loggedIn: false });
  const [userCarIds, setUserCarIds] = useState([]);
  const [userCars, setUserCars] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout user={user} setUser={setUser} setUserCarIds={setUserCarIds} />}>
          <Route index element={<Home user={user} />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="manage" element={<Manage user={user} userCarIds={userCarIds} setUserCarIds={setUserCarIds} userCars={userCars} setUserCars={setUserCars} />} />
          <Route path="track" element={<Track />} />
          <Route path="save" element={<Save />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-conditions" element={<TermsAndConditions />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

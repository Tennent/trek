import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function Layout({ user, setUser }) {
  return (
    <>
      <main id='main'>
        <Navbar user={user} setUser={setUser} />
        <Outlet />
        <Footer />
      </main>
    </>
  )
}

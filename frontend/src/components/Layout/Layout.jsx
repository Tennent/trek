import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function Layout({ user }) {
  return (
    <>
      <main id='main'>
        <Navbar user={user} />
        <Outlet />
        <Footer />
      </main>
    </>
  )
}

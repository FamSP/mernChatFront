import React from "react";
import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";

const Layout = () => {
  return (
    <div className="">
      <header>
        <Header />
      </header>
      <main className="">
        <Outlet />
      </main>
      <Toaster />
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;

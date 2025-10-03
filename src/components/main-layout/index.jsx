import React from "react";
import Header from "../header";
import Footer from "../footer";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main className="w-[90%] m-auto">
        <Outlet />
        <Toaster />
        <Footer />
      </main>
    </>
  );
};

export default MainLayout;

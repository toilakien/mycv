import React from "react";
import Header from "./header";
import { Outlet } from "react-router-dom";
import Footer from "./footer";

const Layout = ({ children }: any) => {
  return (
    <div className="w-full">
      <div className="w-wrapper">
        <Header />
        {(children && children) || <Outlet />}
        <hr />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;

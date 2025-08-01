import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import    FloatingIcon  from "./FloatingIcon";

import { Outlet } from "react-router-dom";


const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
   <FloatingIcon />
      <Footer />
    </div>
  );
};
export default Layout
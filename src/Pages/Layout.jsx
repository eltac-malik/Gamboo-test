import React from "react";
import Right from "./components/Right-side/Right";
import Side from "./components/Side/Side";
import MainRoutes from "./Main/MainRoutes";

function Layout() {
  return (
    <div className="layout">
      <Side />
      <MainRoutes />
      <Right />
    </div>
  );
}

export default Layout;

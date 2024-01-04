import React from "react";
import { Outlet } from "react-router-dom";
import "./Layout.sass";
import MenuBar from "./MenuBar";

function layout() {
  return (
    <div>
      <div className="menubar-area">
        <MenuBar />
      </div>
      <div className="page-area">
        <Outlet />
      </div>
    </div>
  );
}

export default layout;

import React from "react";
import { Outlet } from "react-router-dom";
import "./Layout.sass";

function layout() {
  return (
    <div>
      <div className="menubar-area">Menu Bar</div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default layout;

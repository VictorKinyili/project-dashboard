import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

function Layout() {
  return (
    <div style={{ display: "flex", minHeight: "100vh", backgroundColor: "#f8fafc" }}>
      <NavBar />
      <main style={{ flex: 1, padding: "24px 32px" }}>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;

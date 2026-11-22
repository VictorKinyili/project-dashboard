import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const link = ({ isActive }) => ({
    display: "block",
    padding: "10px 14px",
    borderRadius: "8px",
    color: "#ffffff",
    textDecoration: "none",
    backgroundColor: isActive ? "#1e3a8a" : "transparent",
    marginBottom: "8px",
    fontWeight: isActive ? "600" : "400",
  });

  return (
    <aside style={{ width: "240px", minHeight: "100vh", backgroundColor: "#0f2544", color: "#fff", padding: "24px 16px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "32px" }}>
        <div style={{ width: "32px", height: "32px", backgroundColor: "#fff", borderRadius: "6px" }} />
        <div>
          <h2 style={{ margin: 0, fontSize: "16px" }}>K-TECH</h2>
          <small style={{ color: "#94a3b8", fontSize: "10px" }}>ADMIN CONSOLE</small>
        </div>
      </div>

      <nav>
        <NavLink to="/" end style={link}>Dashboard</NavLink>
        <NavLink to="/products" style={link}>Products</NavLink>
      </nav>
    </aside>
  );
}

export default Navbar;

import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-mark">K</div>
        <div><h2>K-TECH</h2><small>ADMIN CONSOLE</small></div>
      </div>
      <nav>
        <NavLink to="/" end className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}>Dashboard</NavLink>
        <NavLink to="/products" className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}>Products</NavLink>
      </nav>
    </aside>
  );
}

export default Navbar;

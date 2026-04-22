import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/create"   className={({ isActive }) => isActive ? "active" : ""}>
        Create Employee
      </NavLink>
      <NavLink to="/employees" className={({ isActive }) => isActive ? "active" : ""}>
        Employee List
      </NavLink>
    </nav>
  );
}
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import "./Layout.css";

export default function Layout() {
  return (
    <div className="layout">
      <Navbar />
      <main >
        <Outlet />
      </main>
    </div>
  );
}
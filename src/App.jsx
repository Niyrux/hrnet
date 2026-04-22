import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import CreateEmployee from "./pages/CreateEmployee.jsx";
import EmployeeList from "./pages/EmployeeList.jsx";
import "./App.css";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Navigate to="/create" replace />} />
        <Route path="/create" element={<CreateEmployee />} />
        <Route path="/employees" element={<EmployeeList />} />
        <Route path="*" element={<div>404</div>} />
      </Route>
    </Routes>
  );
}
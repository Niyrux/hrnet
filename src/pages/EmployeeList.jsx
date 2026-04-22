import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { selectEmployees } from "../store/employeesSlice";
import TableControls from "../table/tablecontrols";
import EmployeeTable from "../table/employeetable";
import Pagination from "../table/pagination";

import "./EmployeeList.css";

const SEARCHABLE_KEYS = [
  "firstName", "lastName", "startDate", "dateOfBirth",
  "street", "city", "state", "zipCode", "department",
];

function filterEmployees(employees, query) {
  const q = query.trim().toLowerCase();
  if (!q) return employees;

  return employees.filter((emp) =>
    SEARCHABLE_KEYS
      .map((k) => emp[k] ?? "")
      .join(" ")
      .toLowerCase()
      .includes(q)
  );
}

export default function EmployeeList() {
  const employees = useSelector(selectEmployees);

  const [query,       setQuery]       = useState("");
  const [entries,     setEntries]     = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  function handleQueryChange(q) {
    setQuery(q);
    setCurrentPage(1);
  }
  function handleEntriesChange(n) {
    setEntries(n);
    setCurrentPage(1);
  }

  const filtered = useMemo(
    () => filterEmployees(employees, query),
    [employees, query]
  );

  const totalPages = Math.max(1, Math.ceil(filtered.length / entries));

  const visible = useMemo(() => {
    const start = (currentPage - 1) * entries;
    return filtered.slice(start, start + entries);
  }, [filtered, currentPage, entries]);

  return (
<section className="employee-list">
      <h1>Employee List</h1>
<div className="table-wrapper">
      <TableControls
        entries={entries}
        onEntriesChange={handleEntriesChange}
        query={query}
        onQueryChange={handleQueryChange}
      />

      {filtered.length === 0 ? (
        <p>{employees.length === 0 ? "No employees yet." : "No matching employees."}</p>
      ) : (
        <EmployeeTable employees={visible} />
      )}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        visibleCount={visible.length}
        totalCount={filtered.length}
      />
      </div>
    </section>
  );
}
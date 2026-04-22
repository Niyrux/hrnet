import "./employeetable.css";

const COLUMNS = [
  { key: "firstName",   label: "First name"   },
  { key: "lastName",    label: "Last name"    },
  { key: "startDate",   label: "Start date"   },
  { key: "dateOfBirth", label: "Date of birth"},
  { key: "street",      label: "Street"       },
  { key: "city",        label: "City"         },
  { key: "state",       label: "State"        },
  { key: "zipCode",     label: "Zip code"     },
  { key: "department",  label: "Department"   },
];

export default function EmployeeTable({ employees }) {
  return (
    <div>
      <table className="employee-table"
      >
        <thead>
          <tr>
            {COLUMNS.map(({ key, label }) => (
              <th
                key={key}
              >
                {label}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id} >
              {COLUMNS.map(({ key }) => (
                <td key={key} >
                  {emp[key] ?? "—"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
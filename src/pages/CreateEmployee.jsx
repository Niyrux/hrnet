import { useState } from "react";
import { useDispatch } from "react-redux";
import { employeeAdded } from "../store/employeesSlice";
import states from "../data/states";
import FormField from "../form/formfield";
import SelectField from "../form/selectfield";
import DateField from "../form/datefield";
import HrnetModal from '@niirux/hrnet-modal';
import './CreateEmployee.css';

const STATE_OPTIONS = states.map((s) => ({ value: s.abbreviation, label: s.name }));

const DEPARTMENT_OPTIONS = [
  { value: "Sales",           label: "Sales"           },
  { value: "Marketing",       label: "Marketing"       },
  { value: "Engineering",     label: "Engineering"     },
  { value: "Human Resources", label: "Human Resources" },
  { value: "Legal",           label: "Legal"           },
];


const INITIAL_FORM = {
  firstName:   "",
  lastName:    "",
  startDate:   "",
  dateOfBirth: "",
  street:      "",
  city:        "",
  state:       "",
  zipCode:     "",
  department:  "",
};


function validate(form) {
  const errors = {};

  if (!form.firstName.trim())  errors.firstName   = "First name is required";
  if (!form.lastName.trim())   errors.lastName    = "Last name is required";
  if (!form.startDate)         errors.startDate   = "Start date is required";
  if (!form.dateOfBirth)       errors.dateOfBirth = "Date of birth is required";
  if (!form.street.trim())     errors.street      = "Street is required";
  if (!form.city.trim())       errors.city        = "City is required";
  if (!form.state)             errors.state       = "State is required";
  if (!form.department)        errors.department  = "Department is required";

  if (!form.zipCode.trim()) {
    errors.zipCode = "Zip code is required";
  } else if (!/^\d+$/.test(form.zipCode.trim())) {
    errors.zipCode = "Zip code must be numeric";
  }

  return errors;
}


export default function CreateEmployee() {
  const dispatch = useDispatch();
  const [form, setForm]       = useState(INITIAL_FORM);
  const [errors, setErrors]   = useState({});
  const [modalOpen, setModalOpen] = useState(false);

  const set = (field) => (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  function handleSubmit(e) {
    e.preventDefault();
    const nextErrors = validate(form);

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    dispatch(
      employeeAdded({
        ...form,
        firstName:  form.firstName.trim(),
        lastName:   form.lastName.trim(),
        street:     form.street.trim(),
        city:       form.city.trim(),
        zipCode:    form.zipCode.trim(),
        department: form.department.trim(),
      })
    );

    setForm(INITIAL_FORM);
    setErrors({});
    setModalOpen(true);
  }

  return (
    <section className="create-employee">
      <h1>Create Employee</h1>

      <form
        onSubmit={handleSubmit}
        style={{ display: "grid", gap: 12, maxWidth: 360 }}
         className="employee-form"
      >
        <FormField
          label="First name"
          value={form.firstName}
          onChange={set("firstName")}
          error={errors.firstName}
        />

        <FormField
          label="Last name"
          value={form.lastName}
          onChange={set("lastName")}
          error={errors.lastName}
        />

        <DateField
          label="Start Date"
          value={form.startDate}
          onChange={set("startDate")}
          error={errors.startDate}
        />

        <DateField
          label="Date of Birth"
          value={form.dateOfBirth}
          onChange={set("dateOfBirth")}
          error={errors.dateOfBirth}
        />

        <FormField
          label="Street"
          value={form.street}
          onChange={set("street")}
          error={errors.street}
        />

        <FormField
          label="City"
          value={form.city}
          onChange={set("city")}
          error={errors.city}
        />

        <SelectField
          label="State"
          value={form.state}
          onChange={set("state")}
          options={STATE_OPTIONS}
          placeholder="Select a state"
          error={errors.state}
        />

        <FormField
          label="Zip Code"
          value={form.zipCode}
          onChange={set("zipCode")}
          error={errors.zipCode}
        />

        <SelectField
          label="Department"
          value={form.department}
          onChange={set("department")}
          options={DEPARTMENT_OPTIONS}
          placeholder="Select a department"
          error={errors.department}
        />

        <button type="submit" style={{ marginTop: 4 }}>
          Create
        </button>
      </form>

      <HrnetModal open={modalOpen} onClose={() => setModalOpen(false)}>
        <h2 style={{ margin: 0 }}>Employee created!</h2>
        <p style={{ marginBottom: 0 }}>The employee has been successfully saved.</p>
      </HrnetModal>
    </section>
  );
}
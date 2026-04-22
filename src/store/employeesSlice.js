import { createSlice, nanoid } from "@reduxjs/toolkit";
import { mockEmployees } from "../data/mockemployeedata";

const initialState = {
  items: mockEmployees,  
};

const employeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    employeeAdded: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(employee) {
        return {
          payload: {
            id:          nanoid(),
            firstName:   employee.firstName   ?? "",
            lastName:    employee.lastName    ?? "",
            startDate:   employee.startDate   ?? "",
            dateOfBirth: employee.dateOfBirth ?? "",
            street:      employee.street      ?? "",
            city:        employee.city        ?? "",
            state:       employee.state       ?? "",
            zipCode:     employee.zipCode     ?? "",
            department:  employee.department  ?? "",
          },
        };
      },
    },

    employeesReplaced(state, action) {
      state.items = action.payload;
    },
  },
});

export const { employeeAdded, employeesReplaced } = employeesSlice.actions;
export const selectEmployees = (state) => state.employees.items;
export default employeesSlice.reducer;
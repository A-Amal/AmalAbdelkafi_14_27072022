import { EMPLOYEES_ADD, EMPLOYEES_GET } from "./EmployeesActions"
import {v4 as uuid} from "uuid";
import employeesJson from "../employees.json"

/**
 * @const initialState
 */
const initialState = {
    employees: JSON.parse(localStorage.getItem('employees')) || [],
}
/**
 * Employees reducer
 * @param {Object} state
 * @param {Object} action
 * @returns {Object}
 */
export default function employeesReducer(state = initialState, action) {
    switch(action.type) {
        // Add an employee
        case EMPLOYEES_ADD : {
            const newEmployee = action.payload
            newEmployee.key = uuid()
            const employeesList = JSON.parse(localStorage.getItem('employees')) || []
            employeesList.push(newEmployee)
            localStorage.setItem('employees', JSON.stringify(employeesList))
            return {...state, employees: employeesList}
        }
        // Get a employees list
        case EMPLOYEES_GET : {
            //localStorage.setItem('employees', JSON.stringify(employeesJson))
            const employees = JSON.parse(localStorage.getItem('employees')) || []
            return {...state, employees: employees}
        }
        // Default
        default:
            return state
    }
}

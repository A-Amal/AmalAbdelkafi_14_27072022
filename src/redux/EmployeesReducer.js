import { EMPLOYEES_ADD, EMPLOYEES_GET } from "./EmployeesActions"

/**
 * @const initialState
 */
const initialState = {
    employees: [],
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
            const employeesList = JSON.parse(localStorage.getItem('employees')) || []
            employeesList.push(newEmployee)
            localStorage.setItem('employees', JSON.stringify(employeesList))
            return {...state, employees: employeesList}
        }
        // Get a employees list
        case EMPLOYEES_GET : {
            const employees = JSON.parse(localStorage.getItem('employees')) || []
            return {...state, employees: employees}
        }
        // Default
        default:
            return state
    }
}

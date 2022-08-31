/**
 * Auth selector
 * @param {Object} state
 * @returns {Function}
 */
import employeesReducer from "./EmployeesReducer";


export const employeesSelector = (state) => (employeesReducer (state, {}))

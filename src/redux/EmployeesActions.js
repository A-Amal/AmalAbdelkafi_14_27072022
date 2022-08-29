/**
 * Employees
 */
export const EMPLOYEES_ADD = 'EMPLOYEES_ADD'
export const EMPLOYEES_GET = 'EMPLOYEES_GET'

/**
 * Add an employee
 * @param {Object} employee
 * @returns {Object}
 */
export const employeesAdd = (employee) => {
    return { type: EMPLOYEES_ADD, payload: employee }
}

/**
 * Get employees list
 * @returns {Object}
 */
export const employeesGet = () => {
    return { type: EMPLOYEES_GET }
}

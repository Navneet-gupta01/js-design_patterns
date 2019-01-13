const Employee = require('./Employee')
const EmployeeGroup = require('./EmployeeGroup')

const interns = new EmployeeGroup('Interns', [new Employee('Intern1', 401, 100), new Employee('Intern2', 402, 100), new Employee('Intern3', 403, 200)])
const managers = new EmployeeGroup('Managers', [new Employee('Manager1', 301, 1000), new Employee('Manager2', 302, 2000)])
const deptHead = new Employee('HOD', 201, 10000)
const ceo = new Employee('CEO', 101, 10000)
const org = new EmployeeGroup('Organization', [ceo, deptHead, managers, interns])

console.log(`Total Bonus distributed from Organization: ${org.total}`)
org.print()

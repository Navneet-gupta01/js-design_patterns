class EmployeeGroup {
  constructor (name, groups = []) {
    this.name = name
    this.groups = groups
  }

  get total () {
    return this.groups.reduce((total, nextEmployee) => total + nextEmployee.total, 0)
  }

  print () {
    console.log(`\n${this.name.toUpperCase()}`)
    this.groups.forEach(employee => employee.print())
  }
}

module.exports = EmployeeGroup

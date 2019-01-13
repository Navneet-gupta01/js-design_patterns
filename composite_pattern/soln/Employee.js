class Employee {
  constructor (name, empId, bonus) {
    this.name = name
    this.empId = empId
    this.bonus = bonus
  }

  get total () {
    return this.bonus
  }

  print () {
    console.log(JSON.stringify(this))
  }
}

module.exports = Employee

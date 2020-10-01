function Employee(name, jobTitle, salary, status = "Full Time") {
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = status;

}

Employee.prototype.printEmployeeForm = function() {
    const employeeForm = `Name: ${this.name}, Job Title: ${this.jobTitle}, Salary: ${this.salaray}, Status: ${this.status}`;

    console.log(employeeForm);
    return employeeForm;
}

const bob = new Employee("Bob", "CEO", "$200k/year", "Full Time");
const george = new Employee("George", "Janitor", "$25k/year", "Part Time");
const jim = new Employee("Jim", "Lead Designer", "$95k/year", "Contract");

const employees = [];
employees.push(bob.printEmployeeForm());
employees.push(george.printEmployeeForm());
employees.push(jim.printEmployeeForm());

console.log(employees);
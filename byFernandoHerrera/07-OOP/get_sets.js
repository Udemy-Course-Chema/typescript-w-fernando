"use strict";
(() => {
    class Person {
        constructor(name, age, gov, hasJob) {
            this.name = name;
            this.age = age;
            this.gov = gov;
            this.hasJob = hasJob;
        }
    }
    class Employee extends Person {
        constructor(name, age, hasJob, employeeID, rol, salaries) {
            super(name, age, undefined, hasJob);
            this.employeeID = employeeID;
            this.rol = rol;
            this.salaries = salaries;
        }
        get fullName() {
            return `El nombre es: ${this.name} y tiene ${this.age} años`;
        }
        set setName(name) {
            if (name.length < 3)
                throw new Error('El nombre debe de ser mayor de 3 letras');
            this.name = name;
        }
    }
    const employee_karla = new Employee('Karla', 25, true, 12555, 'DevOp', 15000);
    console.log(employee_karla.fullName);
    employee_karla.setName = 'K';
    console.log(employee_karla.fullName);
})();
//# sourceMappingURL=get_sets.js.map
( () => {


    class Person{
        constructor(
            public name:string, 
            public age:number, 
            private gov?:string, 
            public hasJob?:boolean
        ){}


    }

    class Employee extends Person{

        constructor(
            name:string, 
            age:number, 
            hasJob:boolean,
            public employeeID:number, 
            public rol:string, 
            private salaries?:number
    ){
            super(name, age, undefined, hasJob);
        }

        public get fullName():string {
            return `El nombre es: ${ this.name } y tiene ${ this.age } años`;
        }

        public set setName(name:string) {
            if( name.length < 3 ) throw new Error('El nombre debe de ser mayor de 3 letras');
            this.name = name;
        }


    }

    const employee_karla = new Employee('Karla', 25, true,12555, 'DevOp', 15000);

    console.log( employee_karla.fullName );

    employee_karla.setName = 'K';

    console.log( employee_karla.fullName );


})()
"use strict";
(() => {
    const cliente = {
        name: 'John',
        age: 25,
        getFullName(id) {
            console.log(`This name is: ${this.name} and has ${this.age} years old`);
        }
    };
    console.log(cliente.getFullName(1));
})();
//# sourceMappingURL=metodo.js.map
"use strict";
(() => {
    class Mutant {
        constructor(name, realName, age) {
            this.name = name;
            this.realName = realName;
            this.age = age;
        }
        set setPower(numberPower) {
            this.powers = numberPower;
        }
        get getPower() {
            return this.powers;
        }
        mutantPower(howMany) {
            return `This mutant has ${this.powers} powers`;
        }
    }
    const wolverine = new Mutant('Wolverine', 'Logan', 40);
    wolverine.setPower = 5;
    console.log(wolverine);
    console.log(wolverine.mutantPower(2));
})();
//# sourceMappingURL=clases.js.map
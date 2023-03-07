"use strict";
(() => {
    class Avenger {
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        bio() {
            return `${this.name} ( ${this.team} )`;
        }
        action() {
            return `Accionando pero en secreto`;
        }
        static llamarLaNave() {
            return 'Allá voy a recoger a ustedes';
        }
    }
    Avenger.avgAge = 35;
    Avenger.myPi = 3.1416;
    const antman = new Avenger('Iron Man', 'Iron', 'Tony Stark');
    console.log(antman);
    console.log(antman.bio());
    console.log("Mi pi es: ", Avenger.myPi);
    console.log(Avenger.llamarLaNave());
})();
//# sourceMappingURL=basics.js.map
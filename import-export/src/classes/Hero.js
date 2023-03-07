define(["require", "exports", "../data/powers"], function (require, exports, powers_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Hero4 = exports.Hero3 = exports.Hero2 = exports.Hero = void 0;
    class Hero {
        constructor(name, powerId, age) {
            this.name = name;
            this.powerId = powerId;
            this.age = age;
        }
        get power() {
            console.log("Salida con find: ", powers_1.powers.find(item => item.id === this.powerId));
            console.log("Salida con filter: ", powers_1.powers.filter(item => item.id === this.powerId));
            return powers_1.powers.filter(item => item.id === this.powerId);
        }
    }
    exports.Hero = Hero;
    class Hero2 {
    }
    exports.Hero2 = Hero2;
    class Hero3 {
    }
    exports.Hero3 = Hero3;
    class Hero4 {
    }
    exports.Hero4 = Hero4;
});

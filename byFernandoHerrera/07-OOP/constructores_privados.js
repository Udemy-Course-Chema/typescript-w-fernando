"use strict";
(() => {
    class Apocalipsis {
        constructor(name) {
            this.name = name;
        }
        static callApocalipsis() {
            if (!Apocalipsis.instance) {
                Apocalipsis.instance = new Apocalipsis('Soy apocalipsis, el único nada más');
            }
            return Apocalipsis.instance;
        }
        changeName(newName) {
            this.name = newName;
        }
    }
    const apo1_instance1 = Apocalipsis.callApocalipsis();
    const apo1_instance2 = Apocalipsis.callApocalipsis();
    const apo1_instance3 = Apocalipsis.callApocalipsis();
    apo1_instance1.changeName('Caos');
    console.log(apo1_instance1, apo1_instance2, apo1_instance3);
})();
//# sourceMappingURL=constructores_privados.js.map
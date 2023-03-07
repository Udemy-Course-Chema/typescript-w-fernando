"use strict";
(() => {
    class Mutante {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
    }
    class Xmen extends Mutante {
        saveTheWorld() {
            return `Salvado el mundo con éxito`;
        }
        atacar() {
            console.log('Atacando');
        }
        bio() {
            return `El nombre es: ${this.name}`;
        }
    }
    class Villian extends Mutante {
        atacar() {
            console.log('El villano ataca');
        }
        bio() {
            return `Soy villano: ${this.name}`;
        }
        destroyTheWorld() {
            return `Destruir el mundo con éxito`;
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan');
    const magneto = new Villian('Magneto', 'Magnus');
    console.log(wolverine.bio());
    const printName = (character) => {
        console.log(character.realName);
    };
    printName(wolverine);
})();
//# sourceMappingURL=abstractas.js.map
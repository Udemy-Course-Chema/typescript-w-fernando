"use strict";
(() => {
    class Cars {
        constructor(model, rim = 4, color, year, price, inversor) {
            this.model = model;
            this.rim = rim;
            this.color = color;
            this.year = year;
            this.price = price;
            this.inversor = inversor;
        }
        carro() {
            return `El carro es: ${this.model} y es del año ${this.year}`;
        }
        inv() {
            return `El retorno del inversión es: ${this.inversor}`;
        }
        static year() {
            return `El año es: `;
        }
    }
    Cars.plant = 'Planta de Carro en UPQ';
    class Bus extends Cars {
        constructor(model, rim, year, isHeavy = false) {
            super(model, rim, undefined, 2020);
            this.isHeavy = isHeavy;
        }
        getCamioneta() {
            return super.carro() + ' Y es de tipo camión';
        }
    }
    const carro = new Cars("Nissan Tsuru", 4, 'Rojo', 2020, 15000, 80000);
    const camioneta = new Bus("Camioneta VW", 8, 2050, true);
    console.log(camioneta.carro());
    console.log(camioneta.getCamioneta());
})();
//# sourceMappingURL=herencia.js.map
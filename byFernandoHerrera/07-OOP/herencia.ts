
// HERENCIA
(() => {


    class Cars {

        static plant:string = 'Planta de Carro en UPQ';

        constructor(public model: string,
                    public rim:number = 4,
                    public color?: string,
                    public year?:number, 
                    private price?: number, 
                    private inversor?: number
        ) {}

        public carro(): string {
            return `El carro es: ${ this.model } y es del año ${ this.year }`;
        }

        private inv():string{
            return `El retorno del inversión es: ${ this.inversor }`;
        }

        static year():string{
            return `El año es: `;
        }

    }// End Cars

    class Bus extends Cars{

        constructor(
            model:string, 
            rim:number,
            year:number, 
            public isHeavy:boolean = false
        ){
            super(model, rim, undefined, 2020);

        }

        public getCamioneta():string{
            return super.carro() + ' Y es de tipo camión';
        }

    }


    const carro = new Cars("Nissan Tsuru",4,'Rojo',2020,15000,80000);

    // console.log(carro.carro());

    const camioneta = new Bus("Camioneta VW", 8, 2050, true);
    console.log(camioneta.carro());
    console.log( camioneta.getCamioneta() );



})()
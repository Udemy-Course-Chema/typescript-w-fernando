
/**
 *  CONSTRUCTOR PRIVADO
 *  Se usa para controlar la manera 
 * en la cual las instancias son ejecutadas. 
 * ¿Para qué?
 * Para manejar Singleton
 */


( () => {

    class Apocalipsis{

        static instance:Apocalipsis;

        private constructor( public name:string){}

        static callApocalipsis(): Apocalipsis{
            if( !Apocalipsis.instance ){
                Apocalipsis.instance = new Apocalipsis('Soy apocalipsis, el único nada más');
            }
            return Apocalipsis.instance;
        }

        public changeName(newName:string):void{
            this.name = newName;
        }
    }

    const apo1_instance1 = Apocalipsis.callApocalipsis();
    const apo1_instance2 = Apocalipsis.callApocalipsis();
    const apo1_instance3 = Apocalipsis.callApocalipsis();

    apo1_instance1.changeName('Caos');

    console.log( apo1_instance1, apo1_instance2, apo1_instance3 );
    // const apo = new Apocalipsis('Soy el apocalipsís1');
    // const apo2 = new Apocalipsis('Soy el apocalipsís2');
    // const apo3 = new Apocalipsis('Soy el apocalipsís3');
})()
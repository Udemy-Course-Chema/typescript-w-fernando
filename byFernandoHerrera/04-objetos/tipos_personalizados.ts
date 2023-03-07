

( () => {

    // PALABRA RESERVADA DEL TYPESCRIPT: type
    // Como typeof de JavaScript.

    type Hero = {
        name: string;
        age?: number;
        powers:string[];
        getName?: () => string;
    }

    let flash: Hero = {
        name: 'Barry Allen',
        powers: ['Velocidad', 'Viajar en el tiempo']
    }

    let superman: Hero = {
        name: 'Clark Kent',
        powers: ['Súper velocidad', 'Fuerza sobrehumana'],
        getName(){
            return `Nombre: ${ this.name }`
        }
    }

    

    
})()
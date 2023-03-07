
( () => {

    class Avenger{
        name;
        power;

        constructor(name, power){
            this.name = name;
            this.power = power;
        }

    }

    const ironman = new Avenger('Iron Man', 'Rocket Armor');

    console.log( ironman );

})()
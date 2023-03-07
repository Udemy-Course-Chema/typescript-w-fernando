

( () => {
    console.log( 'hello world' ); 


    // Desestructuración

    // const avengersArr:[string, string, boolean] = ['cap','iron',false];

    // const [capitan, ironman, isActive ] = avengersArr;

    // console.log( capitan, ironman, isActive );


    type Avenger = {
        name:string;
        weapon:string;
    }
    const ironman:Avenger = {
        name: 'Iron man',
        weapon: 'Armorsuit'
    };

    const thor:Avenger = {
        name: 'Thor',
        weapon: 'Mjaljoin'
    };
    const hulk:Avenger = {
        name: 'Hulk',
        weapon: 'Punches'
    };

    const avengers: Avenger[] = [ ironman, thor, hulk ];
    
    for (const avenger of avengers) {
        console.log( avenger );
    }


})()
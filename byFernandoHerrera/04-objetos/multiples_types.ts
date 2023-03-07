
( () => {
    type Hero = {
        name: string;
        age?: number;
        powers:string[];
        getName?: () => string;
    }

    let myCustomVariable: (string | Hero);

    myCustomVariable = 'Hello';
})()
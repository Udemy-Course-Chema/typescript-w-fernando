

( ()=>{

    // const numbers:(number | string)[] = [1,2,3,4,5,6,7,8,9,10,'11'];
    const numbers:(number | string | boolean | Object)[] = [1,2,3,4,5,6,7,8,9,10,'11'];


    numbers.push('20');
    numbers.push(false);
    numbers.push( { hola:"Hola" })
    console.log( numbers )

    const villains: string[] = ['joker','harley quinn','two face'];

    villains.forEach( item => console.log( item ) );


})()
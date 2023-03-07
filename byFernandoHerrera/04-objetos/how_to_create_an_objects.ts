
( () => {
    const arr: {}[] = [];
    let obj:{ name:string, address: string, code:number, opcional?:string, isActive?:boolean, getName?:() => string } = {
        name: 'John',
        address: 'Villa Vallejo',
        code: 200
    };
    arr.push( obj );

    obj = {
        name: 'Kali',
        address: 'Carbon',
        code: 200,
        getName(){
            return this.name;
        }
    }
    arr.push( obj );

 
    console.log( arr );
})()
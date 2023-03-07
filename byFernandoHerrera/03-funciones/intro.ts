( () => {

    const hero:string = 'Flash';
    
    function getNombre( data:string ):(string | number){
        return hero;
    }
    function getNothing( data:string ):void{
        const nada = data;
        return;
    }

    const activeBatSignal = (data:number):number => {
        return data;
    }

    const isSignal = (data:boolean):boolean => {
        return data;
    }

    // Arreglos
    const arrStrings = (data: string[]):string[]=> {
        return data;
    }

    const allArrays = (data: any[]): any[] => {
        return data;
    }

    


})()
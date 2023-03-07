
export const printObject = (argument:any) => {
    console.log( argument );
}

// <T> -> Type
export function funcionGenerica<T>( args:T): T{
    return args;
}

export const arrowFunction = <T>(args:T):T => {
    return args;
}
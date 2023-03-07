(() => {

    // Tipos
    const batman:string = 'Bruce';
    const superman:string = 'Clark';
  
    const existe:boolean = false;
  
    // Tuplas
    const parejaHeroes:[string, string] = [batman,superman];
    const villano: [string, number, boolean] = ['Lex Lutor',5,true];
  
    // Arreglos
    const aliados: string[] = ['Mujer Maravilla','Acuaman','San', 'Flash'];
  
    //Enumeraciones
    enum Fuerza{
      min= 0,
      less= 1,
      medium= 5,
      max= 100
    }
    const fuerzaFlash: Fuerza = Fuerza.medium;
    const fuerzaSuperma: Fuerza = Fuerza.max;
    const fuerzaBatman: Fuerza = Fuerza.less;
    const fuerzaAcuaman: Fuerza = Fuerza.min;
    // const fuerzaFlash: Fuerza = 5;
    // const fuerzaSuperma: Fuerza = 100;
    // const fuerzaBatman: Fuerza = 1;
    // const fuerzaAcuaman: Fuerza = 0;
  
    // Retorno de funciones
    function activar_batiseñal(): string{
      return 'activada';
    }
  
    function pedir_ayuda(): void{
      console.log('Auxilio!!!');
    }
  
    // Aserciones de Tipo
    const poder: any = '100';
    const largoDelPoder:number = (poder as string).length;
    // const largoDelPoder:number = Number(poder.length);
    console.log( largoDelPoder );
  
  
  })()
  
  
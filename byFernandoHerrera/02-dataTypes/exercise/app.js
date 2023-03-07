"use strict";
(function () {
    var batman = 'Bruce';
    var superman = 'Clark';
    var existe = false;
    var parejaHeroes = [batman, superman];
    var villano = ['Lex Lutor', 5, true];
    var aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    var Fuerza;
    (function (Fuerza) {
        Fuerza[Fuerza["min"] = 0] = "min";
        Fuerza[Fuerza["less"] = 1] = "less";
        Fuerza[Fuerza["medium"] = 5] = "medium";
        Fuerza[Fuerza["max"] = 100] = "max";
    })(Fuerza || (Fuerza = {}));
    var fuerzaFlash = Fuerza.medium;
    var fuerzaSuperma = Fuerza.max;
    var fuerzaBatman = Fuerza.less;
    var fuerzaAcuaman = Fuerza.min;
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    var poder = '100';
    var largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
//# sourceMappingURL=app.js.map
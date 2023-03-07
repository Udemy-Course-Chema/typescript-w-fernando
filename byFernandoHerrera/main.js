"use strict";
(function () {
    console.log('Hello');
})();
var msg = "hello world";
var numero = 0;
var obj = {
    name: 'ironman',
    age: 40
};
console.log(msg);
(function () {
    var avenger = 10;
    avenger = 'Iron Man';
    console.log(avenger.charAt(0));
    avenger = 10.156891;
    console.log(avenger.toFixed(2));
})();
(function () {
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, '11'];
    numbers.push('20');
    numbers.push(false);
    numbers.push({ hola: "Hola" });
    console.log(numbers);
    var villains = ['joker', 'harley quinn', 'two face'];
    villains.forEach(function (item) { return console.log(item); });
})();
(function () {
    var isSuperman = true;
    var isBatman = false;
    console.log(isSuperman, isBatman);
    console.log({ isSuperman: isSuperman }, { isBatman: isBatman });
})();
(function () {
    var AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 5] = "medium";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    var currentAudio2 = 10;
    var currentAudio = AudioLevel.max;
    console.log(currentAudio);
    console.log(currentAudio2);
})();
(function () {
    var error = function (message) {
        throw new Error(message);
    };
    error(' NO SIRVE LA FUNCIÖN');
    console.log('A ver, que pedo ? ');
})();
(function () {
    var active = true;
    var nada = undefined;
    var nulo = null;
    console.log(nada);
    console.log(nulo);
    console.log(nada === nulo);
})();
(function () {
    var avengers;
    avengers = 20;
    var villians = 200;
    avengers = Number('200');
    console.log({ avengers: avengers });
    console.log(villians);
})();
(function () {
    var _a;
    var batman = 'batman';
    var linternaVerde = "Héroe: LInterna Verde";
    var catwoman = "Catwoman";
    console.log(batman.toUpperCase());
    console.log((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase());
})();
var a = 10;
(function () {
    var b = 20;
    console.log(b);
})();
(function () {
    var hero = ["hola", 100];
    hero.push(200);
    hero.push(100);
    hero[0] = " Hello world";
    console.log(hero);
})();
(function () {
    function callBatman() {
        return;
    }
    var callSuperman = function () {
        return;
    };
    var a = callBatman();
    console.log(a);
})();
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
(function () {
    var fullName = function (first, second) {
        return "".concat(first, " ").concat(second);
    };
    var isObligatorio = function (first, second, third) {
        if (third === void 0) { third = 0; }
        return "".concat(first, ", ").concat(second, " son obligatorios, mientas que el ").concat(third, " no lo es.");
    };
    var name = fullName('John', 'Wick');
    var w = isObligatorio('hola', 'dos');
    console.log(w);
})();
(function () {
    var addNumbers = function (a, b) { return a + b; };
    var greet = function (name) { return "Hola ".concat(name); };
    var saveTheWorld = function () { return "El mundo est\u00E1 salvado"; };
    var myFunction;
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
(function () {
    var hero = 'Flash';
    function getNombre(data) {
        return hero;
    }
    function getNothing(data) {
        var nada = data;
        return;
    }
    var activeBatSignal = function (data) {
        return data;
    };
    var isSignal = function (data) {
        return data;
    };
    var arrStrings = function (data) {
        return data;
    };
    var allArrays = function (data) {
        return data;
    };
})();
(function () {
    var fullName = function (first, second) {
        return "".concat(first, " ").concat(second);
    };
    var name = fullName('John');
})();
(function () {
    var fullName = function (first, second, upper) {
        if (upper === void 0) { upper = false; }
        if (upper) {
            return "".concat(first, ", ").concat(second).toUpperCase();
        }
        else {
            return "".concat(first, ", ").concat(second);
        }
    };
    var nombre = fullName('John', 'Wick', true);
    var nombre2 = fullName('John', undefined, true);
    console.log(nombre);
    console.log(nombre2);
})();
(function () {
    var fullName = function (first) {
        var _a;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return "".concat(first, " ").concat((_a = args.join(' ')) === null || _a === void 0 ? void 0 : _a.toUpperCase());
    };
    var superman = fullName('Clark', 'Joseph', 'Kent');
    console.log(superman);
})();
function sumar(a, b) {
    return a + b;
}
var contar = function (heroes) {
    return heroes.length;
};
var superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);
var llamarBatman = function (llamar) {
    if (llamar === void 0) { llamar = false; }
    if (llamar) {
        console.log("Batiseñal activada");
    }
};
llamarBatman();
var unirheroes = function () {
    var personas = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        personas[_i] = arguments[_i];
    }
    return personas.join(", ");
};
var noHaceNada = function (numero, texto, booleano, arreglo) { };
var noHaceNadaTampoco;
noHaceNadaTampoco = noHaceNada;
var batimovil = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros: 4
};
var bumblebee = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros: 4,
    disparar: function () {
        console.log("Disparando");
    }
};
var villanos = [{
        nombre: "Lex Luthor",
        edad: 54,
        mutante: false
    }, {
        nombre: "Erik Magnus Lehnsherr",
        edad: 49,
        mutante: true
    }, {
        nombre: "James Logan",
        edad: undefined,
        mutante: true
    }];
var charles = {
    poder: "psiquico",
    estatura: 1.78
};
var apocalipsis = {
    lider: true,
    miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
};
var mystique;
mystique = charles;
mystique = apocalipsis;
//# sourceMappingURL=main.js.map
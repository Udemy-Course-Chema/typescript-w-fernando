"use strict";
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
//# sourceMappingURL=argumentos.js.map
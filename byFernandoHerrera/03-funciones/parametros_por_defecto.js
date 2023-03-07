"use strict";
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
//# sourceMappingURL=parametros_por_defecto.js.map
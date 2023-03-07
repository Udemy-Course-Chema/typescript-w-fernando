"use strict";
var Validations;
(function (Validations) {
    Validations.validateText = (text) => text.length > 3;
    Validations.validateDate = (date) => {
        return (isNaN(date.valueOf())) ? false : true;
    };
})(Validations || (Validations = {}));
console.log(Validations.validateText('Joh'));
//# sourceMappingURL=validations.js.map
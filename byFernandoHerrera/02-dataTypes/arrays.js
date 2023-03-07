"use strict";
(function () {
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, '11'];
    numbers.push('20');
    numbers.push(false);
    numbers.push({ hola: "Hola" });
    console.log(numbers);
    var villains = ['joker', 'harley quinn', 'two face'];
    villains.forEach(function (item) { return console.log(item); });
})();
//# sourceMappingURL=arrays.js.map
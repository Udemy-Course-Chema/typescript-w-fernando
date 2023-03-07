"use strict";
(function () {
    var arr = [];
    var obj = {
        name: 'John',
        address: 'Villa Vallejo',
        code: 200
    };
    arr.push(obj);
    obj = {
        name: 'Kali',
        address: 'Carbon',
        code: 200,
        getName: function () {
            return this.name;
        }
    };
    arr.push(obj);
    console.log(arr);
})();
//# sourceMappingURL=how_to_create_an_objects.js.map
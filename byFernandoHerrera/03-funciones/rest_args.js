"use strict";
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
//# sourceMappingURL=rest_args.js.map
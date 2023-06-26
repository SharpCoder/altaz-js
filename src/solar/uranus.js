"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Uranus = void 0;
var body_1 = require("./body");
var Uranus = (function (_super) {
    __extends(Uranus, _super);
    function Uranus(d) {
        return _super.call(this, d, [74.0005, 1.3978E-5], [0.7733, 1.9E-8], [96.6612, 3.0565E-5], [19.18171, -1.55E-8], [0.047318, 7.45E-9], [142.5905, 0.011725806], 19.18, false) || this;
    }
    return Uranus;
}(body_1.Body));
exports.Uranus = Uranus;
//# sourceMappingURL=uranus.js.map
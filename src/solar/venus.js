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
exports.Venus = void 0;
var body_1 = require("./body");
var Venus = (function (_super) {
    __extends(Venus, _super);
    function Venus(d) {
        return _super.call(this, d, [76.6799, 2.46590E-5], [3.3946, 2.75E-8], [54.8910, 1.38374E-5], [0.723330], [0.006773, -1.302E-9], [48.0052, 1.6021302244], 0.723, false) || this;
    }
    return Venus;
}(body_1.Body));
exports.Venus = Venus;
//# sourceMappingURL=venus.js.map
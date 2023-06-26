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
exports.Mercury = void 0;
var body_1 = require("./body");
var Mercury = (function (_super) {
    __extends(Mercury, _super);
    function Mercury(d) {
        return _super.call(this, d, [48.3313, 3.24587E-5], [7.0047, 5.00E-8], [29.1241, 1.01444E-5], [0.387098], [0.205635, 5.59E-10], [168.6562, 4.0923344368], 0.39, false) || this;
    }
    return Mercury;
}(body_1.Body));
exports.Mercury = Mercury;
//# sourceMappingURL=mercury.js.map
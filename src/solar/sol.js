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
exports.Sol = void 0;
var body_1 = require("./body");
var Sol = (function (_super) {
    __extends(Sol, _super);
    function Sol(d) {
        return _super.call(this, d, [], [], [282.9404, 4.70935E-5], [1.00000], [0.016709, -1.151E-9], [356.0470, 0.9856002585], 0.0, true) || this;
    }
    Sol.prototype.magnitude = function () {
        return -26.74;
    };
    return Sol;
}(body_1.Body));
exports.Sol = Sol;
//# sourceMappingURL=sol.js.map
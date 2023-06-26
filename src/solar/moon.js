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
exports.Moon = void 0;
var body_1 = require("./body");
var Moon = (function (_super) {
    __extends(Moon, _super);
    function Moon(d) {
        return _super.call(this, d, [125.1228, -0.0529538083], [5.1454], [318.0634, 0.1643573223], [60.2666], [0.054900], [115.3654, 13.0649929509], 1.0, true) || this;
    }
    return Moon;
}(body_1.Body));
exports.Moon = Moon;
//# sourceMappingURL=moon.js.map
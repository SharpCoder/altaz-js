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
exports.Mars = void 0;
var body_1 = require("./body");
var Mars = (function (_super) {
    __extends(Mars, _super);
    function Mars(d) {
        return _super.call(this, d, [49.5574, 2.11081E-5], [1.8497, -1.78E-8], [286.5016, 2.92961E-5], [1.523688], [0.093405, 2.516E-9], [18.6021, 0.5240207766], 1.524, false) || this;
    }
    return Mars;
}(body_1.Body));
exports.Mars = Mars;
//# sourceMappingURL=mars.js.map
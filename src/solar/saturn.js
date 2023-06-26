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
exports.Saturn = void 0;
var body_1 = require("./body");
var Saturn = (function (_super) {
    __extends(Saturn, _super);
    function Saturn(d) {
        return _super.call(this, d, [113.6634, 2.38980E-5], [2.4886, -1.081E-7], [339.3939, 2.97661E-5], [9.55475], [0.055546, -9.499E-9], [316.9670, 0.0334442282], 9.539, false) || this;
    }
    return Saturn;
}(body_1.Body));
exports.Saturn = Saturn;
//# sourceMappingURL=saturn.js.map
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
exports.Neptune = void 0;
var body_1 = require("./body");
var Neptune = (function (_super) {
    __extends(Neptune, _super);
    function Neptune(d) {
        return _super.call(this, d, [131.7806, 3.0173E-5], [1.7700, -2.55E-7], [272.8461, -6.027E-6], [30.05826, 3.313E-8], [0.008606, 2.15E-9], [260.2471, 0.005995147], 30.06, false) || this;
    }
    return Neptune;
}(body_1.Body));
exports.Neptune = Neptune;
//# sourceMappingURL=neptune.js.map
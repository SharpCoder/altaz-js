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
exports.Jupiter = void 0;
var body_1 = require("./body");
var Jupiter = (function (_super) {
    __extends(Jupiter, _super);
    function Jupiter(d) {
        return _super.call(this, d, [100.4542, 2.76854E-5], [1.3030, -1.557E-7], [273.8777, 1.64505E-5], [5.20256], [0.048498, 4.469E-9], [19.8950, 0.0830853001], 5.203, false) || this;
    }
    return Jupiter;
}(body_1.Body));
exports.Jupiter = Jupiter;
//# sourceMappingURL=jupiter.js.map